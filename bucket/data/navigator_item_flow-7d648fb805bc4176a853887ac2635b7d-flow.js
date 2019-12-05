{
  "flow": [
    {
      "data": { },
      "height": 40,
      "id": "start",
      "left": 0,
      "output": { },
      "routes": [
        {
          "condition": "",
          "order": 0,
          "text": "Always",
          "to": "0dc46fca15705241150aa47234c54103",
          "type": "always"
        }
      ],
      "static_routes": true,
      "stuck": true,
      "text": "Start",
      "top": 0,
      "type": "box",
      "width": 100
    },
    {
      "data": {
        "id": "0dc46fca15705241150aa47234c54103",
        "name": "Run Script",
        "script": "console.log(\"This is an example debug statement from the DREAMTSOFT platform\");"
      },
      "height": 40,
      "id": "0dc46fca15705241150aa47234c54103",
      "left": 300,
      "output": { },
      "routes": [
        {
          "condition": "success:eq:1:true",
          "order": 0,
          "text": "Success",
          "type": "success"
        },
        {
          "condition": "success:eq:0:false",
          "order": 1,
          "text": "Failure",
          "type": "error"
        }
      ],
      "text": "Run Script",
      "top": 300,
      "type": "script",
      "width": 100
    }
  ],
  "inputs": [ ],
  "outputs": [ ],
  "properties": {
    "async": false,
    "flow_type": "96be53bad37c4862adcc6bc75223eb41"
  }
}