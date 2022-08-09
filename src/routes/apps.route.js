const express = require('express');
const router = express.Router({ mergeParams: true });

const appsController = require('../controllers/apps.controller');

router.route('/')
  .get(appsController.get);

router.route('/apps')
  .get(appsController.getApps);

router.route('/roonStatus')
  .get(appsController.getRoonStatus);

router.route('/roonStart')
  .post(appsController.postRoonStart);

router.route('/roonStop')
  .post(appsController.postRoonStop);

router.route('/tidalStatus')
  .get(appsController.getTidalStatus);

router.route('/tidalStart')
  .post(appsController.postTidalStart);

router.route('/tidalStop')
  .post(appsController.postTidalStop);

router.route('/naaStatus')
  .get(appsController.getNaaStatus);

router.route('/naaStart')
  .post(appsController.postNaaStart);

router.route('/naaStop')
  .post(appsController.postNaaStop);

router.route('/spotifyStatus')
  .get(appsController.getSpotifyStatus);

router.route('/spotifyStart')
  .post(appsController.postSpotifyStart);

router.route('/spotifyStop')
  .post(appsController.postSpotifyStop);

router.route('/dlnaBridgeStatus')
  .get(appsController.getDLNABridgeStatus);

router.route('/dlnaBridgeStart')
  .post(appsController.postDLNABridgeStart);

router.route('/dlnaBridgeStop')
  .post(appsController.postDLNABridgeStop);

router.route('/airplayStatus')
  .get(appsController.getAirplayStatus);

router.route('/airplayStart')
  .post(appsController.postAirplayStart);

router.route('/airplayStop')
  .post(appsController.postAirplayStop);

router.route('/dlnaStatus')
  .get(appsController.getDlnaStatus);

router.route('/dlnaStart')
  .post(appsController.postDlnaStart);

router.route('/dlnaStop')
  .post(appsController.postDlnaStop);

module.exports = router;