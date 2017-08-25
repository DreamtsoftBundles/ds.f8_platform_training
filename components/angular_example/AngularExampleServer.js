var PageComponent = require("ds.base/PageComponent");

var AngularExampleServer = PageComponent.create({
	data: function(attributes, vars) {
                var helloMessage = "Hello my angular";

                if (Object.isTrue(attributes.specify_message)) {
                        helloMessage = attributes.hello_message;
                }

                return new StatusResponse('good', {
                        message: helloMessage
                });
	},
	
	type: "AngularExampleServer"
});

module.exports = AngularExampleServer;
