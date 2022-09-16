module.exports = {
    login: function(req, res, next) {
        // TODO: validate req
        if (req) {
            res.send("Login");
        }
    },
    signup: function signup(req, res, next) {
        // TODO: validate req
        if (req) {
            res.status(200).send({success: true});
        }
    }
};