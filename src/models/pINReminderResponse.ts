/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  PINReminderReference,
  pINReminderReferenceSchema,
} from './pINReminderReference';

export interface PINReminderResponse {
  /** Unique request identifier passed from end user. This identifier helps in tracing a transaction */
  requestId?: string;
  /** Service reference number for tracking. */
  mainReference?: number;
  /** Indicates overall status of the request. Allowed values: SUCCESS, FAILED */
  status?: string;
  data?: PINReminderReference[];
}

export const pINReminderResponseSchema: Schema<PINReminderResponse> = object({
  requestId: ['RequestId', optional(string())],
  mainReference: ['MainReference', optional(number())],
  status: ['Status', optional(string())],
  data: ['Data', optional(array(lazy(() => pINReminderReferenceSchema)))],
});
