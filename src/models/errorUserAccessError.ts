/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ErrorUserAccessError {
  /** Error Code */
  code?: string;
  /** Description */
  description?: string;
}

export const errorUserAccessErrorSchema: Schema<ErrorUserAccessError> = object({
  code: ['Code', optional(string())],
  description: ['Description', optional(string())],
});
