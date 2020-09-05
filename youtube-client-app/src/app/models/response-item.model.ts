export interface IResponseItem {
  kind: string;
  etag: string;
  id: Id;
  snippet: ISnippet;
  statistics?: IStatistic;
}

interface Id {
  kind: string;
  videoId: string;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcastContent?: string;
  defaultLanguage?: string;
  publishTime?: string;
  localized?: ILocalized;
  defaultAudioLanguage?: string;
}

interface IStatistic {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface IThumbnails {
  default?: IThumbnail;
  medium?: IThumbnail;
  high?: IThumbnail;
  standard?: IThumbnail;
  maxres?: IThumbnail;
}

interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

interface ILocalized {
  title: string;
  description: string;
}
