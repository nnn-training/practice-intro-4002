'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// id内容をsend()で表示する
router.get('/:id', (req, res, next) => {
  res.send(req.params.id);
})

module.exports = router;