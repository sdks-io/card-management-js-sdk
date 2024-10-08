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
import { CustomerContract, customerContractSchema } from './customerContract';
import {
  InvoiceDistributionMethod,
  invoiceDistributionMethodSchema,
} from './invoiceDistributionMethod';

export interface AccountResponseAccountsItems {
  /** Account Full Name */
  accountFullName?: string | null;
  /** Account Id */
  accountId?: number | null;
  /** Account Number */
  accountNumber?: string | null;
  /** Account Short Name */
  accountShortName?: string | null;
  /** Best of Indicator of the Pricing customer/account configured. */
  bestOfIndicator?: boolean;
  /**
   * Billing/Invoice frequency. The frequency in which the transactions will be considered for invoicing in a bulling run
   * E.g.:
   * 1    Daily (all days)
   * 2    Daily (only working days)
   * 3    Weekly - Monday
   * 4    Weekly – Tuesday
   * Etc.
   */
  billingFrequencyType?: string | null;
  /** Billing/Invoice frequency Identifier. Indicates the frequency in which the transactions will be considered for invoicing in a bulling run */
  billingFrequencyTypeId?: number | null;
  /**
   * Frequency at which the billing process is triggered. E.g.:
   * 1    Daily (all days)
   * 2    Daily (only working days)
   * 3    Weekly - Monday
   * 4    Weekly – Tuesday
   * Etc.
   */
  billingRunFrequency?: string | null;
  /**
   * Frequency at which the billing process is triggered.
   * E.g.: 1, 2, 3, etc.
   */
  billingRunFrequencyTypeId?: number | null;
  /** The 2-character ISO Code for the customer and card owning country. */
  colCoCountryCode?: string | null;
  /** ISO code of customer currency. */
  currencyCode?: string | null;
  /** € */
  currencySymbol?: string | null;
  /** The first day in a month when the billing should run in case of multiple billing runs configured with in a single month */
  day1Run?: number | null;
  /** The second day in a month when the billing should run in case of multiple billing runs configured with in a single month */
  day2Run?: number | null;
  /** The third day in a month when the billing should run in case of multiple billing runs configured with in a single month */
  day3Run?: number | null;
  /** The fourth day in a month when the billing should run in case of multiple billing runs configured with in a single month */
  day4Run?: number | null;
  /**
   * Frequency type unit id & description
   * E.g.:
   * 1 - Daily
   * 2 - Weekly
   * 3 - Monthly
   * 4 - Invoicing
   * 6 - Calendar quarter
   */
  frequencyType?: string | null;
  /** Gross amount in customer currency. */
  grossAmount?: number | null;
  /** POS international language code */
  internationalPOSLanguageCode?: string | null;
  /** POS international language ID */
  internationalPOSLanguageID?: number | null;
  /** The Account ID of the account on which the invoice is generated. */
  invoiceAccountID?: number | null;
  /** The Account Number of the account on which the invoice is generated. */
  invoiceAccountNumber?: string | null;
  /** The Account Short Name of the account on which the invoice is generated. */
  invoiceAccountShortName?: string | null;
  invoiceDistributionMethods?: InvoiceDistributionMethod[];
  /** Whether the account is international. */
  isInternational?: boolean | null;
  /** Whether the account is an invoice point. */
  isInvoicePoint?: boolean | null;
  /** Account last modified date and time */
  lastModifiedDate?: string | null;
  /** ISO code of customer currency. */
  localCurrencyCode?: string | null;
  /** Customer currency symbol. */
  localCurrencySymbol?: string | null;
  /** POS local language code */
  localPOSLanguageCode?: string | null;
  /** POS local language ID */
  localPOSLanguageID?: number | null;
  /** Net amount in customer currency. */
  netAmount?: number | null;
  /** Outstanding balance in customer currency. */
  outstandingBalance?: number | null;
  /** Amount paid in customer currency. */
  paidAmount?: number | null;
  /** Account Status */
  status?: string | null;
  /** Account status change reason id-description for the Status Reason, if any */
  statusReason?: string | null;
  /** Total number of active card groups under the account */
  totalActiveCardGroups?: number | null;
  /** Total number of active cards under the account. */
  totalActiveCards?: number | null;
  /** Total number of cards under the account that are permanently blocked */
  totalBlockedCards?: number | null;
  /** Total number of cards under the account that are cancelled */
  totalCancelledCards?: number | null;
  /** Total number of cards under the account. */
  totalCards?: number | null;
  /** Total number of expired cards under the account. */
  totalExpiredCards?: number | null;
  /** Total number of cards in Fraud status. */
  totalFraudCards?: number | null;
  /** Total number of cards in “New” status. */
  totalNewCards?: number | null;
  /** Total number of Renewal Pending account under the payer */
  totalRenewalPendingCards?: number | null;
  /** Total number of cards under the account with status as “Replaced” */
  totalReplacedCards?: number | null;
  /** Total number of cards under the account that are temporarily blocked by customer. */
  totalTemporaryBlockCardsByCustomer?: number | null;
  /** Total number of cards under the account that are temporarily blocked by Shell. */
  totalTemporaryBlockCardsByShell?: number | null;
  /** VAT amount in customer currency. */
  vATAmount?: number | null;
  /**
   * The account / sub-account is partner card account or not.
   * Possible values (1= Non-PC account, 2= PC account, 3= PC Payer with Card Types, 4= PC Payer)
   * Note: A partner card account is assumed to have only partner card card-types associated
   */
  isPartnerCard?: number | null;
  /** Customer id in e-TM system */
  tollsCustomerId?: string | null;
  /** Colco country type id in e-TM system */
  tollsColcoCountryTypeId?: string | null;
  contracts?: CustomerContract[];
  /** true */
  isConsortiumMember?: string | null;
}

export const accountResponseAccountsItemsSchema: Schema<AccountResponseAccountsItems> = object(
  {
    accountFullName: ['AccountFullName', optional(nullable(string()))],
    accountId: ['AccountId', optional(nullable(number()))],
    accountNumber: ['AccountNumber', optional(nullable(string()))],
    accountShortName: ['AccountShortName', optional(nullable(string()))],
    bestOfIndicator: ['BestOfIndicator', optional(boolean())],
    billingFrequencyType: [
      'BillingFrequencyType',
      optional(nullable(string())),
    ],
    billingFrequencyTypeId: [
      'BillingFrequencyTypeId',
      optional(nullable(number())),
    ],
    billingRunFrequency: ['BillingRunFrequency', optional(nullable(string()))],
    billingRunFrequencyTypeId: [
      'BillingRunFrequencyTypeId',
      optional(nullable(number())),
    ],
    colCoCountryCode: ['ColCoCountryCode', optional(nullable(string()))],
    currencyCode: ['CurrencyCode', optional(nullable(string()))],
    currencySymbol: ['CurrencySymbol', optional(nullable(string()))],
    day1Run: ['Day1Run', optional(nullable(number()))],
    day2Run: ['Day2Run', optional(nullable(number()))],
    day3Run: ['Day3Run', optional(nullable(number()))],
    day4Run: ['Day4Run', optional(nullable(number()))],
    frequencyType: ['FrequencyType', optional(nullable(string()))],
    grossAmount: ['GrossAmount', optional(nullable(number()))],
    internationalPOSLanguageCode: [
      'InternationalPOSLanguageCode',
      optional(nullable(string())),
    ],
    internationalPOSLanguageID: [
      'InternationalPOSLanguageID',
      optional(nullable(number())),
    ],
    invoiceAccountID: ['InvoiceAccountID', optional(nullable(number()))],
    invoiceAccountNumber: [
      'InvoiceAccountNumber',
      optional(nullable(string())),
    ],
    invoiceAccountShortName: [
      'InvoiceAccountShortName',
      optional(nullable(string())),
    ],
    invoiceDistributionMethods: [
      'InvoiceDistributionMethods',
      optional(array(lazy(() => invoiceDistributionMethodSchema))),
    ],
    isInternational: ['IsInternational', optional(nullable(boolean()))],
    isInvoicePoint: ['IsInvoicePoint', optional(nullable(boolean()))],
    lastModifiedDate: ['LastModifiedDate', optional(nullable(string()))],
    localCurrencyCode: ['LocalCurrencyCode', optional(nullable(string()))],
    localCurrencySymbol: ['LocalCurrencySymbol', optional(nullable(string()))],
    localPOSLanguageCode: [
      'LocalPOSLanguageCode',
      optional(nullable(string())),
    ],
    localPOSLanguageID: ['LocalPOSLanguageID', optional(nullable(number()))],
    netAmount: ['NetAmount', optional(nullable(number()))],
    outstandingBalance: ['OutstandingBalance', optional(nullable(number()))],
    paidAmount: ['PaidAmount', optional(nullable(number()))],
    status: ['Status', optional(nullable(string()))],
    statusReason: ['StatusReason', optional(nullable(string()))],
    totalActiveCardGroups: [
      'TotalActiveCardGroups',
      optional(nullable(number())),
    ],
    totalActiveCards: ['TotalActiveCards', optional(nullable(number()))],
    totalBlockedCards: ['TotalBlockedCards', optional(nullable(number()))],
    totalCancelledCards: ['TotalCancelledCards', optional(nullable(number()))],
    totalCards: ['TotalCards', optional(nullable(number()))],
    totalExpiredCards: ['TotalExpiredCards', optional(nullable(number()))],
    totalFraudCards: ['TotalFraudCards', optional(nullable(number()))],
    totalNewCards: ['TotalNewCards', optional(nullable(number()))],
    totalRenewalPendingCards: [
      'TotalRenewalPendingCards',
      optional(nullable(number())),
    ],
    totalReplacedCards: ['TotalReplacedCards', optional(nullable(number()))],
    totalTemporaryBlockCardsByCustomer: [
      'TotalTemporaryBlockCardsByCustomer',
      optional(nullable(number())),
    ],
    totalTemporaryBlockCardsByShell: [
      'TotalTemporaryBlockCardsByShell',
      optional(nullable(number())),
    ],
    vATAmount: ['VATAmount', optional(nullable(number()))],
    isPartnerCard: ['IsPartnerCard', optional(nullable(number()))],
    tollsCustomerId: ['TollsCustomerId', optional(nullable(string()))],
    tollsColcoCountryTypeId: [
      'TollsColcoCountryTypeId',
      optional(nullable(string())),
    ],
    contracts: [
      'Contracts',
      optional(array(lazy(() => customerContractSchema))),
    ],
    isConsortiumMember: ['IsConsortiumMember', optional(nullable(string()))],
  }
);
