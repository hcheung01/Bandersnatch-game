# Bandersnatch Game
---
## Description

This project is about routing with Node.js/Express.js web framework:

* Setting up a server
* create an api that can handle routes
* HTTP and methods
* rendering to a template
* responsive basic front end UI with HTML/CSS/Pug template and Javascript/jQuery

## How does it work?
To run the app:
`nodemon server`
Open browser and type in...
`http://0.0.0.0/scenarios`

Sent request to test the response on port 8080

* GET `/scenarios` where the scenarios are the top level key in scenarios.json

response:
```
{
  "scenarios": [
    "BandersGuru"
  ]
}
```

* POST `/game` which allows to start a game given a scenario name as JSON and returns the ID of a game.

response:
```
{
  "id": "ec6a7bd0-4f45-11e9-9f9d-2dcc58927dae",
  "scenario": "BandersGuru",
  "currentStep": "initial"
}
```

* GET `/game/:id` which allows one to get a game by ID.

response:
```
{
  "id": "derp",
  "scenario": "BandersGuru",
  "currentStep": "initial",
  "choices": [
    {
      "line": "Enter the office"
    },
    {
      "line": "Run away in the opposite direction"
    }
  ]
}
```

* POST `/game/:id` which allows one to choose one of the possible answer to a question and returns the following one, given the index of the selected answer. `(ie: initial -> select choice @index 1 ->node#1 and so on..)`

payload:
```
{
    "choiceIndex": 0
}

```

response:
```
{
  "id": "derp",
  "scenario": "BandersGuru",
  "currentStep": "1",
  "choices": [
    {
      "line": "Start doing the backpack-kid dance to impress them."
    },
    {
      "line": "Tell them that Android is clearly better than Apple and that whoever would argue the contrary is completely insane."
    },
    {
      "line": "Say \" Hi! I'm #name#."
    }
  ]
}

```


## Files
---
File|Task
---|---
scenarios.json | json file with all Scenarios
server.js | main file to start server and accept incoming requests
template.pug | PUG template file for rendering return list of Scenarios
game.pug | PUG template file for rendering return list of choices
script.js | primary Javscript and jQuery file
style.css | css styling file

## Directories
---
Directory Name | Description
---|---
/bandersguru | Main folder holding all files

## Author
Heindrick Cheung
