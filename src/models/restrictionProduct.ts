/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface RestrictionProduct {
  /**
   * The productCode returned by the Gateway API.
   * Example: 021
   */
  globalProductCode?: string;
  /**
   * The description returned by the Gateway API.
   * Example: High Performance Diesel
   */
  description?: string;
}

export const restrictionProductSchema: Schema<RestrictionProduct> = object({
  globalProductCode: ['GlobalProductCode', optional(string())],
  description: ['Description', optional(string())],
});
