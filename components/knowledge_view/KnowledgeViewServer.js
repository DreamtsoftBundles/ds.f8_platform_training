var PageComponent = require("ds.base/PageComponent");
var Knowledge = require("ds.f8_platform_training/knowledge/Knowledge");

module.exports = PageComponent.create({
	"/": function(attributes, vars) {
		var k = new Knowledge();
		return new StatusResponse('good', { article: k.getArticlesById(vars.parms.id) });		
	}
});