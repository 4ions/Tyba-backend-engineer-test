const { Router } = require('express');
const controllers = require('./controller');
const { verifyToken, verifyIsLogin } = require('../../middleware/index');


const router = Router();

router.get('/', [verifyToken, verifyIsLogin], controllers.getAll);


module.exports = router