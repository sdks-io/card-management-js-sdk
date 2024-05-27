/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface UpdateMPayRegStatusResponse {
  /** API Request Id */
  requestId?: string;
  /** API Response Status */
  status?: string;
}

export const updateMPayRegStatusResponseSchema: Schema<UpdateMPayRegStatusResponse> = object(
  {
    requestId: ['RequestId', optional(string())],
    status: ['Status', optional(string())],
  }
);