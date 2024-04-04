const express = require("express");

const router = express.Router();
const { check } = require('express-validator')

const { registration, GetUser, login } = require('../controllers/user-controller')

router.post('/api/registration',[
    check('login', 'логин пользователя не может быть пустым').notEmpty(),
    check('password', 'пароль пользователя не может быть пустым').notEmpty(),
    check('password', 'пароль должен быть длиной не менее 6 символов').isLength({min:6,max:20}),
    check('username', 'имя пользователя не может быть пустым').notEmpty()
], registration)
router.post('/api/login', login)
router.get('/api/users', GetUser)

module.exports = router;