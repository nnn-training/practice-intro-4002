'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:id', (req, res, next) => {
  res.set('Content-Type', 'text/plain');
  res.end(req.params.id);
});

module.exports = router;