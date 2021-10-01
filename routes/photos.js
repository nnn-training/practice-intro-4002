'use strict';
const express = require('express');
const router = express.Router();
const createError = require('http-errors');

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
  const title = req.params.title;
  // The following IFcheck was written roughly, so this does NOT guarntee to protect XSS attack.
  if(title.indexOf('<') !== -1 || title.indexOf('>') !== -1) {
    next(createError(404));
    return;
  }
  res.send(title);
});

module.exports = router;