const express = require("express");
const mongoose = require("mongoose");
// const MongoStore = require("connect-mongo")(session);
const routes = require("./routes");

const passport = require("passport");
const auth = require("./routes/auth");


const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// This tells Express to use Express sessions
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//     store: new MongoStore({ mongooseConnection: mongoose.connection })
//   })
// );

app.use(passport.initialize());
app.use(passport.session());