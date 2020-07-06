export interface IListing {
    title: string;
    name: string;
    score: number;
    author: string;
    subreddit: string;
    domain: string;
    thumbnail: string;
    thumbnailWidth?: number;
    thumbnailHeight?: number;
}

export interface IListingEntity {
    kind: string;
    data: IListing;
}

export class Listing {
    public title: string;
    public name: string;
    public score: number;
    public author: string;
    public subreddit: string;
    public domain: string;
    public thumbnail: string;
    public thumbnailWidth?: number;
    public thumbnailHeight?: number;

    constructor(
            title: string, 
            name: string, 
            score: number, 
            author: string, 
            subreddit: string, 
            domain: string,
            thumbnail: string,
            thumbnailWidth?: number,
            thumbnailHeight?: number,
        ) {
            this.title = title;
            this.name = name;
            this.score = score;
            this.author = author;
            this.subreddit = subreddit;
            this.domain = domain;
            this.thumbnail = thumbnail;
            this.thumbnailWidth = thumbnailWidth;
            this.thumbnailHeight = thumbnailHeight;
    }

    public static builder(): ListingBuilder {
        return new ListingBuilder();
    }
}

class ListingBuilder {
    private mTitle: string = "";
    private mName: string = "";
    private mScore: number = 0;
    private mAuthor: string = "";
    private mSubreddit: string = "";
    private mDomain: string = "";
    private mThumbnail: string = "";
    private mThumbnailWidth?: number = undefined;
    private mThumbnailHeight?: number = undefined;

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

    public author(value: string) {
        this.mAuthor = value;
        return this;
    }

    public subreddit(value: string) {
        this.mSubreddit = value;
        return this;
    }

    public thumbnail(value: string) {
        this.mThumbnail = value;
        return this;
    }

    public thumbnailWidth(value?: number) {
        this.mThumbnailWidth = value;
        return this;
    }

    public thumbnailHeight(value?: number) {
        this.mThumbnailHeight = value;
        return this;
    }

    public domain(value: string) {
        this.mDomain = value;
        return this;
    }

    public build() {
        return new Listing(
            this.mTitle,
            this.mName,
            this.mScore,
            this.mAuthor,
            this.mSubreddit,
            this.mDomain,
            this.mThumbnail,
            this.mThumbnailWidth,
            this.mThumbnailHeight,
        );
    }
}
