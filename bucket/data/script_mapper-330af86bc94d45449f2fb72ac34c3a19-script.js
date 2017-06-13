/**
 *
 */
var HTTPScriptable = require("core/HTTPScriptable");

var GoogleSpreadsheetMapper = BaseMapper.create({
    search: function(search) {
        var h = new HTTPScriptable("https://docs.google.com/");
        //h.setAuth(this.bucketAttributes.username, this.bucketAttributes.password);

        // the table here should be the key of the spreadsheet, from the "Publish to the web" dialog, in the URL:
        // https://docs.google.com/spreadsheets/d/19C4BZaGZOl07kqRoMj8FEnuyfXdKD6yrfjopAioxxW4/pub?output=csv
        // to create a new bucket backed by a spreadsheet:
        // 1. publish the sheet to the web, copy the key to the table attribute of the new bucket
        // 2. make sure the first row of the sheet matches the names of the slots you create, 
        //     case does not matter and spaces from the sheet will be converted to _ to match the slotname
        var path = "/spreadsheets/d/" + this.bucketAttributes.table + "/pub?output=csv";
        var csvResponse = h.getString(path);

        var records = [];

        var lines = csvResponse.split("\n");

        var headers = [];
        var headerLine = lines[0].split(",");
        for (var i = 0; i < headerLine.length; i++)
            headers[i] = this._cleanQuotes(headerLine[i]).toLowerCase().replace(/\ /g, "_");

        for (var j = 1; j < lines.length; j++) {
            if (lines[j] === "")
               continue;
            var thisLine = lines[j].split(",");

            var thisRecord = {};

            for (var k = 0; k < thisLine.length; k++) {
                thisRecord[headers[k]] = thisLine[k];
            }
					 //thisRecord.id = record.item_id;
                records.push(thisRecord);
        }
          console.log("GoogleSpreadsheetResponse: " + JSON.stringify(records));
       //this.setNeedSort(true);
       //this.setNeedSearch(true);
        return records;
    },

    _cleanQuotes: function(value) {
        if (value.endsWith('"') && value.startsWith('"'))
            return value.substring(1, value.length - 1);

        return value;
    },

    insert: function(vals) {
        console.log(JSON.stringify(vals));
        return null;
    }
});

module.exports = GoogleSpreadsheetMapper;