import {IResponseItem} from './response-item.model';

export interface ISearchResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo?: IPageInfo;
  items: IResponseItem[];
}

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
