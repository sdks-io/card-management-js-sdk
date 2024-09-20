/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Accounts, accountsSchema } from './accounts';

export interface CardGroupRequest {
  /**
   * Collecting Company Id of the selected payer.
   * Optional if ColCoCode is passed else Mandatory.
   * Example:
   * 1 for Philippines
   * 5 for UK
   */
  colCoId?: number | null;
  /**
   * Collecting Company Code (Shell Code) of the selected payer.
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   * Example:
   * 86 for Philippines
   * 5 for UK
   */
  colCoCode?: number | null;
  /**
   * Payer id of the customer.
   * Optional if PayerNumber is passed, else Mandatory.
   * This input is a search criterion.
   * Example: 123456
   */
  payerId?: number | null;
  /**
   * PayerNumber of the customer.
   * Optional if PayerId is passed, else Mandatory.
   * This input is a search criterion.
   * Example: GB00123456
   */
  payerNumber?: string | null;
  account?: Accounts[];
  /**
   * Card Group Name
   * Optional.
   * Minimum of 2 characters should be provided else not considered.
   * CardGroups those have the entered value at any part
   */
  cardGroupName?: string | null;
  /**
   * Card Group Status
   * Mandatory
   * Allowed values:
   * •    ALL
   * •    TERMINATED
   * •    ACTIVE
   */
  status?: string | null;
  /**
   * Page Number (as shown to the users)
   * Optional
   * Default value 1
   */
  currentPage?: number;
  /**
   * Page Size – Number of records to show on a page.
   * Optional
   * Default value 50.
   * Return all rows if -1 is supplied as page size.
   */
  pageSize?: number;
}

export const cardGroupRequestSchema: Schema<CardGroupRequest> = object({
  colCoId: ['ColCoId', optional(nullable(number()))],
  colCoCode: ['ColCoCode', optional(nullable(number()))],
  payerId: ['PayerId', optional(nullable(number()))],
  payerNumber: ['PayerNumber', optional(nullable(string()))],
  account: ['Account', optional(array(lazy(() => accountsSchema)))],
  cardGroupName: ['CardGroupName', optional(nullable(string()))],
  status: ['Status', optional(nullable(string()))],
  currentPage: ['CurrentPage', optional(number())],
  pageSize: ['PageSize', optional(number())],
});
