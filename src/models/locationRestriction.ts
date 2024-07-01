/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  CountryRestriction,
  countryRestrictionSchema,
} from './countryRestriction';
import {
  NetworkRestriction,
  networkRestrictionSchema,
} from './networkRestriction';
import {
  PartnerSiteRestriction,
  partnerSiteRestrictionSchema,
} from './partnerSiteRestriction';
import {
  ShellSiteRestriction,
  shellSiteRestrictionSchema,
} from './shellSiteRestriction';

export interface LocationRestriction {
  countryRestrictions?: CountryRestriction;
  networkRestrictions?: NetworkRestriction[];
  shellSiteRestrictions?: ShellSiteRestriction[];
  partnerSiteRestrictions?: PartnerSiteRestriction[];
}

export const locationRestrictionSchema: Schema<LocationRestriction> = object({
  countryRestrictions: [
    'CountryRestrictions',
    optional(lazy(() => countryRestrictionSchema)),
  ],
  networkRestrictions: [
    'NetworkRestrictions',
    optional(array(lazy(() => networkRestrictionSchema))),
  ],
  shellSiteRestrictions: [
    'ShellSiteRestrictions',
    optional(array(lazy(() => shellSiteRestrictionSchema))),
  ],
  partnerSiteRestrictions: [
    'PartnerSiteRestrictions',
    optional(array(lazy(() => partnerSiteRestrictionSchema))),
  ],
});