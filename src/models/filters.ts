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
import { SearchCard, searchCardSchema } from './searchCard';

export interface Filters {
  /** Account ID of the customer.<br/> Optional.<br/> This input is a search criterion, if given. */
  accountId?: number | null;
  /** Account Number of the customer.<br/> Optional.<br/> This input is a search criterion, if given. */
  accountNumber?: string | null;
  /**
   * Card group id. <br />
   * Optional.<br />
   * This input is a search criterion, if given.<br />
   * When -1 is passed, those cards that does not belong to any card group will be returned.
   */
  cardGroupId?: number | null;
  /**
   * Card group name.<br />
   * Optional.<br />
   * This input is a search criterion, if given.<br />
   * If CardGroupId is provided then this search criterion will be ignored, else, those cards that have the card group name completely matching with the entered value will be returned.
   */
  cardGroupName?: string | null;
  /**
   * Market segment to which card belongs to.<br />
   * Optional.<br />
   * Allowed values<br />
   * • CRT<br />
   * • Fleet
   */
  cardSegment?: string | null;
  /**
   * Status of the card.<br />
   * Mandatory.<br />
   * Multiple statuses are allowed to be included in the search criteria.<br />
   * CardStatus filter accepts either of the two values for each status as described below. However, the output field “StatusDescription” is aligned with second value highlighted in italics.<br />
   * Below are the possible allowed statuses: <br />
   * • ACTIVE or Active – Cards at status Active if the IncludeIntermediateStatus flag is true: Active (Block in progress), Active (Cancel in progress), Active (Marked as damaged)), New (Cancel in progress).<br />
   * • ON_ORDER or New – Cards at status New<br />
   * • EXPIRED or Expired – Cards at status Expired<br />
   * • BLOCKED or Blocked Card – Cards at status Block (The result will include all cards having the following intermediate status, if the IncludeIntermediateStatus flag is true: Blocked card (Unblock in progress))<br />
   * • TEMP_BLOCKED_CUSTOMER or Temporary Block(Customer) – Cards at status Temporary Blocked By Customer<br />
   * • TEMP_BLOCKED_SHELL or Temporary Block (Shell) – Cards at Status Temporary Blocked by Shell<br />
   * • CANCELLED or Cancelled – Cards at status Cancelled<br />
   * • PENDING_RENEWAL or Pending Renewal - Cards that are in renewal process<br />
   * • REPLACED or Replaced – Cards at Status Replaced<br />
   * • FRAUD or Fraud – Cards at Status FRAUD<br />
   * • ALL
   */
  cardStatus: string[];
  /**
   * ISO code of the card i.e. first 7 digits of the PAN<br />
   * Optional.
   */
  cardTypeCode?: string | null;
  /**
   * Collecting Company Code (Shell Code) of the selected payer. <br />
   * Optional If ColCo Id or ColCoCountryCode is passed else Mandatory<br />
   */
  colCoCode?: number | null;
  /**
   * The 2 character ISO Code for the customer and card owning country.<br />
   * Optional If ColCoId or ColCoCode is passed else Mandatory.<br />
   */
  colCoCountryCode?: string | null;
  /**
   * Collecting Company Id  of the selected payer. <br />
   * Optional If ColCoCode or ColCoCountryCode is passed else Mandatory <br />
   */
  colCoId?: number | null;
  /**
   * Cards allowed to used nationally/internationally.<br />
   * Optional.<br />
   * Allowed values<br />
   * -National<br />
   * -International
   */
  coverage?: string | null;
  /**
   * Card Creation Date<br />
   * Optional<br />
   * Format: yyyyMMdd
   */
  creationDate?: string | null;
  /**
   * Driver Name embossed on the card<br />
   * Optional<br />
   * Up to 10 driver names could be passed in the parameter.<br />
   * Minimum of 4 characters should be provided for each driver name else not considered.<br />
   * Those cards will be returned when part of the driver name matches with any of the string passed in the list.<br />
   * Max Length for each Driver name: 50
   */
  driverName?: string[];
  /**
   * Effective date for the Card<br />
   * Optional<br />
   * Format: yyyyMMdd<br />
   */
  effectiveDate?: string | null;
  /**
   * Bundle Id for the Card, which needs to be excluded in the response.<br />
   * Optional
   */
  excludeBundleId?: string | null;
  /**
   * Default value is True.<br />
   * When true, the API will not return cards that are at Cancelled Status in Cards Platform<br />
   */
  excludeCancelledCards?: boolean;
  /**
   * Optional<br />
   * When passed, the API will not return cards that are currently in the Card Group specified<br />
   */
  excludeCardGroupId?: number | null;
  /**
   * Optional<br />
   * When passed, the API will not return cards that are currently in the Card Group specified<br />
   */
  excludeCardGroupName?: string | null;
  /**
   * List of SearchCard entity i.e., Card Id or PAN, which needs to be excluded in the response. <br />
   * Details of the SerachCard entity are given below.<br />
   */
  excludeCards?: SearchCard[];
  /**
   * Default value is False.<br />
   * When true, the API will not return cards that are at Fraud Status in Cards Platform<br />
   */
  excludeFraudCards?: boolean;
  /**
   * Default value is True.<br />
   * When true, the API will not return cards that are at Pending Renewal Status in Cards Platform
   */
  excludePendingRenewalCards?: boolean;
  /**
   * Default value is False.<br />
   * When true, the API will not return cards that are at Replaced Status in Cards Platform<br />
   */
  excludeReplacedCards?: boolean;
  /**
   * Cards active and expiring in given number of days.<br />
   * Optional<br />
   * Note: When a value is passed in this parameter, only active cards will be considered while searching.<br />
   */
  expiringInDays?: number | null;
  /**
   * Month in which the card is expiring.<br />
   * Optional.<br />
   * Format: MMYYYY<br />
   */
  expiryMonth?: string | null;
  /**
   * Default value is False,<br />
   * When the value is True, API will return bundle Id associated with card in response.<br />
   */
  includeBundleDetails?: boolean;
  /**
   * List of SearchCard entity i.e., Card Id or PAN, which needs to be included in the response.<br />
   * Details of the SerachCard entity are given below.<br />
   */
  includeCards?: SearchCard[];
  /**
   * A flag which indicates if the response can contain intermediate statuses.<br />
   * Optional<br />
   * Default: false
   */
  includeIntermediateStatus?: boolean;
  /**
   * If provided, only list cards issued after the given date<br />
   * Optional<br />
   * Format: yyyyMMdd<br />
   * Note: Clients to convert this to appropriate DateTime type.
   */
  issuedAfter?: string | null;
  /**
   * Cards allowed to be used in site.<br />
   * Optional.<br />
   * Allowed values<br />
   * -ShellSitesOnly<br />
   * -PartnersSitesIncluded
   */
  network?: string | null;
  /**
   * Last digits of the PAN number<br />
   * Minimum 4 last digits of the card should be sent for this field to be considered as part of the search criteria.<br />
   * Optional<br />
   * Max Length: 50
   */
  pANEndsWith?: string | null;
  /**
   * Payer Id (i.e. Customer Id of the Payment Customer) of the selected payer.<br />
   * Optional if PayerNumber is passed else Mandatory<br />
   * Example: 123456
   */
  payerId?: number | null;
  /**
   * Payer Number of the selected payer.<br />
   * Optional if PayerId is passed else Mandatory<br />
   */
  payerNumber?: string | null;
  /**
   * Purchase category code of the card.<br />
   * Optional.
   */
  purchaseCategoryCode?: string | null;
  /**
   * Possible options are:<br />
   * 1.ExpiringDateAscending<br />
   * 2.ExpiringDateDescending<br />
   * 3.DriverNameAscending(If Driver Name is null then VRN value will be considered)<br />
   * 4.DriverNameDescending(If Driver Name is null then VRN value will be considered)<br />
   * 5.VRNAscending(If VRN is null then Driver Name value will be considered)<br />
   * 6.VRNDescending(If VRN  is null then Driver Name value will be considered)<br />
   * 7.LastUsedDateAscending<br />
   * 8.LastUsedDateDescending<br />
   * 9.IssueDateAscending<br />
   * 10.IssueDateDescending<br />
   * 11.PurchaseCategoryCodeAscending<br />
   * 12.PurchaseCategoryCodeDescending<br />
   * 13.CardSegmentAscending (CRT will appear first)<br />
   * 14.CardSegmentDescending (Fleet will appear first)<br />
   * Optional
   */
  sortOrder?: string | null;
  /**
   * A flag which indicates if the response can contain scheduled card blocks details<br />
   * Optional<br />
   * Default: false
   */
  includeScheduledCardBlocks?: boolean;
  /**
   * Token Type ID for the Card<br />
   * Optional
   */
  tokenTypeID?: number | null;
  /**
   * Token Type name for the Card<br />
   * Optional
   */
  tokenTypeName?: string | null;
  /**
   * Vehicle Registration embossed on the card<br />
   * Optional<br />
   * Up to 10 vehicle registration numbers could be passed in the parameter.<br />
   * Minimum of 4 characters should be provided for each VRN else not considered<br />
   * Those cards will be returned when part of the VRN matches with any of the string passed in the list.<br />
   * Max Length for each VRN: 50
   */
  vehicleRegistrationNumber?: string[];
  /**
   * Default Value: False<br />
   * When this field is set to True, cards with below status 2 years (configurable) ago and earlier are excluded from the result<br />
   * -Blocked Card<br />
   * -Expired<br />
   * -Cancelled<br />
   * -Suspended<br />
   * -Blocked<br />
   * -Expired and Cancelled<br />
   * -Replaced<br />
   * -Replaced By<br />
   * -Closed<br />
   * -Fraud<br />
   */
  excludeOldCards?: boolean;
  /**
   * Default value is False.<br />
   * When true, the API will not return cards that are expiring <br />
   * within 120 (i.e. Configured) days, if the status of the card is 1 or 41 or 42 in Cards platform.
   */
  excludeExpiringCards?: boolean;
  /** Customer reference number of the card. */
  clientReferenceId?: string | null;
  /**
   * Default Value: All<br />
   * Optional<br />
   * This option is used to filter the list of cards with ‘ReissueSetting’.<br />
   * If ‘True’, the API will return cards with ReIssueSetting value is true.<br />
   * If ‘False’, the API will return cards with ReIsssueSetting value is false.<br />
   * If ‘ALL’, API will return cards with ReIssueSetting value True &amp; False both.<br />
   * Allowed Values:<br />
   * 1.	All<br />
   * 2.	True<br />
   * 3.	False
   */
  reissueSetting?: string | null;
  requestId?: string;
}

export const filtersSchema: Schema<Filters> = object({
  accountId: ['AccountId', optional(nullable(number()))],
  accountNumber: ['AccountNumber', optional(nullable(string()))],
  cardGroupId: ['CardGroupId', optional(nullable(number()))],
  cardGroupName: ['CardGroupName', optional(nullable(string()))],
  cardSegment: ['CardSegment', optional(nullable(string()))],
  cardStatus: ['CardStatus', array(string())],
  cardTypeCode: ['CardTypeCode', optional(nullable(string()))],
  colCoCode: ['ColCoCode', optional(nullable(number()))],
  colCoCountryCode: ['ColCoCountryCode', optional(nullable(string()))],
  colCoId: ['ColCoId', optional(nullable(number()))],
  coverage: ['Coverage', optional(nullable(string()))],
  creationDate: ['CreationDate', optional(nullable(string()))],
  driverName: ['DriverName', optional(array(string()))],
  effectiveDate: ['EffectiveDate', optional(nullable(string()))],
  excludeBundleId: ['ExcludeBundleId', optional(nullable(string()))],
  excludeCancelledCards: ['ExcludeCancelledCards', optional(boolean())],
  excludeCardGroupId: ['ExcludeCardGroupId', optional(nullable(number()))],
  excludeCardGroupName: ['ExcludeCardGroupName', optional(nullable(string()))],
  excludeCards: ['ExcludeCards', optional(array(lazy(() => searchCardSchema)))],
  excludeFraudCards: ['ExcludeFraudCards', optional(boolean())],
  excludePendingRenewalCards: [
    'ExcludePendingRenewalCards',
    optional(boolean()),
  ],
  excludeReplacedCards: ['ExcludeReplacedCards', optional(boolean())],
  expiringInDays: ['ExpiringInDays', optional(nullable(number()))],
  expiryMonth: ['ExpiryMonth', optional(nullable(string()))],
  includeBundleDetails: ['IncludeBundleDetails', optional(boolean())],
  includeCards: ['IncludeCards', optional(array(lazy(() => searchCardSchema)))],
  includeIntermediateStatus: ['IncludeIntermediateStatus', optional(boolean())],
  issuedAfter: ['IssuedAfter', optional(nullable(string()))],
  network: ['Network', optional(nullable(string()))],
  pANEndsWith: ['PANEndsWith', optional(nullable(string()))],
  payerId: ['PayerId', optional(nullable(number()))],
  payerNumber: ['PayerNumber', optional(nullable(string()))],
  purchaseCategoryCode: ['PurchaseCategoryCode', optional(nullable(string()))],
  sortOrder: ['SortOrder', optional(nullable(string()))],
  includeScheduledCardBlocks: [
    'IncludeScheduledCardBlocks',
    optional(boolean()),
  ],
  tokenTypeID: ['TokenTypeID', optional(nullable(number()))],
  tokenTypeName: ['TokenTypeName', optional(nullable(string()))],
  vehicleRegistrationNumber: [
    'VehicleRegistrationNumber',
    optional(array(string())),
  ],
  excludeOldCards: ['ExcludeOldCards', optional(boolean())],
  excludeExpiringCards: ['ExcludeExpiringCards', optional(boolean())],
  clientReferenceId: ['ClientReferenceId', optional(nullable(string()))],
  reissueSetting: ['ReissueSetting', optional(nullable(string()))],
  requestId: ['RequestId', optional(string())],
});
