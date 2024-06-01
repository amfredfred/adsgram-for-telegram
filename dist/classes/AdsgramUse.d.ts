import { Adsgram } from "./Adsgram";
import { AdBlockConfig } from "../interfaces/AdBlockConfig";
import { AdEvent } from "../enums/AdEvent";
import { AdEventCallback } from "../interfaces/AdEventCallback";
import { IUseAdsgram } from "../interfaces/IUseAdsgram";
export declare class UseAdsgram extends Adsgram implements IUseAdsgram {
    constructor(config: AdBlockConfig);
    /**
     * Adds an event listener.
     * @param {AdEvent} event - The event type.
     * @param {AdEventCallback} callback - The event callback.
     * @returns {Promise<void>} A promise that resolves when the listener is added.
     */
    on(event: AdEvent, callback: AdEventCallback): Promise<void>;
    /**
     * Removes an event listener.
     * @param {AdEvent} event - The event type.
     * @param {AdEventCallback} callback - The event callback.
     * @returns {Promise<void>} A promise that resolves when the listener is removed.
     */
    off(event: AdEvent, callback: AdEventCallback): Promise<void>;
}
