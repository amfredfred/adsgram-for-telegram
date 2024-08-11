import { Telegram } from "@twa-dev/types"
import { IAdsgram } from "./interfaces/IAdsgram";
import { Adsgram } from "./classes/Adsgram";
import { AdsgramInitConfigs } from "./interfaces/AdsgramInitConfigs";

declare global {
    interface Window {
        Telegram: Telegram;
        Adsgram?: {
            init(params: AdsgramInitConfigs): Adsgram;
        };
    }
}