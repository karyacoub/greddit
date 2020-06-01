import { ApiResponse, IApiData, initialApiData } from "../../models/ApiReposnse.model";
import { Listing, IListing } from "../../models/Listing.model";
import { requestPostListing } from "../PostListingApi";
const nock = require("nock");

const post1: IListing = Listing.builder()
        .title("Post 1")
        .name("1")
        .score(100)
        .author("author1")
        .build();
    const post2: IListing = Listing.builder()
        .title("Post 2")
        .name("2")
        .score(200)
        .author("author2")
        .build();
    const post3: IListing = Listing.builder()
        .title("Post 3")
        .name("3")
        .score(300)
        .author("author3")
        .build();

describe("requestPostListing", () => {
    it("returns an array of post listings on success", async () => {
        const expectedData: IApiData = {
            ...initialApiData,
            children: [
                {
                    kind: "Listing",
                    data: post1,
                },
                {
                    kind: "Listing",
                    data: post2,
                },
                {
                    kind: "Listing",
                    data: post3,
                },
            ],
        }

        const expectedResponse: ApiResponse = ApiResponse.builder()
            .data(expectedData)
            .build();

        nock("https://www.reddit.com")
            .get("/.json?limit=50")
            .reply(200, expectedResponse);

        const response = await requestPostListing();

        expect(response).toEqual([post1, post2, post3]);
    });

    it("returns posts after a particular post id", async () => {
        const expectedData: IApiData = {
            ...initialApiData,
            children: [
                {
                    kind: "Listing",
                    data: post2,
                },
                {
                    kind: "Listing",
                    data: post3,
                },
            ],
        }
        
        const expectedResponse: ApiResponse = ApiResponse.builder()
            .data(expectedData)
            .build();

        nock("https://www.reddit.com")
            .get(`/.json?limit=50&after=${post1.name}`)
            .reply(200, expectedResponse);

        const response = await requestPostListing(post1.name);

        expect(response).toEqual([post2, post3]);
    });

    it("returns an empty list on failure", async () => {
        nock("https://www.reddit.com")
            .get("/.json?limit=50")
            .reply(500, "request failed");

        const response = await requestPostListing();
        
        expect(response).toEqual([]);
    });
});