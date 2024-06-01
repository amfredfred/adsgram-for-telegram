/**
 * Interface for Ad result promises.
 */
export interface AdResultPromise {
    /**
     * Indicates whether the ad operation is complete.
     */
    done: boolean;
    /**
     * Description of the ad result.
     */
    description: string;
    /**
     * State of the ad.
     */
    state: AdState;
    /**
     * Indicates whether an error occurred.
     */
    error: boolean;
}

/**
 * Enum for Ad states.
 */
enum AdState {
    Load = "load",
    Render = "render",
    Playing = "playing",
    Destroy = "destroy",
}