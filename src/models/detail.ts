/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Detail {
  /** Error code */
  errorcode?: string;
}

export const detailSchema: Schema<Detail> = object({
  errorcode: ['errorcode', optional(string())],
});
