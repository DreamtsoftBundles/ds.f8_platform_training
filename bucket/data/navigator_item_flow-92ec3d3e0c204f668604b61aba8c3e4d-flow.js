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
          "to": "ec1966fad43264fada43370a14c9a9be",
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
        "cancel": "Cancel",
        "id": "ec1966fad43264fada43370a14c9a9be",
        "message": "You initiated workflow from a navigator!",
        "name": "Confirmation",
        "ok": "OK",
        "show_cancel": "1",
        "type": "info"
      },
      "height": 40,
      "id": "ec1966fad43264fada43370a14c9a9be",
      "left": 300,
      "output": { },
      "routes": [
        {
          "condition": "success:eq:1:true",
          "order": 0,
          "text": "Ok",
          "type": "ok"
        },
        {
          "condition": "success:eq:0:false",
          "order": 1,
          "text": "Cancel",
          "type": "cancel"
        }
      ],
      "text": "Confirmation",
      "top": 300,
      "type": "confirm",
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