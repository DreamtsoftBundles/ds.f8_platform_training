module.exports = Class.create({
	getArticlesById: function(id) {
		var fr = new FRecord('knowledge');
		fr.setSecurityChecks(true);
		if (!Object.isNil(id) && fr.getRecord(id))
			return fr.unload({ ignore_internal: true, resolve_all_display: true, treat_json_map_as_object: true });
		
		return {};
	},
	
	getRecentArticles: function(limit, query) {
		var results = [];
		var l = limit || 10;
		
		var fr = new FRecord('knowledge');
		fr.setSecurityChecks(true);
		fr.setLimit(l);
		
		if (query)
			fr.addEncodedSearch(query);
		
		fr.addSearch('status', 'published');
		fr.addSort('updated', true);
		fr.search();
		
		while(fr.next()) {
			results.push({ title: fr.title.toString(), text: fr.text.toString(), id: fr.id.toString() });
		}
		
		return results;
	},
	
	getArticlesBySearch: function(text) {
		var results = [];		
		
		if (Object.isNil(text))
			return results;
				
		var fr = new FRecord('globalindex');
		fr.addSearch('bucket', 'knowledge');
		fr.addSearch('query', text)
		fr.addSearch('status', 'published');
		fr.search();
		
		while (fr.next()) {
			var kbfr = new FRecord('knowledge');
			
			if (kbfr.getRecord(fr.ref_id))
				results.push({ title: kbfr.title.toString(), text: kbfr.text.toString(), id: fr.ref_id });
		}
		
		return results;
	},
	
	createTextFromArticle: function(fr) {
		if (fr.type == "markdown")
			return fr.markdown.toString();
		
		var tvjs = require("ds.it4it/textversionjs/textversion");
		return tvjs(fr.html.toString());	
	}
});