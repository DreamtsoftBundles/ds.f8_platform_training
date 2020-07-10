//
//

var PageComponent = require("ds.base/PageComponent");
var HTTPScriptable = require("core/HTTPScriptable");

var SoundBoardServer = PageComponent.create({
	"/": function(attributes, vars) {
		var data = {};				
		return new StatusResponse('good', data);
	},
	
	"/ajax/results": function(vars) {
		var search = vars.search;
		
		if (Object.isNil(search) || search.length <= 3) {
			return new StatusResponse('good', {
				no_results: true
			});
		}
		
		var client = new HTTPScriptable("https://www.myinstants.com/search/"); 
		client.addRequestParameter("name", search);

		var userResponseText = client.get();
		var pageHtml = userResponseText.getResponseBody().replace(/(\r\n|\n|\r)/gm, "");

		var reg = new RegExp("\<div class=\"small-button\" onmousedown=\"play\\('(.+?)'\\)\"\>.+?\<a.+?\>(.+?)\<\\/a\>", "gi");

		var resultList = [];
		var result;
		
		while((result = reg.exec(pageHtml)) !== null) {
			resultList.push({ value: result[1], label: result[2] });
		}
		
		return new StatusResponse('good', {
			no_results: resultList.length > 0,
			results: resultList
		});
	},
	
	className: "SoundBoardServer"
});

module.exports = SoundBoardServer;
