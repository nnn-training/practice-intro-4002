'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// ':title'の部分の文字列をページ内に表示
router.get('/:title', (req, res, next) => {
  res.send(req.params.title);
});

module.exports = router;