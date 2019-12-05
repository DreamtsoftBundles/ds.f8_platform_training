var PageComponent = require("ds.base/PageComponent");
var Knowledge = require("ds.f8_platform_training/knowledge/Knowledge");

module.exports = PageComponent.create({
	"/": function(attributes, vars) {
		var k = new Knowledge();
		
		if (attributes.mode == "search")
			return new StatusResponse('good', { articles: k.getArticlesBySearch(attributes.search_text) });		
		
		return new StatusResponse('good', { articles: k.getRecentArticles(10, attributes.condition) });		
	}
});