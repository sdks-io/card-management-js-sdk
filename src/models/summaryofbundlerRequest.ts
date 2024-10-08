/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface SummaryofbundlerRequest {
  /**
   * Collecting Company Id of the selected payer.
   * Optional if ColCoCode is passed else Mandatory.
   * Example:
   * 1 for Philippines
   * 5 for UK
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
   * Payer Id  of the selected payer.
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
   * Account Id of the customer.
   * Optional if Account Number is passed else Mandatory
   * Example: 123456
   */
  accountId?: number | null;
  /**
   * Account Number of the customer.
   * Optional if Account Id is passed else Mandatory
   * Example: GB000000123
   */
  accountNumber?: string | null;
  /**
   * List of Bundle Id associated with account
   * Optional.
   * When not present all the bundles in the given account will be returned in the response.
   */
  bundleId?: string[];
}

export const summaryofbundlerRequestSchema: Schema<SummaryofbundlerRequest> = object(
  {
    colCoId: ['ColCoId', optional(nullable(number()))],
    colCoCode: ['ColCoCode', optional(nullable(number()))],
    payerId: ['PayerId', optional(nullable(number()))],
    payerNumber: ['PayerNumber', optional(nullable(string()))],
    accountId: ['AccountId', optional(nullable(number()))],
    accountNumber: ['AccountNumber', optional(nullable(string()))],
    bundleId: ['BundleId', optional(array(string()))],
  }
);
