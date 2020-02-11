/**
 *
 */
var SlotSearchScriptable = require("core/SlotSearchScriptable");
var HTTPScriptable = require("core/HTTPScriptable");
var GoogleSpreadsheetMapper = BaseMapper.create({
    search: function(vals) {
        var ss1 = new SlotSearchScriptable();
		ss1.loadFromObject(vals);
		var records = [];
		var headers = [];
		if (ss1.isIdSearch()) {
			var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			var ht = new HTTPScriptable("https://sheets.googleapis.com/");
			var path = "/v4/spreadsheets/" + this.bucketAttributes.table + "/values/Sheet1?key=" + this.bucketAttributes.username;
			var jsonResponse = JSON.parse(ht.getString(path));
			var headerLine = jsonResponse.values[0];
			var headerLineString = JSON.stringify(headerLine);
			var splitHeader = headerLineString.split(',');
			var rangeLetter = alphabet[headerLine.length];
			var recId = parseInt(ss1.getSearchIds()[0]) + 1;
			var h = new HTTPScriptable("https://sheets.googleapis.com/");
			var cellPath = "/v4/spreadsheets/" + this.bucketAttributes.table + "/values/Sheet1!A" + recId + ":" + rangeLetter + recId + "?key=" + this.bucketAttributes.username;
			var cellResponse = JSON.parse(h.getString(cellPath));
	
			for (var i = 0; i < headerLine.length; i++)	{
				headers[i] = this._cleanQuotes(headerLine[i]).toLowerCase().replace(/\ /g, "_");
			}
			
			var line = cellResponse.values;
			var thisLine = line[0];
			var thisRecord = {};
			for (var j = 0; j < thisLine.length; j++) { 
				thisRecord[headers[j]] = thisLine[j];
			}
			return thisRecord;
					
		} else {
			var h = new HTTPScriptable("https://sheets.googleapis.com/");
			var path = "/v4/spreadsheets/" + this.bucketAttributes.table + "/values/Sheet1?key=" + this.bucketAttributes.username;
			var stringResponse = h.getString(path);
			var jsonResponse = JSON.parse(stringResponse);
			var lines = jsonResponse.values;
			var headerLine = lines[0];
			for (var i = 0; i < headerLine.length; i++)	
				headers[i] = this._cleanQuotes(headerLine[i]).toLowerCase().replace(/\ /g, "_");
			for (var j = 1; j < lines.length; j++) {
				if (lines[j] === "")
					continue;
				var thisLine = lines[j];
				var thisRecord = {};
				for (var k = 0; k < thisLine.length; k++) {
					thisRecord[headers[k]] = thisLine[k];
				}
				thisRecord.id = j;
				records.push(thisRecord);
			}
			//this.setNeedSort(true);
			//this.setNeedSearch(true);
			return records;
		}
    },
    
    insert: function(vals) {
        /*PUT https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1!B1?valueInputOption=USER_ENTERED
        var h = new HTTPScriptable("https://sheets.googleapis.com/");
        h.setRequestMethod("PUT");
        var path = "/v4/spreadsheets/" + this.bucketAttributes.table + "/values/Sheet1?key=" + this.bucketAttributes.username;
        
        var newRow = {
            range: "A1:G",
            valueInputOption: "USER_ENTERED",
            insertDataOption: "INSERT_ROWS",
            resource: {
                values: [
                    ["1", "2", "3", "4", "5"]
                ]
            }
        }
        
        h.setRequestBody(newRow, "json");
        var putResponse = h.put();
        console.log("putResponse: " + putResponse);*/
        var id = 123245;
        return id;
    },
    _cleanQuotes: function(value) {
        if (value.endsWith('"') && value.startsWith('"'))
            return value.substring(1, value.length - 1);
        return value;
    },
	
    api: function(name, data) {
        console.log('API CALLED - ' + name);
        if (name == 'get_url') {
            var url = "https://docs.google.com/spreadsheets/d/" + this.bucketAttributes.table + "/pub?output=csv";
            var returnObject = [{
                'url': url
            }];
            console.log('URL FOUND - ' + url);
            for (var key in returnObject) {
                console.log("MAPPER OBJECT - " + key + " - " + returnObject[key]);
            }
            return returnObject;
        }
    },
});
module.exports = GoogleSpreadsheetMapper;