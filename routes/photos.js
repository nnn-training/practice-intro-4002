'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:id', (req, res, next) => {
  res.send(`パスのパラメーター： <strong>${req.params.id}</strong>`);
});

module.exports = router;