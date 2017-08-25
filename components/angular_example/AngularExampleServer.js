var PageComponent = require("ds.base/PageComponent");

var AngularExampleServer = PageComponent.create({
	"/": function(attributes, vars) {
                return new StatusResponse('good', {
                        my_data: "This is my data"
                });
	},
	
	type: "AngularExampleServer"
});

module.exports = AngularExampleServer;
