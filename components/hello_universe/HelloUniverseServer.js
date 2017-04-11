var PageComponent = require("ds.base/PageComponent");

var HelloWorldServer = PageComponent.create({
	data: function(attributes, vars) {
                var helloMessage = "Hello my universe";

                if (Object.isTrue(attributes.specify_message)) {
                        helloMessage = attributes.hello_message;
                }

                return new StatusResponse('good', {
                        message: helloMessage
                });
	},
	
	type: "HelloWorldServer"
});

module.exports = HelloWorldServer;
