var express = require('express');
const { issueBook, returnBook, getPeopleByBook, getBooksByDateRange, getTotalRentByBook, getBooksByUser } = require('../controller/transactioncontroller');
var router = express.Router();

router.post('/issue',issueBook)
router.post('/return',returnBook);
router.get('/viewpeoplebook',getPeopleByBook);
router.get('/viewtotalrentbook',getTotalRentByBook);
router.get('/viewbookpeople',getBooksByUser);
router.get('/viewdaterange',getBooksByDateRange);

module.exports = router;
