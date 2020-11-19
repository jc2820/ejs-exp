const db = require("../../db/db");

exports.createUserView = (req, res) => {
  res.render("create", { model: {} });
};

exports.createUserInDb = (req, res, next) => {
  db.none(
    'insert into users(username, email, bio)' +
      'values(${username}, ${email}, ${bio})',
    req.body
  )
    .then(() => {
      res.redirect("/users");
    })
    .catch((err) => {
      return next(err);
    });
};
