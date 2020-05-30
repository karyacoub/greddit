import { IApiResponse } from "../models/ApiReposnse.model";
import { IListingEntity, Listing } from "../models/Listing.model";
import { processGetUnwrapped } from "./apiUtils";

export function requestPostListing(after?: string) {
    const uri = after
        ? `?after=${after}`
        : "";

    return processGetUnwrapped<IApiResponse>("https://www.reddit.com/.json" + uri)
        .then((response: IApiResponse) => {
            return response.data.children.map((listing: IListingEntity) => {
                return Listing.builder()
                    .title(listing.data.title)
                    .name(listing.data.name)
                    .build();
            })
        }).catch(() => {
            return [] as unknown as Listing[];
        });
}