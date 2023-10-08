const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');

const verifyJWT = require('../utils/middleware/verifyJWT');

/*
 *-----------------------------Routes Section------------------------
 */

router.post('/api/user-login', mainController.userLogin);
router.post('/api/insert-isrc-data', verifyJWT, mainController.updateIsrcData);
router.get('/api/get-isrc-data', verifyJWT, mainController.getIsrcData);
router.get('/api/get-artist-track', verifyJWT, mainController.getArtistTrack);

/*
 *------------Export Routes -----------------
 */

module.exports = router;
