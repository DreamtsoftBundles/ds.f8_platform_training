
// attachments component class
//
var PageComponent = require("ds.base/PageComponent");

var BeforePicturesServer = PageComponent.create({
	"/": function(attributes, vars, containerList) {
		var bucketName = this.getBucketName(attributes, vars, containerList);
		var parentRecord = this._getParentRecord(bucketName, vars);
		
		return new StatusResponse('good', {
			label: (!Object.isTrue(attributes.images_only) ? TRANSLATE("Attachments") : TRANSLATE("Images")),
			disableComponent: (Object.isTrue(vars.parms['new']) ? { active: true, message: TRANSLATE("Please save your %{label} first, and then you'll be able to attach files", {label: parentRecord.getLabel()}) } : {}),
			parentBucket: parentRecord.getBucketName(),
			parentId: parentRecord.getIntId(),
			attachments: this._getAttachments(parentRecord)
		});
	},

	_getParentRecord: function(bucketName, vars) {
		var query = vars.parms['q'];
		var newRecord = Object.isTrue(vars.parms['new']);
		
		var record = new FRecord(bucketName);
		record.setResolveReferences(false);
		record.addEncodedSearch(query);
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
	
	_getAttachments: function(record) {
		var data = [];

		var fr = new FRecord('upload');
		fr.setResolveReferences(false);
		fr.addSearchStartsWith('bucket', record.getBucketName());
		fr.addSearchStartsWith('record', record.id);
		fr.addSort('created', true);
		fr.search();
		while (fr.next()) {
			// Add the file to the list
			data.push({
				id: fr.id,
				name: fr.name,
				type: fr.type,
				url: fr.url.getURL()
			});
		}
		
		return data;
	},
	
	type: "BeforePicturesServer"
});

module.exports = BeforePicturesServer;