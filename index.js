"use strict";
exports.__esModule = true;
exports.loginSuccess = void 0;
var aegis_web_sdk_1 = require("aegis-web-sdk");
var aegis = new aegis_web_sdk_1["default"]({
    id: "random",
    reportApiSpeed: true,
    reportAssetSpeed: true,
    version: "1.4.1"
});
var loginSuccess = function () {
    aegis.reportEvent({
        name: "login",
        ext1: "login-success",
        ext2: "webTUICallKit"
    });
};
exports.loginSuccess = loginSuccess;
