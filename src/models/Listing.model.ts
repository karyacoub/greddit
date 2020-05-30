export interface IListing {
    title: string;
    name: string;
}

export interface IListingEntity {
    kind: string;
    data: IListing;
}

export class Listing {
    public title: string;
    public name: string;

    constructor(title: string, name: string) {
        this.title = title;
        this.name = name;
    }

    public static builder() {
        return new ListingBuilder();
    }
}

class ListingBuilder {
    private mTitle: string = "";
    private mName: string = "";

    public title(value: string) {
        this.mTitle = value;
        return this;
    }

    public name(value: string) {
        this.mName = value;
        return this;
    }

    public build() {
        return new Listing(
            this.mTitle,
            this.mName,
        );
    }
}
