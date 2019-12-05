//
// attachments component class
//
var PageComponent = require("ds.base/PageComponent");

var SimpleReactServer = PageComponent.create({
	"/": function(attributes, vars, containerList) {

		return new StatusResponse('good', {

		});
	},

	
	type: "SimpleReactServer"
});

module.exports = SimpleReactServer;
