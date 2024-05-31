import { Adsgram } from "./Adsgram";
import { AdBlockConfig } from "../interfaces/AdBlockConfig";
import { AdEvent } from "../enums/AdEvent";
import { AdEventCallback } from "../interfaces/AdEventCallback";
import { IUseAdsgram } from "../interfaces/IUseAdsgram";
export declare class UseAdsgram extends Adsgram implements IUseAdsgram {
    constructor(config: AdBlockConfig);
    on(event: AdEvent, callback: AdEventCallback): void;
    off(event: AdEvent, callback: AdEventCallback): void;
}
