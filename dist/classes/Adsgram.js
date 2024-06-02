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
/**
 * Adsgram class implementation.
 */
class Adsgram {
    /**
     * Constructor.
     * @param {AdBlockConfig} config - The ad block config.
     */
    constructor(config) {
        /**
         * Whether the Adsgram controller is initialized.
         * @type {boolean | null}
         * @private
         */
        this.isInitialized = null;
        /**
         * The script source URL.
         * @type {string}
         * @private
         * @readonly
         */
        this.scriptSource = 'https://sad.adsgram.ai/js/sad.min.js';
        /**
         * Whether the device is connected to the internet.
         * @type {boolean}
         * @private
         */
        this.isConnected = navigator.onLine;
        this.config = config;
        this.loadScript()
            .then(this.initializeController)
            .catch((error) => { console.error({ adsgram: { loading_error: error } }); });
    }
    /**
     * Initializes the Adsgram controller.
     * @returns {Promise<void>} A promise that resolves when the controller is initialized.
     */
    initializeController() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.adsGramController = window.Adsgram.init(this.config);
                this.isInitialized = true;
            }
            catch (error) {
                console.log({ adsgram: { controller: error } });
                this.isInitialized = false;
            }
        });
    }
    /**
     * Loads the Adsgram script.
     * @returns {Promise<void>} A promise that resolves when the script is loaded.
     */
    loadScript() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isConnected)
                return console.log("You are offline");
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = this.scriptSource;
                script.onload = () => resolve();
                script.onerror = (error) => reject(error);
                document.body.appendChild(script);
            });
        });
    }
    /**
     * Ensures the Adsgram controller is initialized.
     * @returns {Promise<void>} A promise that resolves when the controller is initialized.
     */
    ensureInitialized() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isConnected)
                return console.log("You are offline");
            if (this.isInitialized === null) {
                yield new Promise(resolve => setTimeout(resolve, 100));
                return this.ensureInitialized();
            }
            else if (this.isInitialized === false) {
                yield this.initializeController();
            }
        });
    }
    /**
     * Shows the ad.
     * @returns {Promise<AdResultPromise>} A promise that resolves with the ad result.
     */
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureInitialized();
            return this.adsGramController.show();
        });
    }
    /**
 * Adds an event listener.
 * @param {AdEvent} event - The event type.
 * @param {AdEventCallback} callback - The event callback.
 * @returns {Promise<void>} A promise that resolves when the listener is added.
 */
    addEventListener(event, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureInitialized();
            this.adsGramController.addEventListener(event, callback);
        });
    }
    /**
     * Removes an event listener.
     * @param {AdEvent} event - The event type.
     * @param {AdEventCallback} callback - The event callback.
     * @returns {Promise<void>} A promise that resolves when the listener is removed.
     */
    removeEventListener(event, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureInitialized();
            this.adsGramController.removeEventListener(event, callback);
        });
    }
    /**
     * Destroys the ad.
     * @returns {Promise<void>} A promise that resolves when the ad is destroyed.
     */
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureInitialized();
            this.adsGramController.destroy();
        });
    }
    /**
     * Loads the ad.
     * @returns {Promise<boolean>} A promise that resolves with a boolean indicating whether the ad was loaded.
     */
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureInitialized();
            return this.adsGramController.load();
        });
    }
    /**
     * Gets whether the ad is showing.
     * @returns {boolean} Whether the ad is showing.
     */
    get isShowing() {
        return this.adsGramController ? this.adsGramController.isShowing : false;
    }
    /**
     * Gets whether the ad is loading.
     * @returns {boolean} Whether the ad is loading.
     */
    get isLoading() {
        return this.adsGramController ? this.adsGramController.isLoading : false;
    }
}
exports.Adsgram = Adsgram;
