const express = require('express');
const userControllers = require('../controllers/userController');

const router = express.Router();

router.get('/user', userControllers.getUser);

router.post('/user', userControllers.postUser);

module.exports = router;
