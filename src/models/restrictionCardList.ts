/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface RestrictionCardList {
  /** Unique Card Id */
  cardId?: number;
  /** Card PAN */
  pAN?: string;
  /**
   * Expiry date of the card
   * Format: yyyyMMdd
   * Note: Clients to convert this to appropriate DateTime type.
   */
  expiryDate?: string;
  /** Card Status id */
  statusId?: number;
  /** Status Description (Active, Temporarily Blocked, etc.,) */
  statusDescription?: string;
  /**
   * Driver name
   * Example:  ANDREW GILBERRY
   */
  driverName?: string;
  /**
   * Vehicle registration number
   * Example: MV65YLH
   */
  vRN?: string;
  /**
   * Issue date
   * Format: yyyyMMdd
   * Note: Clients to convert this to appropriate DateTime type.
   */
  issueDate?: string;
  /** Issue Number */
  issueNumber?: number;
  /**
   * Account ID
   * Example: 29484
   */
  accountId?: number;
  /**
   * Account Number
   * Example: GB99215176
   */
  accountNumber?: string;
  /**
   * Account Name
   * Example: MATTHEW ALGIE & COMPANY LIMITED
   */
  accountName?: string;
  /** Account Short Name */
  accountShortName?: string;
  /**
   * ISO currency code of the Customer Currency
   * Example: GBP
   */
  currencyCode?: string;
  /**
   * ISO currency code of the country.
   * Example: GBP
   */
  colCoCurrencyCode?: string;
  /**
   * Currency symbol of the country.
   * Example: £, $
   */
  colCoCurrencySymbol?: string;
  /**
   * ISO currency code of the country.
   * Example: GBP
   */
  restrictionCurrencyCode?: string;
  /**
   * Currency symbol of the country.
   * Example: £, $
   */
  restrictionCurrencySymbol?: string;
  /**
   * Purchase category Id
   * Example: 123, 124, etc.,
   */
  purchaseCategoryId?: string;
  /**
   * Purchase category code
   * Example:
   * 0 - All Fuels (without VP) and Lubricants
   * 1 - FuelSave only
   * 2 - FuelSave and Lubricants
   * 3 - No Restrictions
   * 4 - VP and FuelSave
   * 5 - Diesel ONLY
   * 6 - Diesel and Lubricants
   * 7 - VP and Lubricants
   * 8 - VP and FuelSave and Lubricants
   */
  purchaseCategoryCode?: string;
  /**
   * Purchase category name
   * Example:
   * 0 - All Fuels (without VP) and Lubricants
   * 1 - FuelSave only
   * 2 - FuelSave and Lubricants
   * 3 - No Restrictions
   * 4 - VP and FuelSave
   * 5 - Diesel ONLY
   * 6 - Diesel and Lubricants
   * 7 - VP and Lubricants
   * 8 - VP and FuelSave and Lubricants
   */
  purchaseCategoryName?: string;
  /**
   * True/False
   * True if a new card is issued with the same PAN, else false
   */
  isSuperseded?: boolean;
  /**
   * True/False
   * True if it is a virtual card, else false
   */
  isVirtualCard?: boolean;
  /**
   * True/False
   * True if it is a national card, else false
   */
  isNational?: boolean;
  /**
   * True/False
   * True if it is an international card, else false
   */
  isInternational?: boolean;
  /**
   * True/False
   * True if it is a CRT type card, else false
   */
  isCRT?: boolean;
  /**
   * True/False
   * True if it is a Fleet type card, else false
   */
  isFleet?: boolean;
  /**
   * True/False
   * True if it is only allowed at Shell sites, else false
   */
  isShellSitesOnly?: boolean;
  /**
   * True/False
   * True if it is allowed at all partner sites, else false
   */
  isPartnerSitesIncluded?: boolean;
  /**
   * Card Type ID
   * Example Id & Description:
   * 1 - Philippines CRT 7077861
   * 2- Philippines Fleet 7002861
   * 5-SHELL FLEET- HONG KONG 7002821
   * 6-SHELL NHF- HONG KONG 7002821
   * 7-SHELL CRT- HONG KONG 7077821
   */
  cardTypeId?: number;
  /** ISO code of the card i.e. first 7 digits of the PAN */
  cardTypeCode?: string;
  /**
   * Card Type Name
   * Example Id & Description:
   * 1 - Philippines CRT 7077861
   * 2- Philippines Fleet 7002861
   * 5-SHELL FLEET- HONG KONG 7002821
   * 6-SHELL NHF- HONG KONG 7002821
   * 7-SHELL CRT- HONG KONG 7077821
   */
  cardTypeName?: string;
  /**
   * Bundle Id associated with card in the Gateway.
   * This field will have a null value if the card is not associated with any bundle of IncludeBundleDetails in request is false.
   * If the search is based on a bundle Id, the same will be returned.
   */
  bundleId?: string;
  /**
   * Id of the medium type identifier.
   * Example: 1,2,4
   * Full list below:
   * 1 - Fuel Card
   * 2 - Fuel Card with EV
   * 4 - Fuel Card and Key fob Card
   * 5 - Key fob
   * 6 - Virtual Card
   * 7 - NPII Token
   * 8 – Smartpay
   */
  mediumTypeID?: number;
  /**
   * Name of the medium type identifier.
   * Example: Fuel Card, Fuel Card with EV, Key fob
   * Full list below:
   * 1 - Fuel Card
   * 2 - Fuel Card with EV
   * 4 - Fuel Card and Key fob Card
   * 5 - Key fob
   * 6 - Virtual Card
   * 7 - NPII Token
   * 8 - Smartpay
   */
  mediumType?: string;
}

export const restrictionCardListSchema: Schema<RestrictionCardList> = object({
  cardId: ['CardId', optional(number())],
  pAN: ['PAN', optional(string())],
  expiryDate: ['ExpiryDate', optional(string())],
  statusId: ['StatusId', optional(number())],
  statusDescription: ['StatusDescription', optional(string())],
  driverName: ['DriverName', optional(string())],
  vRN: ['VRN', optional(string())],
  issueDate: ['IssueDate', optional(string())],
  issueNumber: ['IssueNumber', optional(number())],
  accountId: ['AccountId', optional(number())],
  accountNumber: ['AccountNumber', optional(string())],
  accountName: ['AccountName', optional(string())],
  accountShortName: ['AccountShortName', optional(string())],
  currencyCode: ['CurrencyCode', optional(string())],
  colCoCurrencyCode: ['ColCoCurrencyCode', optional(string())],
  colCoCurrencySymbol: ['ColCoCurrencySymbol', optional(string())],
  restrictionCurrencyCode: ['RestrictionCurrencyCode', optional(string())],
  restrictionCurrencySymbol: ['RestrictionCurrencySymbol', optional(string())],
  purchaseCategoryId: ['PurchaseCategoryId', optional(string())],
  purchaseCategoryCode: ['PurchaseCategoryCode', optional(string())],
  purchaseCategoryName: ['PurchaseCategoryName', optional(string())],
  isSuperseded: ['IsSuperseded', optional(boolean())],
  isVirtualCard: ['IsVirtualCard', optional(boolean())],
  isNational: ['IsNational', optional(boolean())],
  isInternational: ['IsInternational', optional(boolean())],
  isCRT: ['IsCRT', optional(boolean())],
  isFleet: ['IsFleet', optional(boolean())],
  isShellSitesOnly: ['IsShellSitesOnly', optional(boolean())],
  isPartnerSitesIncluded: ['IsPartnerSitesIncluded', optional(boolean())],
  cardTypeId: ['CardTypeId', optional(number())],
  cardTypeCode: ['CardTypeCode', optional(string())],
  cardTypeName: ['CardTypeName', optional(string())],
  bundleId: ['BundleId', optional(string())],
  mediumTypeID: ['MediumTypeID', optional(number())],
  mediumType: ['MediumType', optional(string())],
});
