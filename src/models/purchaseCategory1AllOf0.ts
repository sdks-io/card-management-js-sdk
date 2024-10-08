/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { ProductGroup, productGroupSchema } from './productGroup';

export interface PurchaseCategory1AllOf0 {
  /** Purchase category ID */
  id: number | null;
  /** Purchase category code */
  code: string | null;
  /** Name of Purchase category . */
  name: string | null;
  /** PurchaseCategory can be used while submitting new order cards requests if true else will not be used for ordering cards. */
  isVisible: boolean;
  /** List of product sets */
  productGroups: ProductGroup[];
  /**
   * Purchase category Title by given language code.
   * 1.    Basic
   * 2.    Essentials
   * 3.    Extra
   * 4.    Premium
   * 5.    Basic and LNG
   * 6.    Essentials and LNG
   * 7.    Extra and LNG
   * 8.    Premium and LNG
   * Note: Purchase Category name (GFN) is returned when Title does not exist for the given language Code and default language code (en-GB).
   */
  title?: string;
  /**
   * Purchase category description by given language code.
   * Example:
   * 0 - Diesel Products and TMF
   * 1 - All Fuel Products and TMF
   * 2 - All Fuels Products, Car related items and TMF
   * 3 - No Restriction
   * 0 - Diesel Products + LNG and TMF
   * 1 - All Fuel Products + LNG and TMF
   * 2 - All Fuels Products + LNG, Car related items and TMF
   * 3 - No Restriction + LNG
   * Note: Purchase Category name (GFN) is returned when Title does not exist for the given language Code and default language code (en-GB).
   */
  description?: string;
}

export const purchaseCategory1AllOf0Schema: Schema<PurchaseCategory1AllOf0> = object(
  {
    id: ['Id', nullable(number())],
    code: ['Code', nullable(string())],
    name: ['Name', nullable(string())],
    isVisible: ['IsVisible', boolean()],
    productGroups: ['ProductGroups', array(lazy(() => productGroupSchema))],
    title: ['Title', optional(string())],
    description: ['Description', optional(string())],
  }
);
