"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.json({
        msg: 'Todo salio Bien'
    });
});
router.get('/:id', function (req, res) {
    var id = req.params.id;
    res.json({
        id: id
    });
});
exports.default = router;
