var PageComponent = require("ds.base/PageComponent");

var CMDBTreeServer = PageComponent.create({
	data: function(attributes, vars, containerList) {
		var realJSON = [];
		var bucketName = this.getBucketName(attributes, vars, containerList);
		var parentRecord = this._getParentRecord(bucketName, vars);
		var parentRecordID = parentRecord.getIntId();
		//var topLevelID = '0c205c3813654bc88c6b80451bc9a0b3';
		this._addCI(parentRecordID, "null", realJSON);
		
		return new StatusResponse('good', {
			realjson: realJSON,
		});
	},
	
	_addCI: function(ciID, parentName, realJSON) {
		//Add the CI to the array 
		var topCIRec = new FRecord('ci');
		topCIRec.addSearch('id', ciID);
		topCIRec.search();
		if (topCIRec.next()) {
			realJSON.push({
				name: topCIRec.getRecordDisplayValue(),
				parent: parentName,
				children: this._getChildren(topCIRec.id, topCIRec.name)
			});
		}
	},
	
	_getChildren: function(ciID, ciName) {
		var childrenArray = [];
		//Get the children, and add each one
		var cmdbRel = new FRecord('ci_relationship');
		cmdbRel.addSearch('source', ciID);
		cmdbRel.search();
		while (cmdbRel.next()) {
			//Add the source CI to the array
			childrenArray.push( {
					name: cmdbRel.target.name,
					parent: cmdbRel.source.name,
					children: this._getChildren(cmdbRel.target.id, cmdbRel.target.name)
			});			
		}
		
		
		return childrenArray;
	},
	
	_getParentRecord: function(bucketName, vars) {
		var query = vars.parms['q'];
		var newRecord = Object.isTrue(vars.parms['new']);
		
		var record = new FRecord(bucketName);
		record.setSecurityChecks(true);
		
		if (newRecord) {
			record.newRecord();
			
			if (!Object.isNil(query))
				record.setValues(query);
		} else if (!Object.isNil(query)) {
			record.addEncodedSearch(query);
			record.search();
			record.next();
		}
		
		return record;
	},
	
	type: "CMDBTreeServer"
});

module.exports = CMDBTreeServer;