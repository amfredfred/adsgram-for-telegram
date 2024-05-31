import { AdBlockConfig } from '../interfaces/AdBlockConfig';
import { IAdsgram } from '../interfaces/IAdsgram';
import { AdEvent } from '../enums/AdEvent';
import { AdResultPromise } from '../interfaces/AdResultPromise';
import { AdEventCallback } from '../interfaces/AdEventCallback';

export class Adsgram implements IAdsgram {
    private config: AdBlockConfig;
    private adsGramController?: IAdsgram; // Change to optional type

    constructor(config: AdBlockConfig) {
        this.config = config;
        this.loadScript().then(() => {
            this.adsGramController = (window as any).Adsgram?.init?.(this.config);
        });
    }

    private async loadScript(): Promise<void> {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://sad.adsgram.ai/js/sad.min.js';
            script.onload = () => resolve();
            script.onerror = (error) => reject(error);
            document.body.appendChild(script);
        });
    }

    // Ensure adsGramController is initialized before calling methods on it
    private async ensureInitialized(): Promise<void> {
        if (!this.adsGramController) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Delay for initialization
            return this.ensureInitialized(); // Recursively call until initialized
        }
    }

    async show(): Promise<AdResultPromise> {
        await this.ensureInitialized(); // Ensure initialized before calling methods
        return this.adsGramController!.show(); // Ensure non-null assertion
    }

    async addEventListener(event: AdEvent, callback: AdEventCallback): Promise<void> {
        await this.ensureInitialized();
        this.adsGramController!.addEventListener(event, callback);
    }

    async removeEventListener(event: AdEvent, callback: AdEventCallback): Promise<void> {
        await this.ensureInitialized();
        this.adsGramController!.removeEventListener(event, callback);
    }

    async destroy(): Promise<void> {
        await this.ensureInitialized();
        this.adsGramController!.destroy();
    }

    async load(): Promise<boolean> {
        await this.ensureInitialized();
        return this.adsGramController!.load();
    }

    get isShowing(): boolean {
        return this.adsGramController ? this.adsGramController.isShowing : false;
    }

    get isLoading(): boolean {
        return this.adsGramController ? this.adsGramController.isLoading : false;
    }

    // get forceCampaignId(): string {
    //     return this.adsGramController.forceCampaignId;
    // }

    // get shouldRemoveContainer(): boolean {
    //     return this.adsGramController.shouldRemoveContainer;
    // }


}