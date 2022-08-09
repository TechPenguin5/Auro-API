const sysinfoService = require('../services/sysinfo.service');

const get = function (req, res) {
    res.send(sysinfoService.get())
}

const getDac = function (req, res) {
    res.send(sysinfoService.getDac());
}

const getMyInfo = function (req, res) {
    res.send(sysinfoService.getMyInfo());
}

const getAllInfo = function (req, res) {
    res.send(sysinfoService.getAllInfo());
}

module.exports = {
    get,
    getDac,
    getMyInfo,
    getAllInfo
};