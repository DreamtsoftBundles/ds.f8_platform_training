var PageComponent = require("ds.base/PageComponent");

var CardListServer = PageComponent.create({
	data: function(attributes, vars, containerList) {
		var realJSON = [];
		
		return new StatusResponse('good', {
			realjson: realJSON,
		});
	},
	
	type: "CardListServer"
});

module.exports = CardListServer;