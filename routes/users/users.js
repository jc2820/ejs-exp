const db = require("../../db/db");

exports.getUsers = (req, res, next) => {
  db.any("select * from users")
    .then((data) => {
      res.status(200);
      const { filter } = req.query;
      let filterData = [];
      if (filter) {
        for (let row of data) {
          if (
            row.username.toLowerCase().includes(filter.toLowerCase()) ||
            row.email.toLowerCase().includes(filter.toLowerCase())
          ) {
            filterData.push(row);
          }
        }
      }
      if (!filter) {
        filterData = data;
      }
      res.render("users", { model: filterData, filter });
    })
    .catch((err) => {
      return next(err);
    });
};
