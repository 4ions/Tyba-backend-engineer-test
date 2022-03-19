const { Router } = require('express');
const controllers = require('./controller');
const { verifyToken, verifyIsLogin } = require('../../middleware/index');


const router = Router();

router.get('/city/:city', [verifyToken, verifyIsLogin], controllers.searchCity);
router.get('/coordinates/:lon/:lat', [verifyToken, verifyIsLogin], controllers.searchCoordinates);


module.exports = router