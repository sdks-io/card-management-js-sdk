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
  PINReminderCardDetails,
  pINReminderCardDetailsSchema,
} from './pINReminderCardDetails';

export interface CardManagementV1PinreminderRequest {
  /**
   * Account Id of the customer.<br />
   * Optional if AccountNumber is passed, else Mandatory.<br />
   * This input is a search criterion, if given.
   */
  accountId?: number;
  /**
   * Account Number of the customer.<br />
   * Optional if AccountId is passed, else Mandatory.<br />
   * This input is a search criterion, if given.
   */
  accountNumber?: string;
  /**
   * Collecting Company Code (Shell Code) of the selected payer. <br />
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. <br />
   * It is optional for other countries if ColCoID is provided.
   */
  colCoCode?: number;
  /**
   * Collecting Company Id of the selected payer<br />
   * Optional if ColCoCode is passed else Mandatory.
   */
  colCoId?: number;
  /**
   * Payer Id (i.e. Customer Id of the Payment Customer of the selected payer.<br />
   * Optional if PayerNumber is passed else Mandatory
   */
  payerId?: number;
  /**
   * Payer Number (Ex: GB000000123) of the selected payer.<br />
   * Optional if PayerId is passed else Mandatory
   */
  payerNumber?: string;
  /** List of PINReminderCardDetails entity. The fields of this entity are described below. */
  pINReminderCardDetails?: PINReminderCardDetails[];
}

export const cardManagementV1PinreminderRequestSchema: Schema<CardManagementV1PinreminderRequest> = object(
  {
    accountId: ['AccountId', optional(number())],
    accountNumber: ['AccountNumber', optional(string())],
    colCoCode: ['ColCoCode', optional(number())],
    colCoId: ['ColCoId', optional(number())],
    payerId: ['PayerId', optional(number())],
    payerNumber: ['PayerNumber', optional(string())],
    pINReminderCardDetails: [
      'PINReminderCardDetails',
      optional(array(lazy(() => pINReminderCardDetailsSchema))),
    ],
  }
);
