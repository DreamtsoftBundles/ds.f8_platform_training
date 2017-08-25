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
	
	type: "MyFullComponentServer"
});

module.exports = MyFullComponentServer;
