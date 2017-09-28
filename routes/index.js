const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.send('Maggy Solution to Junior Enrichment')
});

router.use('/students', require('./students'))
router.use('/teachers', require('./teachers'))




module.exports = router;