import { ApiResponse, IApiData, initialApiData } from "../../models/ApiReposnse.model";
import { Listing } from "../../models/Listing.model";
import { requestPostListing } from "../PostListingApi";
const nock = require("nock");

describe("requestPostListing", () => {
    it("returns an array of post listings on success", async () => {
        const expectedData: IApiData = {
            ...initialApiData,
            children: [
                {
                    kind: "kind",
                    data: Listing.builder().title("Post title").build(),
                },
            ],
        }
            
        const expectedResponse: ApiResponse = ApiResponse.builder()
            .data(expectedData)
            .build();

        nock("https://www.reddit.com")
            .get("/.json")
            .reply(200, expectedResponse);

        const response = await requestPostListing();

        expect(response).toEqual([expectedData.children[0].data]);
    });

    it("returns an emoty list on failure", async () => {
        nock("https://www.reddit.com")
            .get("/.json")
            .reply(500, "request failed");

        const response = await requestPostListing();
        
        expect(response).toEqual([]);
    });
});