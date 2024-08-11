import { Adsgram } from "./classes/Adsgram";
import { AdsgramInitConfigs } from "./interfaces/AdsgramInitConfigs";

declare global {
    interface Window {
        Adsgram?: {
            init(params: AdsgramInitConfigs): Adsgram;
        };
    }
}