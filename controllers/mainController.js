const Joi = require('joi');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const util = require('util');
const mysql = require('../db/dbConnection');
const query = util.promisify(mysql.query).bind(mysql);

const { generateToken, getISRC } = require('../utils/spotify/spotifyAPI');

/*
 *---------------- Get JWT Auth token from login user table --------------
 */
exports.userLogin = async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const result = schema.validate(req.body);
    if (result.error)
      return res.status(200).json({
        statusText: 'FAIL',
        statusValue: 400,
        message: result.error.details[0].message,
      });

    const checkUser = await query(`SELECT * FROM user WHERE email = '${req.body.email}'`);
    if (checkUser.length == 0)
      return res.status(400).json({ status: 'FAIL', message: 'Email not found.' });

    const reqPassword = calculateMD5Hash(req.body.password);
    const password = checkUser[0]['password'];

    if (reqPassword != password)
      return res.status(400).json({ status: 'FAIL', message: 'Incorrect password.' });

    const _token = jwt.sign(
      {
        user_id: checkUser[0]['user_id'],
        email: checkUser[0]['email'],
      },
      process.env.JWTToken,
      { expiresIn: process.env.JWTEXPIRE }
    );

    return res.status(200).json({
      status: 'SUCCESS',
      message: 'Login successfully',
      data: req.body,
      _token,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'FAIL', data: err });
  }
};

/*
 *---------- insert isrc details in isrc_data table -------------
 */
exports.updateIsrcData = async (req, res, next) => {
  try {
    const isrc = req.query.isrc;
    if (!isrc)
      return res.status(400).json({ status: 'FAIL', message: 'Spotify ISRC Code Required.' });

    const checkIsrc = await query(`SELECT * FROM isrc_data WHERE isrc_code = '${isrc}'`);
    if (checkIsrc.length > 0)
      return res.status(400).json({ status: 'FAIL', message: 'ISRC already exists' });

    const spotifyToken = await generateToken();
    if (!spotifyToken)
      return res.status(400).json({ status: 'FAIL', message: 'Spotify Server Issue.' });

    const track = await getISRC(spotifyToken, isrc);
    if (!spotifyToken) return res.status(400).json({ status: 'FAIL', message: 'ISRC not found.' });

    const insertData = {
      title: track.title,
      isrc_code: isrc,
      image_url: track.image_url,
      artist_name: track.artist_name,
    };
    await query('INSERT INTO isrc_data SET ?', insertData);

    return res.status(200).json({
      status: 'SUCCESS',
      message: 'ISRC inserted successfully',
      data: insertData,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'FAIL', data: err });
  }
};

/*
 *--------- Get single result by isrc from isrc_data table ---------
 */
exports.getIsrcData = async (req, res, next) => {
  try {
    const isrc = req.query.isrc;
    if (!isrc)
      return res.status(400).json({ status: 'FAIL', message: 'Spotify ISRC Code Required.' });

    const checkIsrc = await query(`SELECT * FROM isrc_data WHERE isrc_code = '${isrc}'`);
    if (checkIsrc.length == 0)
      return res.status(400).json({ status: 'FAIL', message: 'ISRC not found' });

    return res.status(200).json({ status: 'SUCCESS', message: 'ISRC found', data: checkIsrc });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'FAIL', data: err });
  }
};

/*
 *---------- Get multiple results by artist from isrc_data table ---------
 */
exports.getArtistTrack = async (req, res, next) => {
  try {
    const artist_name = req.query.artist_name;
    if (!artist_name)
      return res.status(400).json({ status: 'FAIL', message: 'Artist name is Required.' });

    const checkArtist = await query(
      `SELECT * FROM isrc_data WHERE artist_name LIKE '%${artist_name}%'`
    );
    if (checkArtist.length == 0)
      return res.status(400).json({ status: 'FAIL', message: 'Artist not found' });

    return res.status(200).json({ status: 'SUCCESS', message: 'Artist found', data: checkArtist });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'FAIL', data: err });
  }
};

/*
 *--------- encrypt in md5 ------------
 */
function calculateMD5Hash(inputString) {
  const hash = crypto.createHash('md5');
  hash.update(inputString);
  return hash.digest('hex');
}
