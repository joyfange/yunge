// ==UserScript==
// @name         Revenuecat & Rc-backup
// @description  如有侵权联系我删除
// @author       原作者@langkhach270389 @fly
// @icon         https://github.com/Toperlock/Quantumult/raw/main/icon/Doraemon/Doraemon-1051.png
// @keyword      通杀脚本
// @system       ios
// ==/UserScript==

const rewriteRules = [
    {
        match: /^https:\/\/(api\.revenuecat\.com|api\.rc-backup\.com)\/.+\/(receipts$|subscribers\/[^/]+$)/,
        replace: "https://rc-backup.lovebabyforever.workers.dev",
        header: true
    }
];

const mitmHostnames = [
    "api.revenuecat.com",
    "api.rc-backup.com"
];

module.exports = {
    rewriteRules,
    mitmHostnames
};
