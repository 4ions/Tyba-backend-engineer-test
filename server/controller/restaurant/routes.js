const { Router } = require('express');
const controllers = require('./controller');
const { verifyToken } = require('../../middleware/index');


const router = Router();

router.get('/city/:city',  controllers.searchCity);
router.get('/coordinates/:lon/:lat', controllers.searchCoordinates);


module.exports = router