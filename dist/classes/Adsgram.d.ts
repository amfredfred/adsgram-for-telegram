import { AdBlockConfig } from '../interfaces/AdBlockConfig';
import { IAdsgram } from '../interfaces/IAdsgram';
import { AdEvent } from '../enums/AdEvent';
import { AdResultPromise } from '../interfaces/AdResultPromise';
import { AdEventCallback } from '../interfaces/AdEventCallback';
export declare class Adsgram implements IAdsgram {
    private config;
    private adsGramController?;
    constructor(config: AdBlockConfig);
    private loadScript;
    private ensureInitialized;
    show(): Promise<AdResultPromise>;
    addEventListener(event: AdEvent, callback: AdEventCallback): Promise<void>;
    removeEventListener(event: AdEvent, callback: AdEventCallback): Promise<void>;
    destroy(): Promise<void>;
    load(): Promise<boolean>;
    get isShowing(): boolean;
    get isLoading(): boolean;
}
