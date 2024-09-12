'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
  res.send(
    req.params.title
    // XSS対策のreplaceを追加(たぶんこういうやり方ではないかも)
    .replace(/&/g, '&amp')
    .replace(/</g, '&lt')
    .replace(/>/g, '&gt')
    .replace(/"/g, '&quot')
    .replace(/'/g, '&#x27')
    );
  });

module.exports = router;