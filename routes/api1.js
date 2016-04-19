let express = require('express');
let router = express.Router();
let path = require('path');
let bookshelfApi = require('bookshelf-api');

let unicorn = bookshelfApi({
	path: path.join(__dirname, '..', 'models')
});

router.use('/', unicorn);
// router.get('/products', function(req, res, next) {

// });

module.exports = router;
