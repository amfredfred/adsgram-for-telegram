import { AdBlockConfig } from '../interfaces/AdBlockConfig';
import { IAdsgram } from '../interfaces/IAdsgram';
import { AdEvent } from '../enums/AdEvent';
import { AdResultPromise } from '../interfaces/AdResultPromise';
import { AdEventCallback } from '../interfaces/AdEventCallback';
/**
 * Adsgram class implementation.
 */
export declare class Adsgram implements IAdsgram {
    /**
    * The ad block config.
    * @type {AdBlockConfig}
    * @private
    * @readonly
    */
    private readonly config;
    /**
     * The Adsgram controller.
     * @type {IAdsgram | undefined}
     * @private
     */
    private adsGramController?;
    /**
     * Whether the Adsgram controller is initialized.
     * @type {boolean | null}
     * @private
     */
    private isInitialized;
    /**
     * The script source URL.
     * @type {string}
     * @private
     * @readonly
     */
    private readonly scriptSource;
    /**
     * Whether the device is connected to the internet.
     * @type {boolean}
     * @private
     */
    private isConnected;
    /**
     * Constructor.
     * @param {AdBlockConfig} config - The ad block config.
     */
    constructor(config: AdBlockConfig);
    /**
     * Initializes the Adsgram controller.
     * @returns {Promise<void>} A promise that resolves when the controller is initialized.
     */
    private initializeController;
    /**
     * Loads the Adsgram script.
     * @returns {Promise<void>} A promise that resolves when the script is loaded.
     */
    private loadScript;
    /**
     * Ensures the Adsgram controller is initialized.
     * @returns {Promise<void>} A promise that resolves when the controller is initialized.
     */
    private ensureInitialized;
    /**
     * Shows the ad.
     * @returns {Promise<AdResultPromise>} A promise that resolves with the ad result.
     */
    show(): Promise<AdResultPromise>;
    /**
 * Adds an event listener.
 * @param {AdEvent} event - The event type.
 * @param {AdEventCallback} callback - The event callback.
 * @returns {Promise<void>} A promise that resolves when the listener is added.
 */
    addEventListener(event: AdEvent, callback: AdEventCallback): Promise<void>;
    /**
     * Removes an event listener.
     * @param {AdEvent} event - The event type.
     * @param {AdEventCallback} callback - The event callback.
     * @returns {Promise<void>} A promise that resolves when the listener is removed.
     */
    removeEventListener(event: AdEvent, callback: AdEventCallback): Promise<void>;
    /**
     * Destroys the ad.
     * @returns {Promise<void>} A promise that resolves when the ad is destroyed.
     */
    destroy(): Promise<void>;
    /**
     * Loads the ad.
     * @returns {Promise<boolean>} A promise that resolves with a boolean indicating whether the ad was loaded.
     */
    load(): Promise<boolean>;
    /**
     * Gets whether the ad is showing.
     * @returns {boolean} Whether the ad is showing.
     */
    get isShowing(): boolean;
    /**
     * Gets whether the ad is loading.
     * @returns {boolean} Whether the ad is loading.
     */
    get isLoading(): boolean;
}
