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
  unknown,
} from '../schema';

export interface CreateBundleRequest {
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
   * Payer Id of the selected payer.
   * Either PayerId or PayerNumber or both must be passed.
   * Example: 123456
   */
  payerId?: number | null;
  /**
   * Payer Number of the selected payer.
   * Either PayerId or PayerNumber or both must be passed.
   * Example: GB000000123
   */
  payerNumber?: string;
  /**
   * Account ID of the customer.
   * Either AccountId or AccountNumber or both must be passed.
   * Example: 123456
   */
  accountId?: number | null;
  /**
   * Account Number of the customer.
   * Either AccountId or AccountNumber or both must be passed.
   * Example: GB000000123
   */
  accountNumber?: string | null;
  /**
   * Identifier of the bundle in external system.
   * Optional.
   */
  externalBundleId?: string | null;
  /**
   * A bundle description.
   * Optional.
   */
  description?: string;
  /**
   * List of Card PANs to be added in the bundle.
   * Mandatory.
   * Example: 7002051006629890645
   * When PAN matches with multiple cards, the restriction will be applied on the latest issued card.
   */
  cards?: string[];
  restrictions?: unknown;
}

export const createBundleRequestSchema: Schema<CreateBundleRequest> = object({
  colCoId: ['ColCoId', optional(nullable(number()))],
  colCoCode: ['ColCoCode', optional(nullable(number()))],
  payerId: ['PayerId', optional(nullable(number()))],
  payerNumber: ['PayerNumber', optional(string())],
  accountId: ['AccountId', optional(nullable(number()))],
  accountNumber: ['AccountNumber', optional(nullable(string()))],
  externalBundleId: ['ExternalBundleId', optional(nullable(string()))],
  description: ['Description', optional(string())],
  cards: ['Cards', optional(array(string()))],
  restrictions: ['Restrictions', optional(unknown())],
});
