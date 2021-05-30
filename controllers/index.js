const router = require('express').Router();
const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboardroutes.js');
const homeRoutes = require('./homeroutes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;