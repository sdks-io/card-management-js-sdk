/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

/** This entity models the data that is sent in the https */
export interface OrderCardEnquiry {
  /** Account ID on the card request */
  accountId?: number | null;
  /** AccountNumber */
  accountNumber?: string | null;
  /**
   * Bulk card order request refrence numer.<br />
   * This field will be null if the order is not through BCO.
   */
  bCOReference?: number | null;
  /**
   * Row number of the request in the BCO file.<br />
   * This field will be null if the order is not through BCO.
   */
  bCORowNumber?: number | null;
  /** Card group ID */
  cardGroupId?: number | null;
  /** Card group name */
  cardGroupName?: string | null;
  /**
   * Unique Card Id.<br />
   * The field will be null if the card order request is not successly processed.
   */
  cardId?: number | null;
  /**
   * Card PAN.<br />
   * Mask PAN (Mask all digits except the Last 6 digits of the PAN).<br />
   * The field will be null if the card order request is not successly processed.
   */
  cardPAN?: string | null;
  /**
   * CardTypeCode<br />
   * ISO code of the card i.e. first 7 digits of the PAN
   */
  cardTypeCode?: string | null;
  /** CardTypeId */
  cardTypeId?: number | null;
  /** CardTypeName */
  cardTypeName?: string | null;
  /** Driver name */
  driverName?: string | null;
  /**
   * Error code for the order card request.<br />
   * The value will be 0000 if it is processed without errors.
   */
  errorCode?: string | null;
  /**
   * Error description for the order card request.<br />
   * The value will be empty string if it is processed without errors.
   */
  errorDescription?: string | null;
  /**
   * Error code for the Gateway sync error.<br />
   * The value will be 0000 if it is processed without errors.
   */
  gatewaySyncErrorCode?: string | null;
  /**
   * Error description for the Gateway sync error.<br />
   * The value will be empty string if it is processed without errors.
   */
  gatewaySyncErrorDescription?: string | null;
  /**
   * GatewaySyncStatus<br />
   * Status of the card sync with CFGW.<br />
   * Possible values:<br />
   * -Success<br />
   * -Failed<br />
   * -In Progress<br />
   * -Not Submitted
   */
  gatewaySyncStatus?: string | null;
  /**
   * Main reference number for the order card request.<br />
   * This field will be null if the order is through BCO.
   */
  mainReference?: number;
  /**
   * Indivitual card reference number for the order card request.<br />
   * This field will be null if the order is through BCO.
   */
  orderCardReference?: number;
  /**
   * Order status.<br />
   * Possible values:<br />
   * P   Pending<br />
   * I   Picked up for processing<br />
   * PX	Failed at Queue but retry attempts pending<br />
   * X	Failed  at Queue<br />
   * R	Card is processed, awaiting for PAN update.<br />
   * S	Processed<br />
   * F	Failed
   */
  orderStatus?: string | null;
  /** Payer ID on the card request. */
  payerId?: number;
  /** Payer Number on the card request */
  payerNumber?: string | null;
  /**
   * Date and time (in cutomers local time) when the card order request is processed<br />
   * Format: yyyyMMdd HH:mm:ss<br />
   * Note: The client application to convert the string to appropriate date/time type.
   */
  processedDate?: string | null;
  /** PurchaseCategoryCode */
  purchaseCategoryCode?: string | null;
  /**
   * PurchaseCategoryId <br />
   * Note: Not Purchase code. This is a unique purchase category id assigned
   */
  purchaseCategoryId?: number | null;
  /** PurchaseCategoryName */
  purchaseCategoryName?: string | null;
  /**
   * Date and time (in cutomers local time) when the card order request is submitted.<br />
   * Format: yyyyMMdd HH:mm:ss<br />
   * Note: The client application to convert the string to appropriate date/time type.
   */
  submittedDate?: string | null;
  /**
   * SyncProcessedDate<br />
   * Date and time (in cutomers local time) when the sync card request is processed.<br />
   * Format: yyyyMMdd HH:mm:ss<br />
   * Note: The client application to convert the string to appropriate date/time type.
   */
  syncProcessedDate?: string | null;
  /**
   * SyncRequestedDate<br />
   * Date and time (in cutomers local time) when the sync card request is submitted.<br />
   * Format: yyyyMMdd HH:mm:ss <br />
   * Note: The client application to convert the string to appropriate date/time type.
   */
  syncRequestedDate?: string | null;
  /** Vehicle registration number */
  vRN?: string | null;
  /**
   * Unique Id of the Original Order card request, the status of which is enquired by this API. <br />
   * This is returned for end to end traceability of a request based on the original Order Card request.
   */
  orderRequestId?: string | null;
  /**
   * Expiry date of the card.<br />
   * Format: MMyy<br />
   * (Clients to convert this to appropriate DateTime type.)<br />
   * Note: This is the Expiry Date saved.<br />
   * If the Order Card request is still not processed, i.e.PAN is not yet issued, this field will be null or empty. <br />
   * For a Card Order with a custom Expiry Date passed in the request, this value will be returned after it is updated successfully.
   */
  expiryDate?: string | null;
  /** This is the Client Reference Id of card in the order which needs to be passed by the client. */
  clientReferenceId?: string | null;
  /**
   * Order status.<br />
   * Possible values<br />
   *  Success<br />
   *  Failed<br />
   *  InProgress<br />
   */
  statusDescription?: string | null;
  /** Colcoid */
  colCoId?: number | null;
}

export const orderCardEnquirySchema: Schema<OrderCardEnquiry> = object({
  accountId: ['AccountId', optional(nullable(number()))],
  accountNumber: ['AccountNumber', optional(nullable(string()))],
  bCOReference: ['BCOReference', optional(nullable(number()))],
  bCORowNumber: ['BCORowNumber', optional(nullable(number()))],
  cardGroupId: ['CardGroupId', optional(nullable(number()))],
  cardGroupName: ['CardGroupName', optional(nullable(string()))],
  cardId: ['CardId', optional(nullable(number()))],
  cardPAN: ['CardPAN', optional(nullable(string()))],
  cardTypeCode: ['CardTypeCode', optional(nullable(string()))],
  cardTypeId: ['CardTypeId', optional(nullable(number()))],
  cardTypeName: ['CardTypeName', optional(nullable(string()))],
  driverName: ['DriverName', optional(nullable(string()))],
  errorCode: ['ErrorCode', optional(nullable(string()))],
  errorDescription: ['ErrorDescription', optional(nullable(string()))],
  gatewaySyncErrorCode: ['GatewaySyncErrorCode', optional(nullable(string()))],
  gatewaySyncErrorDescription: [
    'GatewaySyncErrorDescription',
    optional(nullable(string())),
  ],
  gatewaySyncStatus: ['GatewaySyncStatus', optional(nullable(string()))],
  mainReference: ['MainReference', optional(number())],
  orderCardReference: ['OrderCardReference', optional(number())],
  orderStatus: ['OrderStatus', optional(nullable(string()))],
  payerId: ['PayerId', optional(number())],
  payerNumber: ['PayerNumber', optional(nullable(string()))],
  processedDate: ['ProcessedDate', optional(nullable(string()))],
  purchaseCategoryCode: ['PurchaseCategoryCode', optional(nullable(string()))],
  purchaseCategoryId: ['PurchaseCategoryId', optional(nullable(number()))],
  purchaseCategoryName: ['PurchaseCategoryName', optional(nullable(string()))],
  submittedDate: ['SubmittedDate', optional(nullable(string()))],
  syncProcessedDate: ['SyncProcessedDate', optional(nullable(string()))],
  syncRequestedDate: ['SyncRequestedDate', optional(nullable(string()))],
  vRN: ['VRN', optional(nullable(string()))],
  orderRequestId: ['OrderRequestId', optional(nullable(string()))],
  expiryDate: ['ExpiryDate', optional(nullable(string()))],
  clientReferenceId: ['ClientReferenceId', optional(nullable(string()))],
  statusDescription: ['StatusDescription', optional(nullable(string()))],
  colCoId: ['ColCoId', optional(nullable(number()))],
});