const express = require('express');
const apps = require('./apps.route');
const sysinfo = require('./sysinfo.route');
const dacs = require('./dacs.route');

const router = express.Router();

router.use('/dacs', dacs);
router.use('/sysinfo', sysinfo);
router.use('/apps', apps);

router.get('/', (req, res) => res.send({
  'system-name':'Auro API',
  'version':'Version 1.0',
  'author':'techpenguin5'
}));

router.get('/health', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;