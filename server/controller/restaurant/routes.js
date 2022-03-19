const { Router } = require('express');
const controllers = require('./registerController');
const { verifyToken } = require('../../middleware/index');


const router = Router();

router.get('/city/:city', verifyToken, controllers.searchCity);
router.get('/coordinates/', verifyToken, controllers.searchCoordinates);


module.exports = router