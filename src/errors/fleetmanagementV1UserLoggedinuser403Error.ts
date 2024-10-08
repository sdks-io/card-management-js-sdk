/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorUserAccessError } from '../models/errorUserAccessError';

/**
 * Creates an instance of FleetmanagementV1UserLoggedinuser403
 */
interface FleetmanagementV1UserLoggedinuser403 {
  Error?: ErrorUserAccessError;
}

export class FleetmanagementV1UserLoggedinuser403Error extends ApiError<
  FleetmanagementV1UserLoggedinuser403
> {}
