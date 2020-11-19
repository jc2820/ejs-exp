const db = require("../../db/db");

exports.deleteUserView = (req, res) => {
    const uid = req.params.id;
    db.one('select * from users where id=$1', uid)
    .then((data) => {
        res.render("delete", { model: data });
    })
  };

exports.deleteUserFromDb = (req, res, next) => {
  const uid = req.params.id;
  db.result('delete from users where id=$1', uid)
  .then(() => {
   
      res.redirect("/users");
  })
};