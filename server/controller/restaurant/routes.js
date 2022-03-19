const { Router } = require('express');
const controllers = require('./controller');
const { verifyToken } = require('../../middleware/index');


const router = Router();

router.get('/city/:city', verifyToken, controllers.searchCity);
router.get('/coordinates/:lon/:lat', verifyToken, controllers.searchCoordinates);


module.exports = router