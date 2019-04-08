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
          "to": "f2a42b5c169894ece11f087da57e840e",
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
        "name": "Call API",
        "obj_name": "Call API",
        "obj_type": "script",
        "script": "var apiFr = $record.api('get_url', {});\n\napiFr.next();\n\n$flow.urlVar = apiFr.url;"
      },
      "height": 40,
      "id": "f2a42b5c169894ece11f087da57e840e",
      "label": "Run Script",
      "left": 130,
      "name": "script",
      "output": { },
      "routes": [
        {
          "condition": "success:eq:1:true",
          "order": 0,
          "text": "Success",
          "to": "262e5ca3b7f8ddc6067528c880ca44b3",
          "type": "success"
        },
        {
          "condition": "success:eq:0:false",
          "order": 1,
          "text": "Failure",
          "type": "error"
        }
      ],
      "text": "Call API",
      "top": 0,
      "type": "script",
      "value": "script",
      "width": 100
    },
    {
      "data": {
        "growl_message": "URL from API: %{$flow.urlVar}",
        "growl_type": "success",
        "name": "Growl the URL",
        "obj_name": "Alert the URL",
        "obj_type": "send_notification",
        "send_growl": true
      },
      "height": 40,
      "id": "262e5ca3b7f8ddc6067528c880ca44b3",
      "label": "Notification",
      "left": 260,
      "name": "send_notification",
      "output": { },
      "routes": [
        {
          "condition": "success:eq:1:true",
          "order": 0,
          "text": "Always",
          "type": "ok"
        }
      ],
      "text": "Growl the URL",
      "top": 0,
      "type": "send_notification",
      "value": "send_notification",
      "width": 100
    }
  ],
  "inputs": [ ],
  "outputs": [ ]
}