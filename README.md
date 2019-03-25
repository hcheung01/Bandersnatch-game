# bandersguru

Hi and welcome on Carts-Guru's software-engineering test.

We ask of you to please write this test in Javascript, using `NodeJS@10.14.2`.

## TODO

If you have watched Bandersnatch on Netflix, this might be familiar. 
The goal of this techical test is to code a *'book where you are the hero'*. Don't worry, we won't be testing your writting skills ;).

In this repository, you are provided a `scenarios.json` file that describes the scenario of this game.

Using a database is a bonus task, you can work with memory only, it's OK.

## Mandatory tasks

#### Step 0:

Clone this project and initialize your `package.json` with npm.

#### Step 1: 

Bootstrap a basic NodeJS HTTP Server using *any* NodeJS web framework and listen on the `8080` port in a `server.js` file.

#### Step 2: 

Using a router, add these routes to the server:

- `GET` `/scenarios` where the scenarios are the top level key in `scenarios.json`

```
{
  "scenarios": [
    "BandersGuru"
  ]
}
```
- `POST`  `/game` which allows to start a game given a scenario name as JSON and returns the ID of a game.

```
{
  "id": "ec6a7bd0-4f45-11e9-9f9d-2dcc58927dae",
  "scenario": "BandersGuru",
  "currentStep": "initial"
}
```
- `GET` `/game/:id` which allows one to get a game by ID.
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
- `POST` `/game/:id` which allows one to choose one of the possible answer to a question and returns the following one, given the index of the selected answer. (ie: `initial` -> select `choice @index 1`  ->`node#1` and so on..)


*Payload*
``` 
{
    "choiceIndex": 0
}
```

*Response*
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

At this point your game should be playable by *cURL*.

(see `boom` on npm)

## Bonus steps: 

Those are for more experienced software engineers. It really is OK to not do them if you're a junior *:)*

#### Easy

- Use babel to transpile to use modern features (`import/export`...)
- Add tests with a test framework (`jasmine`, `mocha`, `jest`...)
- Linter + prettier (`eslint` + `prettier`) using the `Standard` convention

#### Medium:

- Create a basic UI for the game. No React/no Vue. Vanilla like a boss.
- Plug-in a database such as `Mongo` or `Postgre` instead of putting everything in memory.

#### Hard:

- Use an ORM (`sequelize`...)

#### God:

- Run everything on docker-compose with live-reload. Now that's a real dev workflow!
- ES6+ is too easy. Do everything in Reason.
- Do your own scenario *:)*