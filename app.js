require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Handlebars
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

//Servir contenido Estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Edwin Vega",
    title: "Node Course",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Edwin Vega",
    title: "Node Course",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Edwin Vega",
    title: "Node Course",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
