var PageComponent = require("ds.base/PageComponent");

var HelloUniverseServer = PageComponent.create({
	"/": function(attributes, vars) {
                var helloMessage = "Hello my universe";

                if (Object.isTrue(attributes.specify_message)) {
                        helloMessage = attributes.hello_message;
                }

                return new StatusResponse('good', {
                        message: helloMessage
                });
	},
	
	type: "HelloUniverseServer"
});

module.exports = HelloUniverseServer;
