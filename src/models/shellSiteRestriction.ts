/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, object, optional, Schema, string } from '../schema';

export interface ShellSiteRestriction {
  /**
   * ISO 3166-1 Numeric-3 code of the country where the site restriction is applied.
   * Example: 826 for United Kingdom.
   */
  country?: string;
  /**
   * A list of Site IDs in this country, in the format “AA1111” where “AA” is a 2-character country code and “1111” is a 4-digit site number in that country, which is either restricted or allowed.
   * For example, “GB1234”.
   */
  sites?: string[];
  /** A list of site group ids in this country which is either restricted or allowed. */
  siteGroups?: string[];
  /**
   * Flag indicates whether the profile is inclusive or exclusive.
   * Example: False - (inclusive), i.e. the “Sites” & “SiteGroups” properties lists the sites & site groups where the transaction will be allowed.
   * True - (exclusive), i.e. the “Sites” & “SiteGroups” properties lists the sites and site groups where the transactions will be declined.
   */
  exclusive?: boolean;
}

export const shellSiteRestrictionSchema: Schema<ShellSiteRestriction> = object({
  country: ['Country', optional(string())],
  sites: ['Sites', optional(array(string()))],
  siteGroups: ['SiteGroups', optional(array(string()))],
  exclusive: ['Exclusive', optional(boolean())],
});
