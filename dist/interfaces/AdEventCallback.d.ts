import { AdEvent } from "../enums/AdEvent";
/**
 * Type alias for Ad event callbacks.
 * @param {AdEvent} event - The Ad event.
 * @param {any} data - Optional event data.
 */
export type AdEventCallback = (event: AdEvent, data?: any) => void;
