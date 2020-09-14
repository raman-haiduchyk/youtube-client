import { IResponseItem } from '../../models/response-item.model';
import { } from '../../models/search-response.model';

export interface IVideoCardsState {
  cards: IResponseItem[];
}

export const initialVideoCardsState: IVideoCardsState = {
  cards: []
};
