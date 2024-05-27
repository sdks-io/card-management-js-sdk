/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { ErrorDetails, errorDetailsSchema } from './errorDetails';

export interface UpdateBundleResponse {
  /** API Request Id */
  requestId?: string;
  /** API Response Status */
  status?: string;
  errors?: ErrorDetails;
}

export const updateBundleResponseSchema: Schema<UpdateBundleResponse> = object({
  requestId: ['RequestId', optional(string())],
  status: ['Status', optional(string())],
  errors: ['Errors', optional(lazy(() => errorDetailsSchema))],
});