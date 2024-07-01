/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  BundleRestrictionUpdate,
  bundleRestrictionUpdateSchema,
} from './bundleRestrictionUpdate';

export interface UpdateBundleRequest {
  /**
   * Collecting Company Id  of the selected payer.
   * Optional if ColCoCode is passed else Mandatory.
   * Example:
   * 1 for Philippines
   * 5 for UK
   */
  colCoId?: number | null;
  /**
   * Collecting Company Code  of the selected payer.
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
  payerId?: string | null;
  /**
   * Payer Number of the selected payer.
   * Either PayerId or PayerNumber or both must be passed.
   * Example: GB000000123
   */
  payerNumber?: string | null;
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
   * Identifier of the bundle in Gateway.
   * Mandatory
   */
  bundleId: string | null;
  /**
   * The value indicates the action to be performed with the request.
   * Mandatory
   * Allowed values:
   * •	Add
   * •	Update
   * •	Remove
   */
  requestAction: string | null;
  /**
   * List of Card PANs to be added in the bundle.
   * Mandatory for Add / Remove request action. Ignored for Update action.
   * Example: 7002051006629890645
   * When PAN matches with multiple cards, the restriction will be applied on the latest issued card.
   */
  cards: string[];
  /**
   * The value indicates what actions to be performed with respect to usage restrictions on the list of cards being added or removed.
   * Mandatory for Add / Remove request action. Ignored for Update action.
   * Allowed values:
   * •	Update
   * •	None
   */
  usageRestrictionAction: string | null;
  restrictions?: BundleRestrictionUpdate;
}

export const updateBundleRequestSchema: Schema<UpdateBundleRequest> = object({
  colCoId: ['ColCoId', optional(nullable(number()))],
  colCoCode: ['ColCoCode', optional(nullable(number()))],
  payerId: ['PayerId', optional(nullable(string()))],
  payerNumber: ['PayerNumber', optional(nullable(string()))],
  accountId: ['AccountId', optional(nullable(number()))],
  accountNumber: ['AccountNumber', optional(nullable(string()))],
  bundleId: ['BundleId', nullable(string())],
  requestAction: ['RequestAction', nullable(string())],
  cards: ['Cards', array(string())],
  usageRestrictionAction: ['UsageRestrictionAction', nullable(string())],
  restrictions: [
    'Restrictions',
    optional(lazy(() => bundleRestrictionUpdateSchema)),
  ],
});
