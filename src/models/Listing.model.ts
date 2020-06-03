export interface IListing {
    title: string;
    name: string;
    score: number;
    author: string;
    subreddit: string;
    thumbnail: string;
    thumbnail_width: number | null;
    thumbnail_height: number | null;
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
    public thumbnail: string;
    public thumbnail_width: number | null;
    public thumbnail_height: number | null;

    constructor(
            title: string, 
            name: string, 
            score: number, 
            author: string, 
            subreddit: string, 
            thumbnail: string,
            thumbnailWidth: number | null,
            thumbnailHeight: number | null,
        ) {
            this.title = title;
            this.name = name;
            this.score = score;
            this.author = author;
            this.subreddit = subreddit;
            this.thumbnail = thumbnail;
            this.thumbnail_width = thumbnailWidth;
            this.thumbnail_height = thumbnailHeight;
    }

    public static builder() {
        return new ListingBuilder();
    }
}

class ListingBuilder {
    private mTitle: string = "";
    private mName: string = "";
    private mScore: number = 0;
    private mAuthor: string = "";
    private mSubreddit: string = "";
    private mThumbnail: string = "";
    private mThumbnailWidth: number | null = null;
    private mThumbnailHeight: number | null = null;

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

    public thumbnailWidth(value: number | null) {
        this.mThumbnailWidth = value;
        return this;
    }

    public thumbnailHeight(value: number | null) {
        this.mThumbnailHeight = value;
        return this;
    }

    public build() {
        return new Listing(
            this.mTitle,
            this.mName,
            this.mScore,
            this.mAuthor,
            this.mSubreddit,
            this.mThumbnail,
            this.mThumbnailWidth,
            this.mThumbnailHeight,
        );
    }
}
