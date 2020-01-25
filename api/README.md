
This project was bootstrapped with [Generate Express](https://expressjs.com/en/starter/generator.html).

## Available Scripts

In the project directory, you can run:

### `yarn install`

before getting started install all dependecies

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Endpoints
edit todo: method=PUT http://localhost:8080/api/{id}/ data: {type: text, compeleted: boolean}
new todo: method=POST http://localhost:8080/api/ data: {type: text, compeleted: boolean}
delete todo: method=DELETE http://localhost:8080/api/{id}/

