const router = require('express').Router();
const {getGreenPoints, addGreenPoints} = require('../controllers/greenPointController');


router.get('/getPoints', getGreenPoints);
router.post('/addPoint', addGreenPoints);


module.exports = router;