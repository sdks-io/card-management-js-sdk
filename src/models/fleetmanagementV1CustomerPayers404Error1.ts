/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Fault, faultSchema } from './fault';

export interface FleetmanagementV1CustomerPayers404Error1 {
  fault?: Fault;
}

export const fleetmanagementV1CustomerPayers404Error1Schema: Schema<FleetmanagementV1CustomerPayers404Error1> = object(
  { fault: ['fault', optional(lazy(() => faultSchema))] }
);
