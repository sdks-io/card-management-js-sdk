/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ReplaceCardSettings,
  replaceCardSettingsSchema,
} from './replaceCardSettings';

/** Request entity object for UpdateCardRequest  list */
export interface UpdateCard {
  /**
   * The caller to be notified with the status of the update card status request. <br />
   * The caller will also be notified with the status of the replacement card order request, if any.<br />
   * Mandatory, if NotifyCaller is true. <br />
   * Maximum field length: 20<br />
   * Allowed values:<br />
   * - NextGenUI: This value to be used by next gen UI application.<br />
   * - Motix: This value to be used by MOTiX application.<br />
   * - FleetHubUILifeTime: This value to be used by Fleet Hub UI application for life time restriction cards.<br />
   * Note: The values passed in this field are case insensitive.
   */
  caller?: string | null;
  /**
   * True/False<br />
   * Optional<br />
   * When not provided will considered as default value as True.<br />
   * If passed True, the replacement card will be chargeable, else replacement card will not be charged.
   */
  isReplacementChargeable?: boolean;
  /**
   * True/False.<br />
   * Optional.<br />
   * Default: False<br />
   * If true, the caller would be notified back with the status as success or failure after the update card status request is processed.
   * Notification API subscription required to use this feature , please refer API documetation for more details
   */
  notifyCaller?: boolean;
  /**
   * True/False.<br />
   * Optional.<br />
   * Default: False<br />
   * If true, the caller would be notified back with the status as success or failed after the replacement card is synced with Gateway, if a replacement card was requested.
   */
  notifyCallerOnSync?: boolean;
  /**
   * True/False.<br />
   * Pass True if a replacement order card request is to be placed, else False.<br />
   * Optional.Default value False.<br />
   * Replacement of a card is only applicable when the target status requested is either permanently Block or Damaged for the existing card.<br />
   * Request for Replacement card will be placed only when the Block card or Block damaged card request is successfully placed.<br />
   * The Replacement card request will be processed only when the permanent Block card request is successfully processed. <br />
   * In case of damaged card request, the replacement card request will be processed immediately.
   */
  orderCardReplacement?: boolean;
  /** Request entity object for ReplaceCardSettings */
  cardSettings?: ReplaceCardSettings;
  /**
   * Reason id for updating the card status.
   * Either Reason ID or Text is madatory when TargetStatus is ‘Block’ or ‘Damaged’. Else ignored.
   * Possible values:
   * 1 (Lost)
   * 2 (Stolen)
   * 3 (Card no longer required)
   *  <br>When passed, the reason Id will be mapped to allowed reason IDs configured for the card type of the card. If the given reason Id is not allowed for certain card types, then the request will be rejected as invalid ResonId
   */
  reasonId?: number;
  /**
   * Reason text for updating the card status.
   * Possible Values:
   * 1) Lost
   * 2) Stolen
   * 3) Card no longer required
   * Optional – However, either Reason ID or Text is madatory when TargetStatus is ‘Block’ or ‘Damaged’. Else, Ignored.
   * When Reason Text is passed and the Target Status is either Block or Damaged, the text will be validated with the allowed list of values configured for the card type of the card. If the text is not allowed, request will be rejected as invaid ResonText.
   * Note:
   * ‘Customer blocked’ will be used as the reason for ‘Temporary Block’.
   */
  reasonText?: string | null;
  /**
   * The list of cards passed in ‘Cards’ parameter will be updated to this status.<br />
   * Mandatory.<br />
   * Allowed values –<br />
   * - TemporaryBlock<br />
   * - Unblock<br />
   * - Block<br />
   * - Damaged<br />
   */
  targetStatus?: number | null;
  /**
   * Account Id of the customer.<br />
   * Optional if AccountNumber is passed, else Mandatory.
   */
  accountId?: number | null;
  /**
   * Account Number of the customer.<br />
   * Optional if AccountId is passed, else Mandatory.
   */
  accountNumber?: string | null;
  /**
   * Expiry date of the card.<br />
   * Mandatory if PAN is passed, else optional.<br />
   * Format: yyyyMMdd
   */
  cardExpiryDate?: string | null;
  /**
   * Card Id of the card.<br />
   * Optional if PAN is passed, else Mandatory.
   */
  cardId?: number | null;
  /**
   * Collecting company code of the customer. <br />
   * Optional if ColCoId is passed, else Mandatory.<br />
   */
  colCoCode?: number | null;
  /**
   * Collecting company id of the customer. <br />
   * Optional if ColCoCode is passed, else Mandatory.<br />
   */
  colCoId?: number | null;
  /**
   * PAN of the card.<br />
   * Optional if CardId is passed, else Mandatory.<br />
   */
  pAN?: string | null;
  /**
   * Payer id of the customer.<br />
   * Optional if PayerNumber is passed, else Mandatory.
   */
  payerId?: number | null;
  /**
   * PayerNumber of the customer.<br />
   * Optional if PayerId is passed, else Mandatory.
   */
  payerNumber?: string | null;
}

export const updateCardSchema: Schema<UpdateCard> = object({
  caller: ['Caller', optional(nullable(string()))],
  isReplacementChargeable: ['IsReplacementChargeable', optional(boolean())],
  notifyCaller: ['NotifyCaller', optional(boolean())],
  notifyCallerOnSync: ['NotifyCallerOnSync', optional(boolean())],
  orderCardReplacement: ['OrderCardReplacement', optional(boolean())],
  cardSettings: [
    'CardSettings',
    optional(lazy(() => replaceCardSettingsSchema)),
  ],
  reasonId: ['ReasonId', optional(number())],
  reasonText: ['ReasonText', optional(nullable(string()))],
  targetStatus: ['TargetStatus', optional(nullable(number()))],
  accountId: ['AccountId', optional(nullable(number()))],
  accountNumber: ['AccountNumber', optional(nullable(string()))],
  cardExpiryDate: ['CardExpiryDate', optional(nullable(string()))],
  cardId: ['CardId', optional(nullable(number()))],
  colCoCode: ['ColCoCode', optional(nullable(number()))],
  colCoId: ['ColCoId', optional(nullable(number()))],
  pAN: ['PAN', optional(nullable(string()))],
  payerId: ['PayerId', optional(nullable(number()))],
  payerNumber: ['PayerNumber', optional(nullable(string()))],
});
