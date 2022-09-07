'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// 練習問題
router.get('/:id', (req, res, next) => {
  res.send(req.params.id); // req.params.id で/:id の入力値を取得できる
});

module.exports = router;