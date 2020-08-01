import { IApiResponse } from "../models/ApiReposnse.model";
import { Listing } from "../models/Listing.model";
import { processGetUnwrapped } from "./apiUtils";

export class HomeScreenApi {
    public static requestPostListings(after?: string) {
        const uri = after
            ? `&after=${after}`
            : "";
    
        return processGetUnwrapped<IApiResponse>("https://www.reddit.com/.json?limit=50" + uri)
            .then((response: IApiResponse) => {
                return response.data.children.map((listing: any) => {
                    const thumbnailWidth = listing.data.thumbnail_width === null ? undefined : listing.data.thumbnail_width;
                    const thumbnailHeight = listing.data.thumbnail_height === null ? undefined : listing.data.thumbnail_height;
    
                    return Listing.builder()
                        .title(listing.data.title)
                        .name(listing.data.name)
                        .score(listing.data.score)
                        .author(listing.data.author)
                        .subreddit(listing.data.subreddit)
                        .domain(listing.data.domain)
                        .thumbnail(listing.data.thumbnail) 
                        .thumbnailWidth(thumbnailWidth)
                        .thumbnailHeight(thumbnailHeight)
                        .build();
                })
            }).catch(() => {
                return [] as unknown as Listing[];
            });
        }
}