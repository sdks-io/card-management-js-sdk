/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface CardMoveResponseErrorCardsItems {
  accountNumber?: string | null;
  accountId?: number | null;
  pAN?: string | null;
  cardId?: number | null;
  validationErrorCode?: string | null;
  validationErrorDescription?: string | null;
}

export const cardMoveResponseErrorCardsItemsSchema: Schema<CardMoveResponseErrorCardsItems> = object(
  {
    accountNumber: ['AccountNumber', optional(nullable(string()))],
    accountId: ['AccountId', optional(nullable(number()))],
    pAN: ['PAN', optional(nullable(string()))],
    cardId: ['CardId', optional(nullable(number()))],
    validationErrorCode: ['ValidationErrorCode', optional(nullable(string()))],
    validationErrorDescription: [
      'ValidationErrorDescription',
      optional(nullable(string())),
    ],
  }
);
