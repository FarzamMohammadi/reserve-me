const router = require('express').Router();
let reviewController = require('../controllers/Review')

router.post('/add', reviewController.review);
router.get('/freelencer/:id', reviewController.showReview);
module.exports = router;