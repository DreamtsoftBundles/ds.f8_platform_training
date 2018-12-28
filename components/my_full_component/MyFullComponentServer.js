var PageComponent = require("ds.base/PageComponent");

var MyFullComponentServer = PageComponent.create({
	"/": function(attributes, vars) {
		var message;

		if (Object.isTrue(attributes.show_header)) {
			message = "Hello with header";
		} else {
			message = "Hello without header";
		}

		return new StatusResponse('good', {
			serverMessage: message
		});
	},
	
	"/ajax/getTheData": function(vars) {
		return new StatusResponse('good', {
			abc: "123 on header " + vars.header_idx
		});
	},
	
	type: "MyFullComponentServer"
});

module.exports = MyFullComponentServer;
