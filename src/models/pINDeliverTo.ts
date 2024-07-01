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

export interface PINDeliverTo {
  /**
   * Contact Name
   * Max Length: 50
   */
  contactName?: string | null;
  /**
   * Contact Title
   * Max Length: 50
   */
  contactTitle?: string | null;
  /**
   * Company Name for PIN delivery.
   * Max Length: 50
   */
  companyName: string;
  /**
   * Address Lines
   * Max Length: 1024
   */
  addressLine: string;
  /**
   * Zip Code
   * Max Length: 10
   */
  zipCode: string | null;
  /**
   * City
   * Max Length: 40
   */
  city: string;
  /** Region */
  regionID?: number | null;
  /** Country */
  countryID?: number | null;
  /** Cardholder phone number for PIN delivery. */
  phoneNumber?: string | null;
  /**
   * Cardholder email address for PIN delivery
   * Max Length : 90
   * Example: xxxxxx@example.com <br/>Note:Based on the international standard that there can be Max Length 64 before the @ (the 'Local part’) =64(minimum of 1) Max Lenth after the (the domain) = 88 (Minimum of 2)
   */
  emailAddress?: string | null;
  /**
   * Save PIN Reminder
   * If SavePINReminder is true, the contact address will be saved database for PIN reminder.
   *  <br/>Only allowed for PIN Advice paper delivery.
   */
  savePINReminder?: boolean;
}

export const pINDeliverToSchema: Schema<PINDeliverTo> = object({
  contactName: ['ContactName', optional(nullable(string()))],
  contactTitle: ['ContactTitle', optional(nullable(string()))],
  companyName: ['CompanyName', string()],
  addressLine: ['AddressLine', string()],
  zipCode: ['ZipCode', nullable(string())],
  city: ['City', string()],
  regionID: ['RegionID', optional(nullable(number()))],
  countryID: ['CountryID', optional(nullable(number()))],
  phoneNumber: ['PhoneNumber', optional(nullable(string()))],
  emailAddress: ['EmailAddress', optional(nullable(string()))],
  savePINReminder: ['SavePINReminder', optional(boolean())],
});
