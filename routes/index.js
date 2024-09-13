var express = require('express');
const {login, get_data, register,update, logout } = require('../controller/indexcontroller');
var router = express.Router();

/* GET home page. */
router.post('/', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/view_users', get_data);
router.post('/update', update);

module.exports = router;
