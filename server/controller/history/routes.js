const { Router } = require('express');
const controllers = require('./controller');
const { verifyToken } = require('../../middleware/index');


const router = Router();

router.get('/', verifyToken, controllers.getAll);


module.exports = router