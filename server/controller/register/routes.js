const { Router } = require('express');
const controllers = require('./registerController');
const { checkDuplicateUsernameOrEmail } = require('../../middleware/index');


const router = Router();

router.post('/signin',  controllers.signIn);
router.post('/signup', checkDuplicateUsernameOrEmail, controllers.signUp);



module.exports = router