import { AdBlockConfig } from '../interfaces/AdBlockConfig';
import { IAdsgram } from '../interfaces/IAdsgram';
import { AdEvent } from '../enums/AdEvent';
import { AdResultPromise } from '../interfaces/AdResultPromise';
import { AdEventCallback } from '../interfaces/AdEventCallback';

/**
 * Adsgram class implementation.
 */
export class Adsgram implements IAdsgram {
    private readonly config: AdBlockConfig;
    private adsGramController?: IAdsgram;
    private isInitialized = false;
    private readonly scriptSource: string = 'https://sad.adsgram.ai/js/sad.min.js'

    /**
     * Constructor.
     * @param {AdBlockConfig} config - The ad block config.
     */
    constructor(config: AdBlockConfig) {
        this.config = config;
        this.loadScript().then(() => {
            this.isInitialized = true;
            this.adsGramController = (window as any).Adsgram.init(this.config);
        }).catch((error) => {
            console.log({adsgram:{error}})
        }).finally(() => {

        });
    }

    /**
     * Loads the Adsgram script.
     * @returns {Promise<void>} A promise that resolves when the script is loaded.
     */
    private async loadScript(): Promise<void> {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = this.scriptSource;
            script.onload = () => resolve();
            script.onerror = (error) => reject(error);
            document.body.appendChild(script);
        });
    }

    /**
     * Ensures the Adsgram controller is initialized.
     * @returns {Promise<void>} A promise that resolves when the controller is initialized.
     */
    private async ensureInitialized(): Promise<void> {
        if (!this.isInitialized) {
            await new Promise(resolve => setTimeout(resolve, 100));
            return this.ensureInitialized();
        }
    }

    /**
     * Shows the ad.
     * @returns {Promise<AdResultPromise>} A promise that resolves with the ad result.
     */
    async show(): Promise<AdResultPromise> {
        await this.ensureInitialized();
        return this.adsGramController!.show();
    }

    /**
 * Adds an event listener.
 * @param {AdEvent} event - The event type.
 * @param {AdEventCallback} callback - The event callback.
 * @returns {Promise<void>} A promise that resolves when the listener is added.
 */
    public async addEventListener(event: AdEvent, callback: AdEventCallback): Promise<void> {
        await this.ensureInitialized();
        this.adsGramController!.addEventListener(event, callback);
    }

    /**
     * Removes an event listener.
     * @param {AdEvent} event - The event type.
     * @param {AdEventCallback} callback - The event callback.
     * @returns {Promise<void>} A promise that resolves when the listener is removed.
     */
    public async removeEventListener(event: AdEvent, callback: AdEventCallback): Promise<void> {
        await this.ensureInitialized();
        this.adsGramController!.removeEventListener(event, callback);
    }


    /**
     * Destroys the ad.
     * @returns {Promise<void>} A promise that resolves when the ad is destroyed.
     */
    async destroy(): Promise<void> {
        await this.ensureInitialized();
        this.adsGramController!.destroy();
    }

    /**
     * Loads the ad.
     * @returns {Promise<boolean>} A promise that resolves with a boolean indicating whether the ad was loaded.
     */
    async load(): Promise<boolean> {
        await this.ensureInitialized();
        return this.adsGramController!.load();
    }

    /**
     * Gets whether the ad is showing.
     * @returns {boolean} Whether the ad is showing.
     */
    get isShowing(): boolean {
        return this.adsGramController ? this.adsGramController.isShowing : false;
    }

    /**
     * Gets whether the ad is loading.
     * @returns {boolean} Whether the ad is loading.
     */
    get isLoading(): boolean {
        return this.adsGramController ? this.adsGramController.isLoading : false;
    }
}