const express = require("express");

const indexRouter = require("./routes");
const apiRouter = require("./modules/api");
const exp = require("constants");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);

//listen to port 3333
app.listen(3333, () => {
  console.log("Application is running on port 3333.");
});
