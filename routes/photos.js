'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});
//URL内に含まれた :id という部分にあたる文字列を、ページ内に表示させる
router.get('/:id', (req, res, next) => {
  res.send(req.params.id);
})
module.exports = router;