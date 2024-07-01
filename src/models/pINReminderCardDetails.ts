/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { PINDeliverTo, pINDeliverToSchema } from './pINDeliverTo';

/** Request entity object for PINReminderCardDetails */
export interface PINReminderCardDetails {
  /**
   * Card Id
   * Optional if Either PANID AND CardExpiryDate or PAN AND CardExpiryDate is passed, else Mandatory. Example: 275549 .<br/>Note:PANID, PAN & ExpiryDate parameters will be ignored if CardId is provided.
   */
  cardId?: number;
  /**
   * PAN ID - Unique PAN ID
   * Optional if Either CardId or PAN AND  ExpiryDate is passed, else Mandatory. Example: 123456. <br/>Note:PANID parameter will be considered only if CardId is not provided
   */
  pANID?: number;
  /**
   * PAN of the card.
   * Optional if Either CardId or PANID is passed, else Mandatory. <br/>Note:PAN & ExpiryDate parameters will be considered only if CardId & PANID are not provided
   */
  pAN?: string;
  /**
   * Expiry date of the card.
   * Mandatory if Either PAN or PANID is passed, else optional.
   * Format: yyyyMMdd
   */
  cardExpiryDate?: string | null;
  /**
   * PIN delivery method.
   * Mandatory
   * Allowed Values:
   *    1.	Paper
   *    2.	Email
   *    3.	SMS
   */
  pINAdviceType: number;
  /**
   * PIN Contact Type.
   * Mandatory
   * Allowed Values:
   * 1.	Use PIN Delivery contact details stored previously for this card
   * 2.	Use Card Delivery contact details stored previously for this card
   * 3.	Use default PIN Delivery contact details stored for this customer
   * 4.	Use new specific contact for PIN Reminder only
   * Note: - PINContactType “3” is only allowed for Paper delivery
   */
  pINContactType?: number;
  pINDeliverTo?: PINDeliverTo;
}

export const pINReminderCardDetailsSchema: Schema<PINReminderCardDetails> = object(
  {
    cardId: ['CardId', optional(number())],
    pANID: ['PANID', optional(number())],
    pAN: ['PAN', optional(string())],
    cardExpiryDate: ['CardExpiryDate', optional(nullable(string()))],
    pINAdviceType: ['PINAdviceType', number()],
    pINContactType: ['PINContactType', optional(number())],
    pINDeliverTo: ['PINDeliverTo', optional(lazy(() => pINDeliverToSchema))],
  }
);
