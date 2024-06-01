import { AdEvent } from '../enums/AdEvent';
import { AdResultPromise } from '../interfaces/AdResultPromise';
import { AdEventCallback } from '../interfaces/AdEventCallback';

/**
 * Interface for the Adsgram class.
 */
export interface IAdsgram {
    /**
     * Shows the ad.
     * @returns {Promise<AdResultPromise>} A promise that resolves with the ad result.
     */
    show(): Promise<AdResultPromise>;

    /**
     * Adds an event listener.
     * @param {AdEvent} event - The event type.
     * @param {AdEventCallback} callback - The event callback.
     */
    addEventListener(event: AdEvent, callback: AdEventCallback): void;

    /**
     * Removes an event listener.
     * @param {AdEvent} event - The event type.
     * @param {AdEventCallback} callback - The event callback.
     */
    removeEventListener(event: AdEvent, callback: AdEventCallback): void;

    /**
     * Destroys the ad.
     */
    destroy(): void;

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