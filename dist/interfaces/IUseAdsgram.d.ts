import { IAdsgram } from '../interfaces/IAdsgram';
import { AdEvent } from '../enums/AdEvent';
import { AdEventCallback } from '../interfaces/AdEventCallback';
/**
 * Interface for the UseAdsgram class.
 */
export interface IUseAdsgram extends IAdsgram {
    /**
     * Adds an event listener.
     * @param {AdEvent} event - The event type.
     * @param {AdEventCallback} callback - The event callback.
     */
    on(event: AdEvent, callback: AdEventCallback): void;
    /**
     * Removes an event listener.
     * @param {AdEvent} event - The event type.
     * @param {AdEventCallback} callback - The event callback.
     */
    off(event: AdEvent, callback: AdEventCallback): void;
}
