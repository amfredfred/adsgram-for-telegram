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
exports.Adsgram = void 0;
class Adsgram {
    constructor(config) {
        this.config = config;
        this.loadScript().then(() => {
            this.adsGramController = window.Adsgram.init(this.config);
        });
    }
    loadScript() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://sad.adsgram.ai/js/sad.min.js';
                script.onload = () => resolve();
                script.onerror = (error) => reject(error);
                document.body.appendChild(script);
            });
        });
    }
    // Ensure adsGramController is initialized before calling methods on it
    ensureInitialized() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.adsGramController) {
                yield new Promise(resolve => setTimeout(resolve, 100)); // Delay for initialization
                return this.ensureInitialized(); // Recursively call until initialized
            }
        });
    }
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureInitialized(); // Ensure initialized before calling methods
            return this.adsGramController.show(); // Ensure non-null assertion
        });
    }
    addEventListener(event, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureInitialized();
            this.adsGramController.addEventListener(event, callback);
        });
    }
    removeEventListener(event, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureInitialized();
            this.adsGramController.removeEventListener(event, callback);
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureInitialized();
            this.adsGramController.destroy();
        });
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureInitialized();
            return this.adsGramController.load();
        });
    }
    get isShowing() {
        return this.adsGramController ? this.adsGramController.isShowing : false;
    }
    get isLoading() {
        return this.adsGramController ? this.adsGramController.isLoading : false;
    }
}
exports.Adsgram = Adsgram;
