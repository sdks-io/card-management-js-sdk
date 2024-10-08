/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/** Request entity object for ReplaceCardSettings */
export interface ReplaceCardSettings {
  /**
   * The encrypted value of self-selected PIN.<br />
   * Optional – When not provided, the PIN will be auto generated(if the card token type supports PIN) and delivered based on the given PIN delivery option.<br />
   * Max Length: 256
   */
  selfSelectedEncryptedPIN?: string | null;
  /**
   * KeyId of the PIN encrypted value.<br />
   * Mandatory, if opted for self-selected PIN else optional.<br />
   * Max Length: 30
   */
  selfSelectedPINKeyID?: string | null;
  /**
   * Encoded message of the TCS form which is used for encrypting the PIN of this card.<br />
   * The encode message forms are provided to clients by another API (“TCS”).<br />
   * Instructions to encrypt the PIN is covered in the related API specifications document.<br />
   * Mandatory –If opted for self-selected PIN else optional.
   * Max Length: 1024
   */
  selfSelectedPINSessionKey?: string | null;
  /**
   * True/False.<br />
   * Optional <br />
   * Default: False<br />
   * For cards ordered with Validate Fleet Id parameter set to true, CFGW will be notified to enable this validation for the card.<br />
   * Note: When “FleetIdInputRequired” is not set on the card, validate fleet id will be considered false regardless of the value passed on this parameter.
   */
  validateFleetId?: boolean;
  /**
   * Existing Card Group ID, under which the replacement card is to be created.<br />
   * Pass “-1” if the replacement card should not be assigned to any card group.<br />
   * Optional <br />
   * If not provided, the replacement card will be created under the same card group as the current card.
   */
  cardGroupId?: number | null;
  /**
   * Card delivery type.<br />
   * Mandatory <br />
   * Allowed Value: <br />
   * 1.    Customer Address(Default) <br />
   * 2.    New Delivery Address <br />
   * 3.    Old Card Address
   */
  cardDeliveryType: number | null;
  /**
   * Title of the contact person. <br />
   * Optional<br />
   * Max field length: 10
   */
  deliveryContactTitle?: string | null;
  /**
   * Name of the contact person <br />
   * Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true.<br />
   * Max field length: 50
   */
  deliveryContactName?: string | null;
  /**
   * Company name <br />
   * Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true.
   * Max field length: 50
   */
  deliveryCompanyName?: string | null;
  /**
   * Address line 1 <br />
   * Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true.<br />
   * Max field length: 40
   */
  deliveryAddressLine1?: string | null;
  /**
   * Address line 2 <br />
   * Optional <br />
   * Max field length: 40
   */
  deliveryAddressLine2?: string | null;
  /**
   * Address line 3 <br />
   * Optional<br />
   * Max field length: 40
   */
  deliveryAddressLine3?: string | null;
  /**
   * ZIP code <br />
   * Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true.<br />
   * Max field length: 10
   */
  deliveryZipCode?: string | null;
  /**
   * City  <br />
   * Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true.<br />
   * Max field length: 40
   */
  deliveryCity?: string | null;
  /**
   * Region Id  <br />
   * Optional
   */
  deliveryRegionId?: number | null;
  /**
   * Region  <br />
   * Optional<br />
   * When region is passed
   */
  deliveryRegion?: string | null;
  /**
   * The ISO code of the country.<br />
   * Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true
   */
  deliveryCountry?: string | null;
  /** The countryId of gicen country.<br /> */
  deliveryCountryId?: number | null;
  /**
   * Phone number for to send SMS. <br />
   * Optional<br />
   * Max field length: 20
   */
  phoneNumber?: string;
  /**
   * Email address for to send email.<br />
   * Mandatory if PINAdviceType is email else optional.<br />
   * Max field length: 90
   */
  emailAddress?: string | null;
  /**
   * PIN delivery address type selection.<br />
   * Optional<br />
   * Allowed Values:<br />
   * 1.    Customer Address(Default)<br />
   * 2.    Card Address<br />
   * 3.    New Delivery Address
   */
  pINDeliveryAddressType?: number | null;
  /**
   * PIN delivery method.<br />
   * Mandatory when OrderReplacement Is true.<br />
   * Allowed Values:<br />
   * 1.    Paper<br />
   * 2.    Email<br />
   * 3.    SMS<br />
   * 4.    None
   */
  pINAdviceType?: number | null;
  /**
   * Title of the contact person.<br />
   * Optional <br />
   * Max field length: 10
   */
  pINDeliveryContactTitle?: string | null;
  /**
   * Name of the contact person.<br />
   * Mandatory - If PINAdviceType is paper else optional.<br />
   * Max field length: 50
   */
  pINDeliveryContactName?: string | null;
  /**
   * Company name.<br />
   * Mandatory - If PINAdviceType is paper else optional.<br />
   * Max field length: 50
   */
  pINDeliveryCompanyName?: string | null;
  /**
   * Address line 1.<br />
   * Mandatory - If PINAdviceType is paper else optional.<br />
   * Max field length: 40
   */
  pINDeliveryAddressLine1?: string | null;
  /**
   * Address line 2.<br />
   * Optional <br />
   * Max field length: 40
   */
  pINDeliveryAddressLine2?: string | null;
  /**
   * Address line 3.<br />
   * Optional <br />
   * Max field length: 40
   */
  pINDeliveryAddressLine3?: string | null;
  /**
   * ZIP code.<br />
   * Mandatory - if PINAdviceType is paper else optional. <br />
   * Max field length: 10
   */
  pINDeliveryZipCode?: string | null;
  /**
   * City.<br />
   * Mandatory - If PINAdviceType is paper else optional. <br />
   * Max field length: 40
   */
  pINDeliveryCity?: string | null;
  /**
   * Region Id.<br />
   * Optional
   */
  pINDeliveryRegionId?: number | null;
  /**
   * Region.<br />
   * When region is passed
   */
  pINDeliveryRegion?: string | null;
  /**
   * The ISO code of the country.<br />
   * Mappings for ISO code <br />
   * Mandatory if PINAdviceType is paper else optional.
   */
  pINDeliveryCountry?: string | null;
  /**
   * The countryId of the country.<br />
   * Mappings for ISO code<br />
   * This is not an input parameter.
   */
  pINDeliveryCountryId?: number | null;
  /**
   * Phone number for to send SMS of the PIN in case PINAdviceType is SMS.<br />
   * Mandatory if PINAdviceType is SMS else optional.<br />
   * Max field length: 20
   */
  pINPhoneNumber?: string | null;
  /**
   * Email address for to send email of the PIN in case PINAdviceType is Email.<br />
   * Mandatory if PINAdviceType is email else optional.<br />
   * Max field length: 90
   */
  pINEmailAddress?: string | null;
  /**
   * The given address will be used for sending PIN reminders in future when requested.<br />
   * PIN Advice type should be Paper
   * Optional
   */
  saveForPINReminder?: boolean;
  /**
   * If this is specified, the contact address will be saved in cards platform for card reissue processing.<br />
   * Optional
   */
  saveForCardReissue?: boolean;
  /**
   * Expiry Date for newly created card to be update in cards plot form.<br />
   * Optional <br />
   * Format: MMyy <br />
   * Eg:1221 <br />
   * If not apply the default Expiry Date.<br />
   * Note:<br />
   * There is a limit to the ExpiryDate which the user can choose for the Card.
   * If the user chooses a later ExpiryDate than the allowed value for the CardType of the OU,
   * the background service logs the respective error code and description
   */
  expiryDate?: string | null;
}

export const replaceCardSettingsSchema: Schema<ReplaceCardSettings> = object({
  selfSelectedEncryptedPIN: [
    'SelfSelectedEncryptedPIN',
    optional(nullable(string())),
  ],
  selfSelectedPINKeyID: ['SelfSelectedPINKeyID', optional(nullable(string()))],
  selfSelectedPINSessionKey: [
    'SelfSelectedPINSessionKey',
    optional(nullable(string())),
  ],
  validateFleetId: ['ValidateFleetId', optional(boolean())],
  cardGroupId: ['CardGroupId', optional(nullable(number()))],
  cardDeliveryType: ['CardDeliveryType', nullable(number())],
  deliveryContactTitle: ['DeliveryContactTitle', optional(nullable(string()))],
  deliveryContactName: ['DeliveryContactName', optional(nullable(string()))],
  deliveryCompanyName: ['DeliveryCompanyName', optional(nullable(string()))],
  deliveryAddressLine1: ['DeliveryAddressLine1', optional(nullable(string()))],
  deliveryAddressLine2: ['DeliveryAddressLine2', optional(nullable(string()))],
  deliveryAddressLine3: ['DeliveryAddressLine3', optional(nullable(string()))],
  deliveryZipCode: ['DeliveryZipCode', optional(nullable(string()))],
  deliveryCity: ['DeliveryCity', optional(nullable(string()))],
  deliveryRegionId: ['DeliveryRegionId', optional(nullable(number()))],
  deliveryRegion: ['DeliveryRegion', optional(nullable(string()))],
  deliveryCountry: ['DeliveryCountry', optional(nullable(string()))],
  deliveryCountryId: ['DeliveryCountryId', optional(nullable(number()))],
  phoneNumber: ['PhoneNumber', optional(string())],
  emailAddress: ['EmailAddress', optional(nullable(string()))],
  pINDeliveryAddressType: [
    'PINDeliveryAddressType',
    optional(nullable(number())),
  ],
  pINAdviceType: ['PINAdviceType', optional(nullable(number()))],
  pINDeliveryContactTitle: [
    'PINDeliveryContactTitle',
    optional(nullable(string())),
  ],
  pINDeliveryContactName: [
    'PINDeliveryContactName',
    optional(nullable(string())),
  ],
  pINDeliveryCompanyName: [
    'PINDeliveryCompanyName',
    optional(nullable(string())),
  ],
  pINDeliveryAddressLine1: [
    'PINDeliveryAddressLine1',
    optional(nullable(string())),
  ],
  pINDeliveryAddressLine2: [
    'PINDeliveryAddressLine2',
    optional(nullable(string())),
  ],
  pINDeliveryAddressLine3: [
    'PINDeliveryAddressLine3',
    optional(nullable(string())),
  ],
  pINDeliveryZipCode: ['PINDeliveryZipCode', optional(nullable(string()))],
  pINDeliveryCity: ['PINDeliveryCity', optional(nullable(string()))],
  pINDeliveryRegionId: ['PINDeliveryRegionId', optional(nullable(number()))],
  pINDeliveryRegion: ['PINDeliveryRegion', optional(nullable(string()))],
  pINDeliveryCountry: ['PINDeliveryCountry', optional(nullable(string()))],
  pINDeliveryCountryId: ['PINDeliveryCountryId', optional(nullable(number()))],
  pINPhoneNumber: ['PINPhoneNumber', optional(nullable(string()))],
  pINEmailAddress: ['PINEmailAddress', optional(nullable(string()))],
  saveForPINReminder: ['SaveForPINReminder', optional(boolean())],
  saveForCardReissue: ['SaveForCardReissue', optional(boolean())],
  expiryDate: ['ExpiryDate', optional(nullable(string()))],
});
