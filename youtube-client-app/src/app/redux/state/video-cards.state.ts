import { ICustomItem } from '@core/models/custom-item.model';
import { IResponseItem } from '@core/models/response-item.model';

export interface IVideoCardsState {
  cards: (IResponseItem | ICustomItem)[];
}

export const initialVideoCardsState: IVideoCardsState = {
  cards: []
};
