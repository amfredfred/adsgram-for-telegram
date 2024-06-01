"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseAdsgram = void 0;
const Adsgram_1 = require("./Adsgram");
class UseAdsgram extends Adsgram_1.Adsgram {
    constructor(config) {
        super(config);
    }
    /**
     * Adds an event listener.
     * @param {AdEvent} event - The event type.
     * @param {AdEventCallback} callback - The event callback.
     * @returns {Promise<void>} A promise that resolves when the listener is added.
     */
    on(event, callback) {
        const _super = Object.create(null, {
            addEventListener: { get: () => super.addEventListener }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.addEventListener.call(this, event, callback);
        });
    }
    /**
     * Removes an event listener.
     * @param {AdEvent} event - The event type.
     * @param {AdEventCallback} callback - The event callback.
     * @returns {Promise<void>} A promise that resolves when the listener is removed.
     */
    off(event, callback) {
        const _super = Object.create(null, {
            removeEventListener: { get: () => super.removeEventListener }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.removeEventListener.call(this, event, callback);
        });
    }
}
exports.UseAdsgram = UseAdsgram;
