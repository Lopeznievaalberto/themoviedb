
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

//Endpoints

router.post("/newUser", UsersController.newUser);
router.get("/getAll", UsersController.getAllUsers);
router.put("/updateUser", UsersController.updateUser);
router.delete("/deleteUser", UsersController.deleteUser);
router.post("/login", UsersController.loginUser);
router.post("/id", UsersController.postUserById);
router.post("/name", UsersController.postUsersByName);

module.exports = router;