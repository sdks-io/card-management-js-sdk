/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  RestrictionCardRequestCardsItems,
  restrictionCardRequestCardsItemsSchema,
} from './restrictionCardRequestCardsItems';

export interface RestrictionCardRequest {
  /**
   * Collecting Company Id of the selected payer.
   * Optional if ColCoCode is passed else Mandatory.
   * Example:
   * 1 for Philippines
   * 5 for UK
   */
  colCoId?: number;
  /**
   * Payer Number of the selected payer.
   * Optional if PayerId is passed else Mandatory
   * Example: GB000000123
   * List of restrictions to be applied on the card. The details of CardRestriction entity is given below.
   */
  payerNumber?: string;
  /**
   * Payer Id of the selected payer.
   * Optional if PayerNumber is passed else Mandatory
   * Example: 123456
   */
  payerId?: number;
  /** List of restrictions to be applied on the card. The details of CardRestriction entity is given below. */
  cards?: RestrictionCardRequestCardsItems[];
  /**
   * Collecting Company Code (Shell Code) of the selected payer.
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   * Example:
   * 86 for Philippines
   * 5 for UK
   */
  colCoCode?: number;
}

export const restrictionCardRequestSchema: Schema<RestrictionCardRequest> = object(
  {
    colCoId: ['ColCoId', optional(number())],
    payerNumber: ['PayerNumber', optional(string())],
    payerId: ['PayerId', optional(number())],
    cards: [
      'Cards',
      optional(array(lazy(() => restrictionCardRequestCardsItemsSchema))),
    ],
    colCoCode: ['ColCoCode', optional(number())],
  }
);