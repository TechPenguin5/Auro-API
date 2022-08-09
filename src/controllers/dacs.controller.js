const dacsService = require('../services/dacs.service');

const get = function (req, res) {
    res.send(dacsService.get(req.params._id))
}

const getAll = function (req, res) {
    res.send(dacsService.getAll())
}

module.exports = {
    get,
    getAll
};