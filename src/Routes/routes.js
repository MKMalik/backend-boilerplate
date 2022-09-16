
const { login, signup } = require("../Controllers/auth");
const logger = require("../Middlewares/logger")

const routes = function(app) {
    app.get('/auth/login', login);
    app.get('/auth/signup', signup);
}

module.exports = routes;