/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface CreateCardGroupResponseSuccessfulRequestsItems {
  /** Card Id of the card. */
  cardId?: number;
  /** PAN of the card. */
  pAN?: string;
  /** Reference number for tracking of update status request of the specific card, */
  reference?: number;
}

export const createCardGroupResponseSuccessfulRequestsItemsSchema: Schema<CreateCardGroupResponseSuccessfulRequestsItems> = object(
  {
    cardId: ['CardId', optional(number())],
    pAN: ['PAN', optional(string())],
    reference: ['Reference', optional(number())],
  }
);
