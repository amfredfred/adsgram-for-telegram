import { BannerType } from "./BannerType";

/**
 * Interface for AdBlock configuration.
 */
export interface AdsgramInitConfigs {
    /**
     * Unique identifier for the ad block.
     */
    blockId: string;

    /**
     * Enables debug mode (optional).
     */
    debug?: boolean;

    /**
     * Specifies the type of banner to use during debug mode (optional).
     * It can be either 'RewardedVideo' or 'FullscreenMedia'.
     */
    debugBannerType?: BannerType;
}