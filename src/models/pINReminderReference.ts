/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

/** This class holds the PIN Reminder References */
export interface PINReminderReference {
  /** Card Id */
  cardId?: number | null;
  /** PAN ID */
  pANID?: number | null;
  /** PAN */
  pAN?: number | null;
  /**
   * Expiry date of the card.
   * Mandatory if Either PAN or PANID is passed, else optional.
   * Format: yyyyMMdd
   */
  cardExpiryDate?: string | null;
  /** Individual card pin reminder reference number for the Pin Reminder request. */
  referenceId?: number;
}

export const pINReminderReferenceSchema: Schema<PINReminderReference> = object({
  cardId: ['CardId', optional(nullable(number()))],
  pANID: ['PANID', optional(nullable(number()))],
  pAN: ['PAN', optional(nullable(number()))],
  cardExpiryDate: ['CardExpiryDate', optional(nullable(string()))],
  referenceId: ['ReferenceId', optional(number())],
});
