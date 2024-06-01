import { AdBlockConfig } from '../interfaces/AdBlockConfig';
import { UseAdsgram } from './AdsgramUse';

/**
 * Creates a new instance of UseAdsgram.
 * @param {AdBlockConfig} config - The ad block config.
 * @returns {UseAdsgram} A new instance of UseAdsgram.
 */
export const useAdsgram = (config: AdBlockConfig): UseAdsgram => {
    return new UseAdsgram(config);
};