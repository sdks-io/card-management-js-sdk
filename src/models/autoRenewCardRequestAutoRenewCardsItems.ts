/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface AutoRenewCardRequestAutoRenewCardsItems {
  /**
   * Account Number of the customer.
   * Optional if AccountId is passed, else Mandatory.
   */
  accountNumber?: string;
  /**
   * Account Id of the customer.
   * Optional if AccountNumber is passed, else Mandatory.
   */
  accountId?: number;
  /**
   * PAN of the card.
   * Optional if CardId is passed, else Mandatory.
   */
  pAN?: string;
  /**
   * Card Id of the card.
   * Optional if PAN is passed, else Mandatory.
   */
  cardId?: number;
  /**
   * Reissue setting of the card.
   * Values:
   * True – Card will be Reissued when nearing its expiry date
   * False – Card will not be Reissued
   * Mandatory
   */
  reissueSetting: boolean;
}

export const autoRenewCardRequestAutoRenewCardsItemsSchema: Schema<AutoRenewCardRequestAutoRenewCardsItems> = object(
  {
    accountNumber: ['AccountNumber', optional(string())],
    accountId: ['AccountId', optional(number())],
    pAN: ['PAN', optional(string())],
    cardId: ['CardId', optional(number())],
    reissueSetting: ['ReissueSetting', boolean()],
  }
);
