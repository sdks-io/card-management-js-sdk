/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface DeliveryAddresses {
  /** Address Id */
  addressId?: number | null;
  /** AddressLine1 */
  addressLine1?: string | null;
  /** AddressLine2 */
  addressLine2?: string | null;
  /** AddressLine3 */
  addressLine3?: string | null;
  /** City */
  city?: string | null;
  /** Account Name */
  companyName?: string | null;
  /** Contact fore name of the delivery address. */
  contactForeName?: string | null;
  /** Contact last name of the delivery address. */
  contactLastName?: string | null;
  /** Contact middle name of the delivery address. */
  contactMiddleName?: string | null;
  /** ContactTitle */
  contactTitle?: string | null;
  /** Country */
  country?: string | null;
  /** Country Id */
  countryId?: number | null;
  /** Country ISO code */
  countryISOCode?: string | null;
  /** Fax number of the address contact. */
  fax?: string | null;
  /** Region of the Card Delivery address */
  region?: string | null;
  /** Region Id of the address. */
  regionId?: number | null;
  /** Telephone number of the address contact */
  telephone?: string | null;
  /** Delivery Zip code */
  zipCode?: string | null;
  /**
   * Delivery address type.
   * Possible Values:
   * 1 – Card and PIN delivery address
   * 2 – Card delivery address
   * 3 – PIN delivery address
   */
  addressType?: number | null;
}

export const deliveryAddressesSchema: Schema<DeliveryAddresses> = object({
  addressId: ['AddressId', optional(nullable(number()))],
  addressLine1: ['AddressLine1', optional(nullable(string()))],
  addressLine2: ['AddressLine2', optional(nullable(string()))],
  addressLine3: ['AddressLine3', optional(nullable(string()))],
  city: ['City', optional(nullable(string()))],
  companyName: ['CompanyName', optional(nullable(string()))],
  contactForeName: ['ContactForeName', optional(nullable(string()))],
  contactLastName: ['ContactLastName', optional(nullable(string()))],
  contactMiddleName: ['ContactMiddleName', optional(nullable(string()))],
  contactTitle: ['ContactTitle', optional(nullable(string()))],
  country: ['Country', optional(nullable(string()))],
  countryId: ['CountryId', optional(nullable(number()))],
  countryISOCode: ['CountryISOCode', optional(nullable(string()))],
  fax: ['Fax', optional(nullable(string()))],
  region: ['Region', optional(nullable(string()))],
  regionId: ['RegionId', optional(nullable(number()))],
  telephone: ['Telephone', optional(nullable(string()))],
  zipCode: ['ZipCode', optional(nullable(string()))],
  addressType: ['AddressType', optional(nullable(number()))],
});