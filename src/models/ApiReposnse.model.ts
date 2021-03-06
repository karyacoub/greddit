import { IListingEntity } from "./Listing.model";

export interface IApiData {
    modhash: string;
    itemCount: number;
    itemsAfter?: string;
    itemsBefore?: string;
    children: IListingEntity[];
}

export interface IApiResponse {
    kind: string;
    data: IApiData;
}

export const initialApiData: IApiData = {
    modhash: "",
    itemCount: 0,
    children: [],
}

export class ApiResponse {
    public kind: string;
    public data: IApiData;

    constructor(
        kind: string,
        data: IApiData,
    ) {
        this.kind = kind;
        this.data = data;
    }

    public static builder(): ApiReponseBuilder {
        return new ApiReponseBuilder();
    }
}

class ApiReponseBuilder {
    private mKind: string = "";
    private mData: IApiData = initialApiData;

    public kind(value: string) {
        this.mKind = value;
        return this;
    }

    public data(value: IApiData) {
        this.mData = value;
        return this;
    }

    public build() {
        return new ApiResponse(
            this.mKind,
            this.mData,
        );
    }
}