'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
    const title = req.params.title;
    if (title.indexOf('<') === -1) {
        res.send(title);
    } else {
        next(createError(404));
    }

});

module.exports = router;