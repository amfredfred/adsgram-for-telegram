import { AdsgramInitConfigs } from '../interfaces/AdsgramInitConfigs';
import { UseAdsgram } from './AdsgramUse';

/**
 * Creates a new instance of UseAdsgram.
 * @param {AdsgramInitConfigs} config - The ad block config.
 * @returns {UseAdsgram} A new instance of UseAdsgram.
 */
export const useAdsgram = (config: AdsgramInitConfigs): UseAdsgram => {
    return new UseAdsgram(config);
};