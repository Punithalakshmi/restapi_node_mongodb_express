const express = require('express');
const {loginUser} = require("../controllers/authController");

const router = express.Router();

router.route('/login').post(loginUser);
router.route('/logout').post();
router.route('/user/:id').get();

module.exports = router;