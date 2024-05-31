import { IAdsgram } from '../interfaces/IAdsgram';
import { AdEvent } from '../enums/AdEvent';
import { AdEventCallback } from '../interfaces/AdEventCallback';

export interface IUseAdsgram extends IAdsgram {
    on: (event: AdEvent, callback: AdEventCallback) => void;
    off: (event: AdEvent, callback: AdEventCallback) => void;
}