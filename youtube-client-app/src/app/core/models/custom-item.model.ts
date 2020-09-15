export interface ICustomItem {
  snippet: ISnippet;
  statistics?: IStatistic;
}

interface ISnippet {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  videoSource?: string;
}

interface IThumbnails {
  high: IThumbnail;
}

interface IThumbnail {
  url: string;
}

interface IStatistic {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
