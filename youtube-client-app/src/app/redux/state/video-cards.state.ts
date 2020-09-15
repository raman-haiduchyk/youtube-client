import { ICustomItem } from 'src/app/models/custom-item.model';
import { IResponseItem } from '../../models/response-item.model';
import { } from '../../models/search-response.model';

export interface IVideoCardsState {
  cards: (IResponseItem | ICustomItem)[];
}

export const initialVideoCardsState: IVideoCardsState = {
  cards: []
};
