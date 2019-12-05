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
          "to": "7d2d6e3392a1f18d1a18bca01e54c6c5",
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
        "growl_message": "Your have changed the manager field. ",
        "growl_type": "info",
        "id": "7d2d6e3392a1f18d1a18bca01e54c6c5",
        "name": "Notification",
        "send_growl": true
      },
      "height": 40,
      "id": "7d2d6e3392a1f18d1a18bca01e54c6c5",
      "left": 110,
      "output": { },
      "routes": [
        {
          "condition": "success:eq:1:true",
          "order": 0,
          "text": "Always",
          "type": "ok"
        }
      ],
      "text": "Notification",
      "top": 0,
      "type": "send_notification",
      "width": 100
    }
  ],
  "inputs": [
    {
      "attributes": {
        "buckets": "true",
        "choice_type": "typeahead"
      },
      "display": "Bucket",
      "labels": {
        "label": "Bucket",
        "labelp": "Buckets"
      },
      "name": "bucketId",
      "type": "choice"
    },
    {
      "attributes": {
        "bucket_slot": "bucketId",
        "choice_type": "typeahead"
      },
      "display": "Record",
      "labels": {
        "label": "Record",
        "labelp": "Records"
      },
      "name": "record",
      "type": "choice"
    }
  ],
  "outputs": [ ],
  "properties": {
    "async": false,
    "flow_type": "fa2e1dcabde8433fb933eeb942f59d37"
  }
}