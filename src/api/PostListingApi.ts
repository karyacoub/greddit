import { IApiResponse } from "../models/ApiReposnse.model";
import { IListingEntity, Listing } from "../models/Listing.model";
import { processGetUnwrapped } from "./apiUtils";

export function requestPostListing() {
    return processGetUnwrapped<IApiResponse>("https://www.reddit.com/.json")
        .then((response: IApiResponse) => {
            return response.data.children.map((listing: IListingEntity) => {
                return Listing.builder()
                    .title(listing.data.title)
                    .build();
            })
        }).catch(() => {
            return [] as unknown as Listing[];
        });
}