/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  SearchAccountLimitResponseData,
  searchAccountLimitResponseDataSchema,
} from './searchAccountLimitResponseData';

export interface SearchAccountLimitResponse {
  requestId?: string;
  status?: string;
  data?: SearchAccountLimitResponseData;
}

export const searchAccountLimitResponseSchema: Schema<SearchAccountLimitResponse> = object(
  {
    requestId: ['RequestId', optional(string())],
    status: ['Status', optional(string())],
    data: ['Data', optional(lazy(() => searchAccountLimitResponseDataSchema))],
  }
);
