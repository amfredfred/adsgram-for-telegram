"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAdsgram = void 0;
const AdsgramUse_1 = require("./AdsgramUse");
const useAdsgram = (config) => new AdsgramUse_1.UseAdsgram(config);
exports.useAdsgram = useAdsgram;
