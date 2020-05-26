import nock from "nock";
import { processGetUnwrapped, ApiError } from "../apiUtils";

describe("processGetUnwrapped", () => {
    it("resolves promise and returns response data on success", async () => {
        nock("https://test-url.com")
            .get("/uri")
            .reply(200, "resolved");
        
        const response = await processGetUnwrapped<string>("https://test-url.com/uri");

        expect(response).toEqual("resolved")
    });

    it("rejects promise and returns error on failure", async () => {
        const expectedResponse = new ApiError(500, "rejected");

        nock("https://test-url.com")
            .get("/uri")
            .reply(expectedResponse.responseCode, expectedResponse.message);

        expect.assertions(1);

        try {
            await processGetUnwrapped("https://test-url.com/uri");
        } catch(e) {
            expect(e).toEqual(expectedResponse);
        }
    });
});