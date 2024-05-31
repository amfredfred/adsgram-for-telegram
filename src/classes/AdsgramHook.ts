
import { AdBlockConfig } from '../interfaces/AdBlockConfig';
import { UseAdsgram } from './AdsgramUse';

export const useAdsgram = (config: AdBlockConfig) => new UseAdsgram(config);