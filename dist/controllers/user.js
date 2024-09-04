"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userlogin = void 0;
const userlogin = (req, res) => {
    console.log(req.body);
    res.json({
        msg: 'Login User',
        body: req.body
    });
};
exports.userlogin = userlogin;
