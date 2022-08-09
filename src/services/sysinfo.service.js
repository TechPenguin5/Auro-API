const get = function () {
  const data = require("../data");
  return data.Dacs;
};

const getMyInfo = (request, response) => {
  //todo
};

const getAllInfo = (request, response) => {
  //todo
};

const getDac = (request, response) => {
  //todo
};

module.exports = {
  get,
  getDac,
  getMyInfo,
  getAllInfo,
};
