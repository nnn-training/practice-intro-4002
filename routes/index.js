'use strict';
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const photosController = require('../controllers/photosController');
const usersController = require('../controllers/usersController')

/* GET home page. */
router.get('/', indexController.doGet);

router.get('/photos', photosController.doGet);
router.get('/photos/:title', photosController.printParams);

router.get('/users', usersController.doGet);

module.exports = router;
