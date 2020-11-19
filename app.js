const express = require("express");
const router = require("./router");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
app.use("/users", router);
app.use('/create/', router);
app.use('/edit/:id', router);
app.use('/delete/:id', router);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).render("error", { err: res.statusCode });
});

app.use(function (req, res, next) {
  res.status(404).render("error", { err: res.statusCode });
});

app.listen(2820, () => {
  console.log("server running on 2820");
});