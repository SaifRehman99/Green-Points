const router = require('express').Router();
const {  getUserActivity, getUserActivities, addUserActivity } = require('../controllers/userActivityController');


router.get('/getUserActivities/:id', getUserActivity);
router.get('/getUserActivities', getUserActivities);
router.post('/addUserActivity', addUserActivity);


module.exports = router;