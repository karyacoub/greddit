import { IApiResponse } from "../models/ApiReposnse.model";
import { Listing } from "../models/Listing.model";
import { processGetUnwrapped } from "./apiUtils";

export function requestPostListing(after?: string) {
    const uri = after
        ? `&after=${after}`
        : "";

    return processGetUnwrapped<IApiResponse>("https://www.reddit.com/.json?limit=50" + uri)
        .then((response: IApiResponse) => {
            return response.data.children.map((listing: any) => {
                return Listing.builder()
                    .title(listing.data.title)
                    .name(listing.data.name)
                    .score(listing.data.score)
                    .author(listing.data.author)
                    .subreddit(listing.data.subreddit)
                    .thumbnail(listing.data.thumbnail)
                    .thumbnailWidth(listing.data.thumbnail_width)
                    .thumbnailHeight(listing.data.thumbnail_height)
                    .build();
            })
        }).catch(() => {
            return [] as unknown as Listing[];
        });
}