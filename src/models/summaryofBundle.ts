/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema, string } from '../schema';

export interface SummaryofBundle {
  /**
   * Collecting Company Id of the selected payer.
   * Optional if ColCoCode is passed else Mandatory.
   * Example:
   * 1 for Philippines
   */
  colCoId?: number;
  /**
   * Collecting Company Code (Shell Code) of the selected payer.
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   * Example:
   * 86 for Philippines
   * 5 for UK
   */
  colCoCode?: number;
  /**
   * Payer Number of the selected payer.
   * Either PayerId or PayerNumber or both must be passed.
   * Example: GB000000123
   */
  payerNumber?: string;
  /**
   * Payer Id of the selected payer.
   * Either PayerId or PayerNumber or both must be passed.
   * Example: 123456
   */
  payerId?: number;
  /**
   * Account ID of the customer.
   * Either AccountId or AccountNumber or both must be passed.
   * Example: 123456
   */
  accountId?: number;
  /**
   * Account Number of the customer.
   * Either AccountId or AccountNumber or both must be passed.
   * Example: GB000000123
   */
  accountNumber?: string;
  /**
   * Identifier of the card bundle in Gateway.
   * Mandatory
   */
  bundleId: string[];
}

export const summaryofBundleSchema: Schema<SummaryofBundle> = object({
  colCoId: ['ColCoId', optional(number())],
  colCoCode: ['ColCoCode', optional(number())],
  payerNumber: ['PayerNumber', optional(string())],
  payerId: ['PayerId', optional(number())],
  accountId: ['AccountId', optional(number())],
  accountNumber: ['AccountNumber', optional(string())],
  bundleId: ['BundleId', array(string())],
});
