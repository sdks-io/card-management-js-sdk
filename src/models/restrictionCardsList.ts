/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
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
  DayTimeRestriction,
  dayTimeRestrictionSchema,
} from './dayTimeRestriction';
import {
  LocationRestriction,
  locationRestrictionSchema,
} from './locationRestriction';
import {
  ProductRestrictionCard,
  productRestrictionCardSchema,
} from './productRestrictionCard';
import {
  UsageRestrictionsCard,
  usageRestrictionsCardSchema,
} from './usageRestrictionsCard';

export interface RestrictionCardsList {
  /**
   * Account ID of the customer.
   * Optional if AccountNumber is passed, else Mandatory.
   * This input is a search criterion, if given.
   * Example: 123456
   */
  accountId?: number | null;
  /** Unique Card Id */
  cardId?: number | null;
  /**
   * Card PAN.
   * Optional if CardId is given, else mandatory.
   * Example: 7002051006629890645
   * Note:
   * •	PAN is ignored if CardId is given.
   * When PAN matches with multiple cards, the restriction will be applied on the latest issued card.
   */
  pAN?: string | null;
  /**
   * True/False.
   * If true, the usage restrictions applied on the card in Gateway will be reset to Customer Card Type level max limits, if there are no customer level overrides available then OU card type max limits. Else, the card restrictions will be updated with the usage restrictions provided in the API.
   * This property is not dependent on IsVelocityCeiling or SetDefaultOnVelocityUpdate flags.
   */
  resetUsageRestrictions?: boolean;
  /**
   * True/False.
   * If true, the Day/Time restrictions applied on the card will be deleted. Else, the card restrictions will be updated with the day/time restrictions provided in the API.
   */
  resetDayTimeRestrictions?: boolean | null;
  /**
   * True/False.
   * If true, Default fuel/non-fuel sets configured at the purchase category level will be applied to the card. Else, the card will be applied with product restrictions provided in the API.
   */
  resetProductRestrictions?: boolean | null;
  /**
   * True/False.
   * If true, the location restrictions applied on the card will be deleted. Else, the card restrictions will be updated with the location restrictions provided in the API.
   */
  resetLocationRestrictions?: boolean | null;
  usageRestrictions?: UsageRestrictionsCard | null;
  /** Details of the day/time restrictions such as weekdays and time range in which transactions should be allowed on the card. */
  dayTimeRestrictions?: DayTimeRestriction;
  productRestrictions?: ProductRestrictionCard | null;
  locationRestrictions?: LocationRestriction;
}

export const restrictionCardsListSchema: Schema<RestrictionCardsList> = object({
  accountId: ['AccountId', optional(nullable(number()))],
  cardId: ['CardId', optional(nullable(number()))],
  pAN: ['PAN', optional(nullable(string()))],
  resetUsageRestrictions: ['ResetUsageRestrictions', optional(boolean())],
  resetDayTimeRestrictions: [
    'ResetDayTimeRestrictions',
    optional(nullable(boolean())),
  ],
  resetProductRestrictions: [
    'ResetProductRestrictions',
    optional(nullable(boolean())),
  ],
  resetLocationRestrictions: [
    'ResetLocationRestrictions',
    optional(nullable(boolean())),
  ],
  usageRestrictions: [
    'UsageRestrictions',
    optional(nullable(lazy(() => usageRestrictionsCardSchema))),
  ],
  dayTimeRestrictions: [
    'DayTimeRestrictions',
    optional(lazy(() => dayTimeRestrictionSchema)),
  ],
  productRestrictions: [
    'ProductRestrictions',
    optional(nullable(lazy(() => productRestrictionCardSchema))),
  ],
  locationRestrictions: [
    'LocationRestrictions',
    optional(lazy(() => locationRestrictionSchema)),
  ],
});
