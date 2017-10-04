//
// attachments component class
//
var PageComponent = require("ds.base/PageComponent");

var MovieViewerServer = PageComponent.create({
	"/": function(attributes, vars, containerList) {

		return new StatusResponse('good', {

		});
	},

	
	type: "MovieViewerServer"
});

module.exports = MovieViewerServer;
