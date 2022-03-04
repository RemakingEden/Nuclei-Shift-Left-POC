var express = require('express');
var router = express.Router();

const plantsController = require('../controllers').plants;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/plants', plantsController.list);
router.get('/api/plants/:id', plantsController.getById);
router.post('/api/plants', plantsController.add);

module.exports = router;
