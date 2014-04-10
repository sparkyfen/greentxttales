define({ api: [
  {
    "type": "get",
    "url": "/api/getData",
    "title": "Get page \"n\"",
    "version": "0.0.1",
    "name": "GetData",
    "group": "API",
    "permission": {
      "name": "public",
      "title": "This access is public.",
      "description": ""
    },
    "description": "Returns a page worth of data for the Green Txt Site to display.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "field": "page",
            "optional": false,
            "description": "The current page that the user is requesting."
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "field": "image",
            "optional": false,
            "description": "The url to the image of the story."
          },
          {
            "group": "Success 200",
            "type": "int",
            "field": "id",
            "optional": false,
            "description": "The unique ID of the story."
          },
          {
            "group": "Success 200",
            "type": "array",
            "field": "text",
            "optional": false,
            "description": "The array containing the story."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   [\n     {\n      \"image\": \"//i.4cdn.org/b/src/1386962597748.jpg\",\n      \"id\": 1386962597748,\n      \"text\": [\n        \"Who is the biggest looser online right now?I'll start\",\n        \">be 34\",\n        \">fat\",\n        \">no friends\",\n        \">socially inapt\",\n        \">no money, unemployed most of my adult life\",\n        \">moody\",\n        \">huge video games and fiction geek\",\n        \">spending all my time in front of computer\",\n        \">not leaving house generally\",\n        \">hasn't showered for few days\",\n        \">hasn't shaved this week\",\n        \">living with my gf who supports me\"\n      ]\n    },\n    {...}\n  ]\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "GeneralError",
            "optional": false,
            "description": "Issue with something in the request or processing of data."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 500 Service Unavailable\n   {\n     \"message\": \"Issue returning page contents.\"\n   }\n   HTTP/1.1 400 Bad Request\n   {\n     \"message\": \"Missing page value.\"\n   }\n"
        }
      ]
    },
    "filename": "lib/controllers/api.js"
  },
  {
    "type": "get",
    "url": "/api/storyCacheTotal",
    "title": "Redis Key Total",
    "version": "0.0.1",
    "name": "StoryCacheTotal",
    "group": "API",
    "permission": {
      "name": "public",
      "title": "This access is public.",
      "description": ""
    },
    "description": "Returns total number of Redis keys in the server",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "total",
            "optional": false,
            "description": "The total number of redis keys currently in storage."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   {\n    total: 200\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "GeneralError",
            "optional": false,
            "description": "Issue with something in the request or processing of data."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 500 Service Unavailable\n   {\n     \"message\": \"Could not calculate story total.\"\n   }\n"
        }
      ]
    },
    "filename": "lib/controllers/api.js"
  },
  {
    "version": "0.0.1",
    "group": "api.js",
    "type": "",
    "url": "",
    "filename": "lib/controllers/api.js"
  },
  {
    "version": "0.0.1",
    "group": "api.js",
    "type": "",
    "url": "",
    "filename": "lib/controllers/api.js"
  }
] });