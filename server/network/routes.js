const register = require('../controller/register/routes')

const routes = function (server) {
    server.use('/api/auth/v01/register', register);
}

module.exports = routes;