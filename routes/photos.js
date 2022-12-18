'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:title', function(req, res, next) {
  res.send(req.params.title);
});

module.exports = router;