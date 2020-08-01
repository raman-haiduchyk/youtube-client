export interface IResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistic: IStatistic;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

interface IStatistic {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface IThumbnails {
  default: IThumbnail;
  medium: IThumbnail;
  high: IThumbnail;
  standart: IThumbnail;
  maxres: IThumbnail;
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
