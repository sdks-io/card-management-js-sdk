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
import {
  CardBlockSchedule,
  cardBlockScheduleSchema,
} from './cardBlockSchedule';

export interface Card {
  /** Account ID */
  accountId?: number | null;
  /** Account Name */
  accountName?: string | null;
  /** Account Number */
  accountNumber?: string | null;
  /** Account Short Name */
  accountShortName?: string | null;
  /**
   * Bundle Id associated with card in the Gateway.<br />
   *  This field will have null value if the card is not associated with any bundle in Gateway or the value of IncludeBundleDetails in request is false.
   */
  bundleId?: string | null;
  /**
   * List of Scheduled Card Blocks details<br />
   * Entity: CardBlockSchedule
   */
  cardBlockSchedules?: CardBlockSchedule[];
  /** Card group ID */
  cardGroupId?: number | null;
  /** Card group name */
  cardGroupName?: string | null;
  /** Unique Card Id */
  cardId?: number | null;
  /** ISO code of the card i.e. first 7 digits of the PAN */
  cardTypeCode?: string | null;
  /**
   * Card Type ID Example Id and Description: 1 -Philippines CRT 7077861 2-Philippines<br />
   * Fleet 7002861 5-SHELL FLEET-HONG KONG 7002821 6-SHELL NHF- HONG KONG 7002821 7-SHELL CRT- HONG KONG 7077821
   */
  cardTypeId?: number | null;
  /**
   * Card Type Name Example Id and Description: 1-Philippines CRT 7077861 2-Philippines <br />
   * Fleet 7002861 5-SHELL FLEET- HONG KONG 7002821 6-SHELL NHF- HONG KONG 7002821 7-SHELL  CRT- HONG KONG 7077821
   */
  cardTypeName?: string | null;
  /**
   * The 2 character ISO Code for the customer and card owning country. <br />
   * If default card type is not set then the first two alphabets of the account ID is returned.
   */
  colCoCountryCode?: string | null;
  /**
   * Card Creation datetime.<br />
   * Format: yyyyMMdd HH:mm:ss<br />
   * Note: Clients to convert this to appropriate DateTime type.
   */
  creationDate?: string | null;
  /** Driver name */
  driverName?: string | null;
  /**
   * Effective date for the Card<br />
   * Format: yyyyMMdd<br />
   * Note: Clients to convert this to appropriate DateTime type.
   */
  effectiveDate?: string | null;
  /**
   * Expiry date of the card.<br />
   * Format: yyyyMMdd<br />
   * Note: Clients to convert this to appropriate DateTime type.
   */
  expiryDate?: string | null;
  /** True/False True if fleet id input is enabled, else false */
  fleetIdInput?: boolean;
  /** True/False True if it is a CRT type card, else false */
  isCRT?: boolean;
  /** True/False True if it is a Fleet type card, else false */
  isFleet?: boolean;
  /** True/False True if it is an international card, else false */
  isInternational?: boolean;
  /** True/False True if it is a national card, else false */
  isNational?: boolean;
  /** True/False True if it is allowed at all partner sites, else false */
  isPartnerSitesIncluded?: boolean;
  /** True/False True if it is only allowed at Shell sites, else false */
  isShellSitesOnly?: boolean;
  /**
   * Issue date<br />
   * Format: yyyyMMdd<br />
   * Note: Clients to convert this to appropriate DateTime type.
   */
  issueDate?: string | null;
  /** True/False True if a new card is issued with the same PAN, else false. */
  isSuperseded?: boolean;
  /** True/False True if it is a virtual card, else false */
  isVirtualCard?: boolean;
  /**
   * Card last modified date and time<br />
   * Format: yyyyMMdd HH:mm:ss<br />
   * Note: Clients to convert this to appropriate DateTime type.
   */
  lastModifiedDate?: string | null;
  /**
   * Card last used date .<br />
   * Note: last used date of a card will be calculated based on billed/unbilled sales items
   *       of a given card.The query that extracts the last used dates will be applied on the
   *       subset of the cards being returned to the client.Unbilled sales items is checked
   *       first and for those not found in the unbilled table, sales items will be checked
   *       (only when the last used date is not found in unbilled table for at least a single
   *       card from the result). The transactions in last 48 hours are not expected to be
   * Therefore this field gives the correct information up to 48 hours early.<br />
   * Format: yyyyMMdd HH:mm:ss<br />
   * Note: Clients to convert this to appropriate DateTime type
   */
  lastUsedDate?: string | null;
  /** ISO code of the local currency. <br /> */
  localCurrencyCode?: string | null;
  /** Local currency symbol. <br /> */
  localCurrencySymbol?: string | null;
  /** True/False True if odometer input is enabled on the card, else false */
  odometerInput?: boolean;
  /** Card PAN Mask PAN (Mask all digits except the Last 6 digits of the PAN) */
  pAN?: string | null;
  /** Purchase category code */
  purchaseCategoryCode?: string | null;
  /**
   * Purchase category Id <br />
   * Note: Not Purchase code.
   */
  purchaseCategoryId?: number | null;
  /** Purchase category name */
  purchaseCategoryName?: string | null;
  /** Card Status reason Example: Lost Stolen Card no longer required */
  reason?: string | null;
  /**
   * Reissue setting of the card. If the card is superseded (i.e. a replacement/new card is issued) then reissue setting of the latest card issued. <br />
   * Values<br />
   * •True –Card will be Reissued when nearing its expiry date <br />
   * •False –Card will not be Reissued
   */
  reissueSetting?: string | null;
  /**
   * Status Description (Active, Temporarily Blocked, etc.,)<br />
   * Possible Ids and description: 1 Active 7 Blocked Card 8 Expired 9 Cancelled 10 New 23 Pending Renewal 31 Replaced 41<br />
   * Temporary Block(Customer) 42 Temporary Block(Shell) 43 Fraud 101 Active(Block in progress)<br />
   * * 102 Blocked Card(Unblock in progress) <br />
   * * 103 Active(Cancel in progress) <br />
   * * 104 Active(Marked as damaged)<br />
   * * 105 New(Cancel in progress) <br />
   * * 106 { Status}(Scheduled for block)<br />
   * * 107 { Status}(Scheduled for unblock) <br />
   * *# Note: Items marked with* are intermediate statuses  to indicate that there are pending requests in progress.<br />
   * The response can contain these intermediate statuses only if the<br />
   * IncludeIntermediateStatus flag is true. The placeholder { Status} in the items<br />
   * marked with # will be replaced with the  status description. E.g., Active (Scheduled for block)
   */
  statusDescription?: string | null;
  /**
   * Card Status id Possible Ids and description: 1 Active 7 Blocked Card 8 Expired 9 Cancelled 10 New 23 Pending Renewal 31 Replaced 41 Temporary Block(Customer) 42 <br />
   * Temporary Block(Shell) 43 Fraud 101 Active(Block in progress) <br />
   * * 102 Blocked Card(Unblock in progress)<br />
   * * 103 Active(Cancel in progress) <br />
   * * 104 Active(Marked as damaged) <br />
   * * 105 New(Cancel in progress)<br />
   * * 106 { Status}(Scheduled for block) <br />
   * # 107 {Status}(Scheduled for unblock)<br />
   * *# Note: Items marked with* are intermediate statuses to indicate that there are pending requests in progress.<br />
   * The response can contain these intermediate statuses only if the IncludeIntermediateStatus flag is true.<br />
   * The placeholder { Status} in the items marked with # will be replaced with<br />
   * the status description. E.g., Active (Scheduled for block)
   */
  statusId?: number | null;
  /** Token Type ID configured for the Card E.g. 107 */
  tokenTypeID?: number | null;
  /** Token Type Name configured for the Card */
  tokenTypeName?: string;
  /** Vehicle registration number */
  vRN?: string | null;
  /** Customer reference number of the card. */
  clientReferenceId?: string | null;
  /** Is Europay, MasterCard, and Visa Contact enabled or not. */
  isEMVContact?: boolean;
  /** Is Europay, MasterCard, and Visa Contactless enabled or not. */
  isEMVContactless?: boolean;
  /** Whether the card type is enabled for RFID (Radio Frequency Identification) */
  isRFID?: boolean;
  /** RFIDUID */
  rFIDUID?: string | null;
  /** EMAID */
  eMAID?: string | null;
  /** EV Printed Number */
  eVPrintedNumber?: string | null;
  /** Card Media Code. */
  cardMediaCode?: string | null;
}

export const cardSchema: Schema<Card> = object({
  accountId: ['AccountId', optional(nullable(number()))],
  accountName: ['AccountName', optional(nullable(string()))],
  accountNumber: ['AccountNumber', optional(nullable(string()))],
  accountShortName: ['AccountShortName', optional(nullable(string()))],
  bundleId: ['BundleId', optional(nullable(string()))],
  cardBlockSchedules: [
    'CardBlockSchedules',
    optional(array(lazy(() => cardBlockScheduleSchema))),
  ],
  cardGroupId: ['CardGroupId', optional(nullable(number()))],
  cardGroupName: ['CardGroupName', optional(nullable(string()))],
  cardId: ['CardId', optional(nullable(number()))],
  cardTypeCode: ['CardTypeCode', optional(nullable(string()))],
  cardTypeId: ['CardTypeId', optional(nullable(number()))],
  cardTypeName: ['CardTypeName', optional(nullable(string()))],
  colCoCountryCode: ['ColCoCountryCode', optional(nullable(string()))],
  creationDate: ['CreationDate', optional(nullable(string()))],
  driverName: ['DriverName', optional(nullable(string()))],
  effectiveDate: ['EffectiveDate', optional(nullable(string()))],
  expiryDate: ['ExpiryDate', optional(nullable(string()))],
  fleetIdInput: ['FleetIdInput', optional(boolean())],
  isCRT: ['IsCRT', optional(boolean())],
  isFleet: ['IsFleet', optional(boolean())],
  isInternational: ['IsInternational', optional(boolean())],
  isNational: ['IsNational', optional(boolean())],
  isPartnerSitesIncluded: ['IsPartnerSitesIncluded', optional(boolean())],
  isShellSitesOnly: ['IsShellSitesOnly', optional(boolean())],
  issueDate: ['IssueDate', optional(nullable(string()))],
  isSuperseded: ['IsSuperseded', optional(boolean())],
  isVirtualCard: ['IsVirtualCard', optional(boolean())],
  lastModifiedDate: ['LastModifiedDate', optional(nullable(string()))],
  lastUsedDate: ['LastUsedDate', optional(nullable(string()))],
  localCurrencyCode: ['LocalCurrencyCode', optional(nullable(string()))],
  localCurrencySymbol: ['LocalCurrencySymbol', optional(nullable(string()))],
  odometerInput: ['OdometerInput', optional(boolean())],
  pAN: ['PAN', optional(nullable(string()))],
  purchaseCategoryCode: ['PurchaseCategoryCode', optional(nullable(string()))],
  purchaseCategoryId: ['PurchaseCategoryId', optional(nullable(number()))],
  purchaseCategoryName: ['PurchaseCategoryName', optional(nullable(string()))],
  reason: ['Reason', optional(nullable(string()))],
  reissueSetting: ['ReissueSetting', optional(nullable(string()))],
  statusDescription: ['StatusDescription', optional(nullable(string()))],
  statusId: ['StatusId', optional(nullable(number()))],
  tokenTypeID: ['TokenTypeID', optional(nullable(number()))],
  tokenTypeName: ['TokenTypeName', optional(string())],
  vRN: ['VRN', optional(nullable(string()))],
  clientReferenceId: ['ClientReferenceId', optional(nullable(string()))],
  isEMVContact: ['IsEMVContact', optional(boolean())],
  isEMVContactless: ['IsEMVContactless', optional(boolean())],
  isRFID: ['IsRFID', optional(boolean())],
  rFIDUID: ['RFIDUID', optional(nullable(string()))],
  eMAID: ['EMAID', optional(nullable(string()))],
  eVPrintedNumber: ['EVPrintedNumber', optional(nullable(string()))],
  cardMediaCode: ['CardMediaCode', optional(nullable(string()))],
});
