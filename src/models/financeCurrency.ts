/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

/** This entity will not be present in the response if the ‘IncludeFinanceCurrency’ flag in the request is ‘false’ */
export interface FinanceCurrency {
  /** Currency ISO Code used for the Finance Widget. */
  currencyCode?: string | null;
  /** Currency Symbol */
  currencySymbol?: string | null;
  /** Factor to be used for converting the amounts in invoice currency to finance widget currency. (If finance currency is same as invoice currency, then the value of this field will be “1” so that the value does not change) */
  invoiceExchangeRate?: number | null;
  /** Factor to be used for converting the amounts in credit limit currency to finance widget currency. (If finance currency is same as credit limit currency, then the value of this field will be “1” so that the value does not change) */
  creditLimitExchangeRate?: number | null;
}

export const financeCurrencySchema: Schema<FinanceCurrency> = object({
  currencyCode: ['CurrencyCode', optional(nullable(string()))],
  currencySymbol: ['CurrencySymbol', optional(nullable(string()))],
  invoiceExchangeRate: ['Invoice_ExchangeRate', optional(nullable(number()))],
  creditLimitExchangeRate: [
    'CreditLimit_ExchangeRate',
    optional(nullable(number())),
  ],
});
