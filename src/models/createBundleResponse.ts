/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, optional, Schema, string } from '../schema';
import {
  BundleCardRestrictionStatus,
  bundleCardRestrictionStatusSchema,
} from './bundleCardRestrictionStatus';
import { ErrorStatus, errorStatusSchema } from './errorStatus';

export interface CreateBundleResponse {
  /** Request Id of the API call */
  requestId?: string | null;
  bundleCreationStatus?: ErrorStatus;
  /** Identifier of the newly created bundle */
  bundleId?: string;
  dayTimeRestrictionStatus?: ErrorStatus;
  /** Identifier of the day/time restriction profile created */
  dayTimeRestrictionProfileId?: string;
  locationRestrictionStatus?: ErrorStatus;
  /** Identifier of the location restriction profile created */
  locationRestrictionProfileId?: string;
  usageRestrictionStatus?: ErrorStatus;
  productRestrictionStatus?: ErrorStatus;
  cards?: BundleCardRestrictionStatus;
  error?: ErrorStatus;
}

export const createBundleResponseSchema: Schema<CreateBundleResponse> = object({
  requestId: ['RequestId', optional(nullable(string()))],
  bundleCreationStatus: [
    'BundleCreationStatus',
    optional(lazy(() => errorStatusSchema)),
  ],
  bundleId: ['BundleId', optional(string())],
  dayTimeRestrictionStatus: [
    'DayTimeRestrictionStatus',
    optional(lazy(() => errorStatusSchema)),
  ],
  dayTimeRestrictionProfileId: [
    'DayTimeRestrictionProfileId',
    optional(string()),
  ],
  locationRestrictionStatus: [
    'LocationRestrictionStatus',
    optional(lazy(() => errorStatusSchema)),
  ],
  locationRestrictionProfileId: [
    'LocationRestrictionProfileId',
    optional(string()),
  ],
  usageRestrictionStatus: [
    'UsageRestrictionStatus',
    optional(lazy(() => errorStatusSchema)),
  ],
  productRestrictionStatus: [
    'ProductRestrictionStatus',
    optional(lazy(() => errorStatusSchema)),
  ],
  cards: ['Cards', optional(lazy(() => bundleCardRestrictionStatusSchema))],
  error: ['Error', optional(lazy(() => errorStatusSchema))],
});
