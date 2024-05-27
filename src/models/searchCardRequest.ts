/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { SearchRequest, searchRequestSchema } from './searchRequest';

export interface SearchCardRequest {
  /** Encapsulate the Search details request. */
  filters?: SearchRequest;
  /**
   * Page Size – Number of records to show on a page
   * Optional
   * Default value 50
   */
  pageSize?: string;
  /** Page Number */
  page?: string;
}

export const searchCardRequestSchema: Schema<SearchCardRequest> = object({
  filters: ['Filters', optional(lazy(() => searchRequestSchema))],
  pageSize: ['PageSize', optional(string())],
  page: ['Page', optional(string())],
});