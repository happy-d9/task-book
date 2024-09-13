var express = require('express');
const { insert, find, getBooksByName, getBooksByFilters, getBooksByRent} = require('../controller/bookcontroller');
var router = express.Router();

/* GET users listing. */
router.post('/', insert);
router.get('/view', find);
router.get('/viewBookByName/:name',getBooksByName)
router.get('/viewBookByRent',getBooksByRent)
router.get('/viewBookByAllSearch',getBooksByFilters)
module.exports = router;
