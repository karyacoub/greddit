export interface IListing {
    title: string;
}

export interface IListingEntity {
    kind: string;
    data: IListing;
}

export class Listing {
    public title: string;

    constructor(title: string) {
        this.title = title;
    }

    public static builder() {
        return new ListingBuilder();
    }
}

class ListingBuilder {
    private mTitle: string = "";

    public title(value: string) {
        this.mTitle = value;
        return this;
    }

    public build() {
        return new Listing(
            this.mTitle,
        );
    }
}
