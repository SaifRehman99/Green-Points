const router = require('express').Router();
const {  getUserActivities, addUserActivity } = require('../controllers/userActivityController');


router.get('/getUserActivities', getUserActivities);
router.post('/addUserActivity', addUserActivity);


module.exports = router;