const db = require("../../db/db");

exports.editUserView = (req, res) => {
  const uid = req.params.id;
  db.one("select * from users where id=$1", uid).then((data) => {
    res.render("edit", { model: data });
  });
};

exports.editUserInDb = (req, res, next) => {
  db.none("update users set username=$1, email=$2, bio=$3 where id=$4", [
    req.body.username,
    req.body.email,
    req.body.bio,
    req.params.id,
  ])
    .then(() => {
      res.redirect("/users");
    })
    .catch((err) => {
      return next(err);
    });
};
