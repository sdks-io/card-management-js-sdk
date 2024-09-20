/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface ScheduleCardBlockCardsItems {
  /**
   * Collecting Company Code (Shell Code) of the selected payer.
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   * Example:
   * 86-Philippines
   * 5-UK
   */
  colCoCode?: number;
  /**
   * Collecting Company Id of the selected payer.
   * Optional if ColCoCode is passed else Mandatory.
   * Example:
   * 1-Philippines
   * 5-UK
   */
  colCoId?: number;
  /**
   * Account Id of the customer.
   * Optional if AccountNumber is passed, else Mandatory.
   */
  accountId?: number;
  /**
   * Account Number of the customer.
   * Optional if AccountId is passed, else Mandatory.
   */
  accountNumber?: string;
  /**
   * Payer id of the customer.
   * Optional if PayerNumber is passed, else Mandatory.
   * Example: 123456
   */
  payerId?: number;
  /**
   * PayerNumber of the customer.
   * Optional if PayerId is passed, else Mandatory.
   */
  payerNumber?: string;
  /**
   * Unique Id of the card.
   * Optional if PAN is passed, else Mandatory.
   */
  cardId?: number;
  /**
   * PAN of the card.
   * Optional if CardId is passed, else Mandatory.
   */
  pAN?: string;
  /**
   * Card PAN ID.
   * Optional if CardId is given, else mandatory.
   * Note: PANID is ignored if CardId is given.
   */
  pANID?: string;
  /**
   * Expiry date of the card.
   * Optional if CardId is passed, else Mandatory.
   * Format: yyyyMMdd
   * Example: 20170930
   */
  cardExpiryDate?: string;
  /**
   * Action
   * Mandatory
   * Possible values are:
   * •    AddOrUpdate – adds a new request or updates any existing requests, with overlapping dates, for the card
   * •    AddAndOverwriteAll - all the existing requests of the given card will be removed and a new request with the specified FromDate and ToDate will be added.
   * •    Delete – deletes any existing request with the same start date and end date for the card
   * •    DeleteAll – deletes all saved future dated requests (all block and unblock requests) of the card.
   */
  action: string;
  /**
   * Effective start date of Block / Unblock
   * Allowed Formats: –
   * •    yyyyMMdd
   * •    yyyyMMdd HH:mm
   * Eg: 20230512 14:30, 20230512
   * Optional
   * Default value:
   * •     If the card status is “Active” then Current date & Time
   * •    If the card status is “TemporaryBlock (Customer)” then null.
   * Note:
   * •    Time is considered only when “IsTimeSupported” is true else it will be treated as a date.
   * •    Time will be passed in UTC time-zone.
   * •    If the Card Status is “Temporary Block (Customer)” and FromDate is provided – The fromdate & time is considered as starting period of unblock request.
   */
  fromDate?: string;
  /**
   * Effective end date of Block / Unblock
   * Allowed Formats: –
   * •    yyyyMMdd
   * •    yyyyMMdd HH:mm
   * Eg: 20230512 14:30, 20230512
   * Optional – When the Card status is Active else mandatory.
   * When not provided, the card will remain blocked until manually unblocked.
   * Note:
   * •    Time is considered only when the “IsTimeSupported” flag is set as true, else it will be considered as only date.
   * •    Date & Time passed in the request will be considered in UTC time-zone.
   * •    If the card is currently in ‘Temporary Block (Customer)’ status, then this date is treated as the unblock date and is mandatory.
   * •    If the Card Status is “Temporary Block (Customer)” and FromDate & ToDate is provided - The request will be considered as a scheduled specific period unblock request.
   */
  toDate?: string;
  /**
   * The caller to be notified with the status of the scheduled card block / unblock request.
   * Mandatory, if NotifyCaller is true.
   * Maximum field length: 20
   */
  caller?: string | null;
  /**
   * True/False.
   * Optional.
   * Default: False
   * If true, the caller would be notified back with the status as success or failure after the scheduled card block / unblock request is processed.
   */
  notifyCaller?: boolean;
}

export const scheduleCardBlockCardsItemsSchema: Schema<ScheduleCardBlockCardsItems> = object(
  {
    colCoCode: ['ColCoCode', optional(number())],
    colCoId: ['ColCoId', optional(number())],
    accountId: ['AccountId', optional(number())],
    accountNumber: ['AccountNumber', optional(string())],
    payerId: ['PayerId', optional(number())],
    payerNumber: ['PayerNumber', optional(string())],
    cardId: ['CardId', optional(number())],
    pAN: ['PAN', optional(string())],
    pANID: ['PANID', optional(string())],
    cardExpiryDate: ['CardExpiryDate', optional(string())],
    action: ['Action', string()],
    fromDate: ['FromDate', optional(string())],
    toDate: ['ToDate', optional(string())],
    caller: ['Caller', optional(nullable(string()))],
    notifyCaller: ['NotifyCaller', optional(boolean())],
  }
);
