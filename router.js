const express = require("express");
const router = express.Router();

const home = require("./routes/home")
const users = require("./routes/users/users")
const createUsers = require('./routes/users/createUser');
const editUsers = require('./routes/users/editUser');
const deleteUsers = require('./routes/users/deleteUser');

router.get("/", home.homeView);
router.get("/users", users.getUsers)

router.get("/create", createUsers.createUserView);
router.post("/create", createUsers.createUserInDb);

router.get("/edit/:id", editUsers.editUserView);
router.post("/edit/:id", editUsers.editUserInDb);

router.get("/delete/:id", deleteUsers.deleteUserView);
router.post("/delete/:id", deleteUsers.deleteUserFromDb);

module.exports = router;