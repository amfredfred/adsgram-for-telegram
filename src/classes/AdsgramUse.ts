import { Adsgram } from "./Adsgram";
import { AdBlockConfig } from "../interfaces/AdBlockConfig";
import { AdEvent } from "../enums/AdEvent";
import { AdEventCallback } from "../interfaces/AdEventCallback";
import { IUseAdsgram } from "../interfaces/IUseAdsgram";

export class UseAdsgram extends Adsgram implements IUseAdsgram {
    constructor(config: AdBlockConfig) {
        super(config);
    }

    on(event: AdEvent, callback: AdEventCallback): void {
        super.addEventListener(event, callback);
    }

    off(event: AdEvent, callback: AdEventCallback): void {
        super.removeEventListener(event, callback);
    }
}