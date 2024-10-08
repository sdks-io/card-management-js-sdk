/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface SearchCardRestriction {
  /**
   * Unique Card Id
   * Optional if PAN is given, else mandatory.
   */
  cardId?: number | null;
  /**
   * Card PAN.
   * Optional if CardId is given, else mandatory.
   * Note: PAN is ignored if CardId is given.
   * Example: 7002051006629890645
   */
  pAN?: string | null;
}

export const searchCardRestrictionSchema: Schema<SearchCardRestriction> = object(
  {
    cardId: ['CardId', optional(nullable(number()))],
    pAN: ['PAN', optional(nullable(string()))],
  }
);
