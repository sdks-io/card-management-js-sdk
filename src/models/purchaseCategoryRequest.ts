/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface PurchaseCategoryRequest {
  /** Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. */
  requestId?: string;
  /** Collecting Company Code (Shell Code). */
  colCoCode?: number | null;
  /** Collecting Company Id (in Shell Cards Platform). */
  colCoId?: number | null;
  /** Card type Id */
  cardTypeId?: number | null;
  /**
   * Purchase category Id
   * Optional.
   * Example: 123, 124, etc.,
   */
  purchaseCategoryId?: number;
  /**
   * Language code for the Title and Description.
   * Language codes should be same as SFH supported language
   * Optional.
   * Default: en-GB
   * Example:
   * en-GB – English (UK)
   * nl-NL – Dutch (Netherlands)
   */
  languageCode?: string;
}

export const purchaseCategoryRequestSchema: Schema<PurchaseCategoryRequest> = object(
  {
    requestId: ['RequestId', optional(string())],
    colCoCode: ['ColCoCode', optional(nullable(number()))],
    colCoId: ['ColCoId', optional(nullable(number()))],
    cardTypeId: ['CardTypeId', optional(nullable(number()))],
    purchaseCategoryId: ['PurchaseCategoryId', optional(number())],
    languageCode: ['LanguageCode', optional(string())],
  }
);
