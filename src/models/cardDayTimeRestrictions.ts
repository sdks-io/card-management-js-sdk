/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, optional, Schema, string } from '../schema';

export interface CardDayTimeRestrictions {
  /**
   * Describes at which level the restriction is set at.
   * Possible values:
   * OU = Restriction set at ColCo card type
   * Customer = Restriction set at customer card type
   */
  level?: string | null;
  /** Whether the transaction is allowed on Mondays or not. */
  monday?: boolean;
  /** Whether the transaction is allowed on Tuesdays or not. */
  tuesday?: boolean;
  /** Whether the transaction is allowed on Wednesdays or not. */
  wednesday?: boolean;
  /** Whether the transaction is allowed on Thursdays or not. */
  thursday?: boolean;
  /** Whether the transaction is allowed on Fridays or not. */
  friday?: boolean;
  /** Whether the transaction is allowed on Saturdays or not. */
  saturday?: boolean;
  /** Whether the transaction is allowed on Sundays or not. */
  sunday?: boolean;
  /**
   * The time in the day from when the transaction is allowed.
   * Format: HH:mm: ss
   * E.g., 21:00:00
   * Note:
   * 1) The client application has to convert the value to the required date-time data type.
   * 2) The value will be 00:00:00 when no restriction set for this field.
   */
  timeFrom?: string | null;
  /**
   * allowed.
   * Format: HH:mm: ss
   * E.g., 21:00:00
   * Note:
   * 1) The client application has to convert the value to the required date-time data type.
   * 2) The value will be 00:00:00 when no restriction set for this field.
   */
  timeTo?: string | null;
}

export const cardDayTimeRestrictionsSchema: Schema<CardDayTimeRestrictions> = object(
  {
    level: ['Level', optional(nullable(string()))],
    monday: ['Monday', optional(boolean())],
    tuesday: ['Tuesday', optional(boolean())],
    wednesday: ['Wednesday', optional(boolean())],
    thursday: ['Thursday', optional(boolean())],
    friday: ['Friday', optional(boolean())],
    saturday: ['Saturday', optional(boolean())],
    sunday: ['Sunday', optional(boolean())],
    timeFrom: ['TimeFrom', optional(nullable(string()))],
    timeTo: ['TimeTo', optional(nullable(string()))],
  }
);
