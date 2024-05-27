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
import { Accounts, accountsSchema } from './accounts';
import {
  RestrictionSearchCardRequestFiltersCardsItems,
  restrictionSearchCardRequestFiltersCardsItemsSchema,
} from './restrictionSearchCardRequestFiltersCardsItems';

export interface RestrictionSearchCardRequestFilters {
  /**
   * Collecting Company Code (Shell Code) of the selected payer.
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   * Example:
   * 86 for Philippines
   * 5 for UK
   */
  colCoCode?: number;
  /**
   * Collecting Company Id (in GFN) of the selected payer.
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
   */
  payerNumber?: string;
  /**
   * Payer Id  of the selected payer.
   * Optional if PayerNumber is passed else Mandatory
   * Example: 123456
   */
  payerId?: number;
  accounts?: Accounts;
  /**
   * Identifier of the Card bundle in Gateway.
   * Optional if cards list is given, else mandatory.
   */
  bundleId?: string | null;
  cards?: RestrictionSearchCardRequestFiltersCardsItems[];
  /** Whether to include location restriction of the cards in the response */
  includeLocationRestrictions?: boolean;
  /** When True: service will return the inherited values for the usage limits (from card-program or account as available) when it is not overridden on the card. */
  includeInheritedLimits?: boolean;
  /**
   * When the value is True, API will return bundle Id associated with cards in the response, if available.
   * Note: Use ‘Null’ or ‘False’ for optimum performance. A delay in response is expected when set to ‘True’.
   */
  includeBundleDetails?: boolean;
}

export const restrictionSearchCardRequestFiltersSchema: Schema<RestrictionSearchCardRequestFilters> = object(
  {
    colCoCode: ['ColCoCode', optional(number())],
    colCoId: ['ColCoId', optional(number())],
    payerNumber: ['PayerNumber', optional(string())],
    payerId: ['PayerId', optional(number())],
    accounts: ['Accounts', optional(lazy(() => accountsSchema))],
    bundleId: ['BundleId', optional(nullable(string()))],
    cards: [
      'Cards',
      optional(
        array(lazy(() => restrictionSearchCardRequestFiltersCardsItemsSchema))
      ),
    ],
    includeLocationRestrictions: [
      'IncludeLocationRestrictions',
      optional(boolean()),
    ],
    includeInheritedLimits: ['IncludeInheritedLimits', optional(boolean())],
    includeBundleDetails: ['IncludeBundleDetails', optional(boolean())],
  }
);
