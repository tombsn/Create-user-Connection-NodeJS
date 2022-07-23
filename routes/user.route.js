const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

// create user
router.post("/", userController.addUser);

// login user 
router.post("/auth/login", userController.loginUser);

module.exports = router;