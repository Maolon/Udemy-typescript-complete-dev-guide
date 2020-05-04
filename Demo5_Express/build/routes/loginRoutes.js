"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, resp, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    resp.status(403);
    resp.send('Not permitted');
}
var router = express_1.Router();
exports.router = router;
router.post("/login", function (req, resp) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password) {
        req.session = { loggedIn: true };
        resp.redirect('/');
    }
    else {
        resp.send('Invalid Password or User');
    }
});
router.get('/', function (req, resp) {
    if (req.session && req.session.loggedIn) {
        resp.send("\n            <div>\n                <div>You are logged In</div>\n                <a href=\"/logout\">logout</a>\n            </div>\n        ");
    }
    else {
        resp.send("\n            <div>\n                <div>You are not logged In</div>\n                <a href=\"/login\">login</a>\n            </div>\n        ");
    }
});
router.get('/logout', function (req, resp) {
    req.session = undefined;
    resp.redirect('/');
});
router.get('/protected', requireAuth, function (req, resp) {
    resp.send("Authorized Granted");
});
