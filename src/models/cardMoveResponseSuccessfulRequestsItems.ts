/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface CardMoveResponseSuccessfulRequestsItems {
  accountNumber?: string | null;
  accountId?: number | null;
  pAN?: string | null;
  cardId?: number | null;
  moveCardReference?: number | null;
}

export const cardMoveResponseSuccessfulRequestsItemsSchema: Schema<CardMoveResponseSuccessfulRequestsItems> = object(
  {
    accountNumber: ['AccountNumber', optional(nullable(string()))],
    accountId: ['AccountId', optional(nullable(number()))],
    pAN: ['PAN', optional(nullable(string()))],
    cardId: ['CardId', optional(nullable(number()))],
    moveCardReference: ['MoveCardReference', optional(nullable(number()))],
  }
);