'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/nyobi', (req, res, next) => {
  res.send('N予備校！すごい！本当にすごいんだ！');
});

router.get('/:title', (req, res, next) => {
  res.send(req.params.title);
});

module.exports = router;