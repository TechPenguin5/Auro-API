const express = require('express');
const router = express.Router({ mergeParams: true });

const dacsController = require('../controllers/dacs.controller');

router.route('/')
    .get(dacsController.getAll);

router.route('/:_id')
    .get(dacsController.get);

module.exports = router;