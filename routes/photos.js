'use strict';
const express = require('express');
const router = express.Router();

/*xss脆弱性対策
router.get('/:title', (req, res, next) => {
  const title = req.params.title;
  // ここで、変数 title の内容をもとに存在チェック
});
*/

router.get('/:title', (req, res, next) => {
  res.send(req.params.title);
});

module.exports = router;