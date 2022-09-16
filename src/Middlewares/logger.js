module.exports = function logger(req, res, next) {
    console.log('>>>>>>>>>>>>>>>>>>>>>');
    console.log('Request body: ');
    console.log(req.body);
    console.log('>>>>>>>>>>>>>>>>>>>>>');
    console.log('Response body: ');
    let oldSend = res.send;
    res.send = function(data) {
        console.log(data);
        oldSend.apply(res, arguments);
    }


    next();
}