const appsService = require('../services/apps.service');

const get = function (req, res) {
    res.send(appsService.get());
}

const getApps = function (req, res) {
    res.send(appsService.getApps());
}

const getRoonStatus = function (req, res) {
    res.send(appsService.getRoonStatus());
}

const postRoonStart = function (req, res) {
    res.send(appsService.postRoonStart());
}

const postRoonStop = function (req, res) {
    res.send(appsService.postRoonStop());
}

const getTidalStatus = function (req, res) {
    res.send(appsService.getTidalStatus());
}

const postTidalStart = function (req, res) {
    res.send(appsService.postTidalStart());
}

const postTidalStop = function (req, res) {
    res.send(appsService.postTidalStop());
}

const getNaaStatus = function (req, res) {
    res.send(appsService.getNaaStatus());
}

const postNaaStart = function (req, res) {
    res.send(appsService.postNaaStart());
}

const postNaaStop = function (req, res) {
    res.send(appsService.postNaaStop());
}

const getSpotifyStatus = function (req, res) {
    res.send(appsService.getSpotifyStatus());
}

const postSpotifyStart = function (req, res) {
    res.send(appsService.postSpotifyStart());
}

const postSpotifyStop = function (req, res) {
    res.send(appsService.postSpotifyStop());
}

const getDLNABridgeStatus = function (req, res) {
    res.send(appsService.getDLNABridgeStatus());
}

const postDLNABridgeStart = function (req, res) {
    res.send(appsService.postDLNABridgeStart());
}

const postDLNABridgeStop = function (req, res) {
    res.send(appsService.postDLNABridgeStop());
}

const getAirplayStatus = function (req, res) {
    res.send(appsService.getAirplayStatus());
}

const postAirplayStart = function (req, res) {
    res.send(appsService.postAirplayStart());
}

const postAirplayStop = function (req, res) {
    res.send(appsService.postAirplayStop());
}

const getDlnaStatus = function (req, res) {
    res.send(appsService.getDlnaStatus());
}

const postDlnaStart = function (req, res) {
    res.send(appsService.postDlnaStart());
}

const postDlnaStop = function (req, res) {
    res.send(appsService.postDlnaStop());
}

module.exports = {
    get,
    getRoonStatus,
    postRoonStart,
    postRoonStop,
    getTidalStatus,
    postTidalStart,
    postTidalStop,
    getNaaStatus,
    postNaaStart,
    postNaaStop,
    getSpotifyStatus,
    postSpotifyStart,
    postSpotifyStop,
    getDLNABridgeStatus,
    postDLNABridgeStart,
    postDLNABridgeStop,
    getAirplayStatus,
    postAirplayStart,
    postAirplayStop,
    getAirplayStatus,
    postAirplayStart,
    postAirplayStop,
    getDlnaStatus,
    postDlnaStart,
    postDlnaStop,
    getApps
};