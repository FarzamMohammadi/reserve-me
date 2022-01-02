const router = require('express').Router();
let serviceController = require('../controllers/Service')

router.post('/add', serviceController.addService);
router.post('/book', serviceController.bookService);
router.get('/getAll', serviceController.getServices);
router.post('/update/:id', serviceController.updateService);
module.exports = router;
  