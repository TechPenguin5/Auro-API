const data = require("../data");

var exec = require("child_process").exec;
var systemdStatus = require("systemd-status");
var shell = require("shelljs");

const get = function () {
  //todo
};

const getRoonStatus = (request, response) => {
  //todo
};

const postRoonStart = (request, response) => {
  //todo
};

const postRoonStop = (request, response) => {
  //todo
};

const getTidalStatus = (request, response) => {
  //todo
};

const postTidalStart = (request, response) => {
  //todo
};

const postTidalStop = (request, response) => {
  //todo
};

const getNaaStatus = (request, response) => {
  //todo
};

const postNaaStart = (request, response) => {
  //todo
};

const postNaaStop = (request, response) => {
  //todo
};

const getSpotifyStatus = (request, response) => {
  //todo
};

const postSpotifyStart = (request, response) => {
  //todo
};

const postSpotifyStop = (request, response) => {
  //todo
};

const getDLNABridgeStatus = (request, response) => {
  //todo
};

const postDLNABridgeStart = (request, response) => {
  //todo
};

const postDLNABridgeStop = (request, response) => {
  //todo
};

const getAirplayStatus = (request, response) => {
  //todo
};

const postAirplayStart = (request, response) => {
  //todo
};

const postAirplayStop = (request, response) => {
  //todo
};

const getDlnaStatus = (request, response) => {
  //todo
};

const postDlnaStart = (request, response) => {
  //todo
};

const postDlnaStop = (request, response) => {
  //todo
};

const getApps = function () {
  return data.Services;
};

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
  getDlnaStatus,
  postDlnaStart,
  postDlnaStop,
  getApps,
};
