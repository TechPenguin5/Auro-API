const get = function (_id) {
    const data = require('../data');
    return getAll().find(dac => dac._id == _id);
}

const getAll = function () {
    const data = require('../data');
    return data.Dacs;
}

module.exports = {
    get,
    getAll
};