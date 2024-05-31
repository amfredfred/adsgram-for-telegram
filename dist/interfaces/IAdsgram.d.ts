import { AdEvent } from '../enums/AdEvent';
import { AdResultPromise } from '../interfaces/AdResultPromise';
import { AdEventCallback } from '../interfaces/AdEventCallback';
export interface IAdsgram {
    show: () => Promise<AdResultPromise>;
    addEventListener: (event: AdEvent, callback: AdEventCallback) => void;
    removeEventListener: (event: AdEvent, callback: AdEventCallback) => void;
    destroy: () => void;
    load: () => Promise<boolean>;
    isShowing: boolean;
    isLoading: boolean;
}
