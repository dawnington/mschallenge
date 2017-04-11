# Revenue Interface

[Live](https://revenue-interface.herokuapp.com/)

This is a simple revenue interface I made for a coding challenge. Features include
a page summary with relevant data, an adjustable line graph comparing monthly
revenues over past months, a table listing all subscriptions, and a form for entering new subscriptions.

![screenshot]

### Backend

While my backend experience has primarily been with Rails, I knew I didn't need
something so heavy duty for such a simple application. Instead, I chose to use Node.js and the
lightweight Express framework for my server.

### Front End

For the front end I chose the tools I'm most familiar with: React and Redux, with
[`redux-saga`](https://github.com/redux-saga/redux-saga) for handling side effects.

[screenshot]: ./public/assets/screenshot.png

### Instructions
Download the repository:

```
git clone https://github.com/dawnington/mschallenge.git
```

Install packages and dependencies:
```
npm install
```

The database uses PostgreSQl. Make sure you have PostgreSQL installed and open. To create and populate the database run
```
yarn db
```

Run Webpack
```
webpack
```

Finally
```
yarn start
```
