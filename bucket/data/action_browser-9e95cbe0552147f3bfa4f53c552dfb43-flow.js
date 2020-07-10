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
          "to": "a47172e823e874fbb8c0d90e3ea1df27",
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
        "browser_history": "append",
        "id": "a47172e823e874fbb8c0d90e3ea1df27",
        "isList": false,
        "name": "Navigate",
        "page_name": "soundboard",
        "type": "page",
        "use_slide_in": true
      },
      "height": 40,
      "id": "a47172e823e874fbb8c0d90e3ea1df27",
      "left": 220,
      "output": { },
      "routes": [ ],
      "text": "Navigate",
      "top": 140,
      "type": "navigate",
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
    "flow_type": "f2b9095bbd2441709f25a07cdf240534"
  }
}