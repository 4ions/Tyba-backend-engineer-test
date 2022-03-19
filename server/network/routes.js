const register = require('../controller/register/routes');
const find = require('../controller/restaurant/routes');
const history = require('../controller/history/routes');


const routes = function (server) {
    server.use('/api/auth/v01/register', register);
    server.use('/api', find);
    server.use('/api/history', history);
}

module.exports = routes;