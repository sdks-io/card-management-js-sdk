/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CreateCardGroupRequestCardsItems,
  createCardGroupRequestCardsItemsSchema,
} from './createCardGroupRequestCardsItems';

export interface CreateCardGroupRequest {
  /**
   * Collecting Company Code (Shell Code) of the selected payer.
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   * Example:
   * 86-Philippines
   * 5-UK
   */
  colCoCode?: number;
  /**
   * Collecting Company Id  of the selected payer.
   * Optional if ColCoCode is passed else Mandatory.
   * Example:
   * 1-Philippines
   * 5-UK
   */
  colCoId?: number;
  /**
   * Payer Number of the selected payer.
   * Optional if PayerId is passed else Mandatory
   */
  payerNumber?: string;
  /**
   * Payer Id (i.e., Customer Id of the Payment Customer in H3 Cards Platform) of the selected payer.
   * Optional if PayerNumber is passed else Mandatory
   */
  payerId?: number;
  /**
   * Account ID of the customer.
   * Optional if AccountNumber is passed else Mandatory.
   */
  accountId?: number;
  /**
   * Account Number of the customer.
   * Optional if AccountId is passed else Mandatory.
   */
  accountNumber?: string;
  /** Whether card group name to be embossed on the cards or not. */
  printOnCard?: boolean;
  cardGroupName?: string | null;
  /**
   * List of cards to be moved to the new card group. This list is optional – no card will be moved to the new card group when the list is empty.
   * The fields of Card entity are described in the below rows.
   * The maximum number of cards allowed to be moved in a request is 500 (configurable). The whole request including the card group creation will be rejected when the limit is exceeded.
   */
  cards?: CreateCardGroupRequestCardsItems[];
}

export const createCardGroupRequestSchema: Schema<CreateCardGroupRequest> = object(
  {
    colCoCode: ['ColCoCode', optional(number())],
    colCoId: ['ColCoId', optional(number())],
    payerNumber: ['PayerNumber', optional(string())],
    payerId: ['PayerId', optional(number())],
    accountId: ['AccountId', optional(number())],
    accountNumber: ['AccountNumber', optional(string())],
    printOnCard: ['PrintOnCard', optional(boolean())],
    cardGroupName: ['CardGroupName', optional(nullable(string()))],
    cards: [
      'Cards',
      optional(array(lazy(() => createCardGroupRequestCardsItemsSchema))),
    ],
  }
);
