'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/1', (req, res, next) => {
  res.render('photos');
});

router.get('/:title', (req, res, next) => {
  res.send(req.params.title);
});

router.get('/hoge', (req, res, next) => {
  res.send(req.params.hoge);
});

module.exports = router;