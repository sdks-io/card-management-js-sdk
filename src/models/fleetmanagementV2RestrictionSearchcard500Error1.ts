/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Fault, faultSchema } from './fault';

export interface FleetmanagementV2RestrictionSearchcard500Error1 {
  fault?: Fault;
}

export const fleetmanagementV2RestrictionSearchcard500Error1Schema: Schema<FleetmanagementV2RestrictionSearchcard500Error1> = object(
  { fault: ['fault', optional(lazy(() => faultSchema))] }
);
