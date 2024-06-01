/**
 * Interface for AdBlock configuration.
 */
export interface AdBlockConfig {
    /**
     * Unique identifier for the ad block.
     */
    blockId: string;
    /**
     * Enables debug mode (optional).
     */
    debug?: boolean;
}