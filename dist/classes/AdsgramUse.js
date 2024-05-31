"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseAdsgram = void 0;
const Adsgram_1 = require("./Adsgram");
class UseAdsgram extends Adsgram_1.Adsgram {
    constructor(config) {
        super(config);
    }
    on(event, callback) {
        super.addEventListener(event, callback);
    }
    off(event, callback) {
        super.removeEventListener(event, callback);
    }
}
exports.UseAdsgram = UseAdsgram;
