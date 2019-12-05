
//
// bundles component class
//

var PageComponent = require("ds.base/PageComponent");
var BundleScriptable = require("bundles/BundleScriptable");

var BundlesServer = PageComponent.createPublic({
	"/": function(attributes, vars) {
		var vendorList = this._getLocalVendorList();
		var vendorMap = {};
		
		for (var i = 0; i < vendorList.length; i++) 
			vendorMap[vendorList[i].value] = vendorList[i].label;
		
		var bundleList = this._buildBundleChoices();
		for (var bundle in bundleList) {
			var thisBundle = bundleList[bundle];
			var vendor = thisBundle.vendor;
			thisBundle.vendor_label = vendorMap.hasOwnProperty(vendor) ? vendorMap[vendor] : vendor;
		}
		
		return new StatusResponse('good', {
			label: TRANSLATE("Loaded Bundles"),
			canSetup: new FRecord('bundle').accessToWriteBucket(),
			vendors: vendorList,
			bundles: bundleList,
			status: 'good'
		});
	},
	
	_getLocalVendorList: function() {
		var bundleVendorFr = new FRecord("bundle_vendor");
		bundleVendorFr.search();
		var choices = [];

		while (bundleVendorFr.next()) {
			var vendor = {
				value: bundleVendorFr.getIntId(),
				label: bundleVendorFr.getValue("name")
			};

			choices.push(vendor);
		}

		return choices;
	},

	_getBundleStoreVendorList:function() {
		var choices = [];
		var bs = new BundleScriptable();
		var vendors = bs.getBundleStoreVendors();
		for (var i = 0; i < vendors.length; i++) {
           	var thisVendor = vendors[i];
			choices.push({
				value: thisVendor.id,
               	label: thisVendor.name
			});
		}

		return choices;
	},
	
	_buildBundleChoices: function() {
		var bs = new BundleScriptable();
		var choices = [];
		
		var fr = new FRecord('bundle');
		fr.addSearch("bundle_type", "1");
		fr.addSort('title');
		fr.search();
		while (fr.next()) {
			if (!fr.accessToReadRow())
				continue;
			
			var def = fr.rowToJSON();
			def.label = def.title;
			def.value = def.bundle_id;
			def.haveIcon = bs.haveBundleIcon(def.bundle_id);
			choices.push(def);
			
		}
		
		return choices;
	},

	_createOrUpdateVendor: function(vendorObj) {
		if (!vendorObj.id || !vendorObj.name) {
			console.error(TRANSLATE("Invalid vendor object, will not create or update: %{data}", { data: JSON.stringifyPretty(vendorObj)} ));
			return;
		}

		var vendorFr = new FRecord("bundle_vendor");
		vendorFr.setSecurityChecks(true);
		if (vendorFr.getRecord(vendorObj.id)) {
			vendorFr.name = vendorObj.name;
			vendorFr.update();
		} else {
			vendorFr.newRecord();
			vendorFr.id = vendorObj.id;
			vendorFr.name = vendorObj.name;
			vendorFr.insert();
		}
	},
	
	"/ajax/getBundleStoreBundles": function(vars) {
		var bs = new BundleScriptable();
		var bundles = bs.getBundleStoreBundles(vars.vendor);
		var loadedBundles = bs.getLoadedBundles();
		var availableBundles = [];
		var loadedBundleIds = {};

		for (var b in loadedBundles) {
			loadedBundleIds[loadedBundles[b].bundle_id] = true;
		}

		for (var i = 0; i < bundles.length; i++) {
			if (loadedBundleIds.hasOwnProperty(bundles[i].id))
				continue;

			availableBundles.push(bundles[i]);
		}

		return new StatusResponse('good', {
			vendor: vars.vendor,
			bundles: availableBundles
		});
	},

	"/ajax/getBundleStoreVendors": function(vars) {
		return new StatusResponse('good', {
			vendors: this._getBundleStoreVendorList()
		});
	},
	
	"/ajax/loadRemoteGitBundle": function(vars) {
		if (!$transaction.isSuperUser())
			return new StatusResponse('bad', TRANSLATE("Invalid access"));

		if (vars.vendor) {
			this._createOrUpdateVendor(vars.vendor);
		}
		
		var bs = new BundleScriptable();
		var response = bs.loadGitBundle(vars);
		
		return response.wasSuccessful() ? new StatusResponse('good', {}) : new StatusResponse('bad', response.getStatusMessage());
	},
	
	"/ajax/createBundle": function(vars) {
		if (!$transaction.isSuperUser())
			return new StatusResponse('bad', TRANSLATE("Invalid access"));
		
		var bs = new BundleScriptable();
		var response = bs.createBundle(vars);

		return response.wasSuccessful() ? new StatusResponse('good', {}) : new StatusResponse('bad', response.getStatusMessage());
	},

	"/ajax/listBundles": function(vars) {
		var choices = [];

		var bs = new BundleScriptable();
		var bundleMap = bs.listBundles(vars.bucketName);

		for (var bundle in bundleMap)
			choices.push({value: bundle, label: bundleMap[bundle]});

		return new StatusResponse('good', {
			label: TRANSLATE("Bundles"),
			choices: choices
		});
	},
	
	"/ajax/getBundleUpdateCounts": function(vars) {
		if (!$transaction.isSuperUser())
			return new StatusResponse('bad', TRANSLATE("Update counts require an administrator"));
		
		var bundlesWithUpdates = {};
		
		for(var i = 0; i < vars.bundles.length; i++) {
			var bundleDef = vars.bundles[i];
		
			//Get the remote update count
			var rc = new FRecord('bundle_remote_commit');
			rc.addSearch('bundle', bundleDef.id);
			rc.search();
			var updateCount = rc.getRowCount();
			if (updateCount > 0) {
				bundlesWithUpdates[bundleDef.bundle_id] = updateCount;
			}
		}

		return new StatusResponse('good', {
			bundlesWithUpdates: bundlesWithUpdates
		});	},
	
	className: "BundlesServer"
});

module.exports = BundlesServer;