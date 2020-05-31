export interface IListing {
    title: string;
    name: string;
    score: number;
}

export interface IListingEntity {
    kind: string;
    data: IListing;
}

export class Listing {
    public title: string;
    public name: string;
    public score: number;

    constructor(title: string, name: string, score: number) {
        this.title = title;
        this.name = name;
        this.score = score;
    }

    public static builder() {
        return new ListingBuilder();
    }
}

class ListingBuilder {
    private mTitle: string = "";
    private mName: string = "";
    private mScore: number = 0;

    public title(value: string) {
        this.mTitle = value;
        return this;
    }

    public name(value: string) {
        this.mName = value;
        return this;
    }

    public score(value: number) {
        this.mScore = value;
        return this;
    }

    public build() {
        return new Listing(
            this.mTitle,
            this.mName,
            this.mScore,
        );
    }
}
