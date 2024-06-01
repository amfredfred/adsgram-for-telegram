"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAdsgram = void 0;
const AdsgramUse_1 = require("./AdsgramUse");
/**
 * Creates a new instance of UseAdsgram.
 * @param {AdBlockConfig} config - The ad block config.
 * @returns {UseAdsgram} A new instance of UseAdsgram.
 */
const useAdsgram = (config) => {
    return new AdsgramUse_1.UseAdsgram(config);
};
exports.useAdsgram = useAdsgram;
