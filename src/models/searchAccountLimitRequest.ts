/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface SearchAccountLimitRequest {
  /**
   * Collecting Company Id of the selected payer.
   * Optional if ColCoCode is passed else Mandatory.
   * Example:
   */
  colCoId?: number | null;
  /**
   * Collecting Company Code (Shell Code) of the selected payer.
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   * Example:
   * 86 for Philippines
   * 5 for UK
   */
  colCoCode?: number | null;
  /**
   * Payer Id of the selected payer.
   * Optional if PayerNumber is passed else Mandatory
   * Example: 123456
   */
  payerId?: number | null;
  /**
   * Payer Number of the selected payer.
   * Optional if PayerId is passed else Mandatory
   * Example: GB000000123
   */
  payerNumber?: string | null;
  /**
   * Account ID of the customer.
   * Optional if AccountNumber is passed else Mandatory
   * Example: 123456
   */
  accountId?: number | null;
  /**
   * Account Number of the customer.
   * Optional if AccountId is passed else Mandatory
   * Example: GB000000123
   */
  accountNumber?: string | null;
}

export const searchAccountLimitRequestSchema: Schema<SearchAccountLimitRequest> = object(
  {
    colCoId: ['ColCoId', optional(nullable(number()))],
    colCoCode: ['ColCoCode', optional(nullable(number()))],
    payerId: ['PayerId', optional(nullable(number()))],
    payerNumber: ['PayerNumber', optional(nullable(string()))],
    accountId: ['AccountId', optional(nullable(number()))],
    accountNumber: ['AccountNumber', optional(nullable(string()))],
  }
);
