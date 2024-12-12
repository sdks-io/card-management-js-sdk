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
import { CardContact, cardContactSchema } from './cardContact';
import {
  CardDetailAutoRenewEnum,
  cardDetailAutoRenewEnumSchema,
} from './cardDetailAutoRenewEnum';
import { PINContact, pINContactSchema } from './pINContact';

/** Request entity object for CardDetail */
export interface CardDetail {
  /**
   * Payer Id  of the selected payer.<br />
   * Optional if PayerNumber is passed else Mandatory
   */
  payerId?: number | null;
  /**
   * Payer Number of the selected payer.<br />
   * Optional if PayerId is passed else Mandatory
   */
  payerNumber?: string | null;
  /**
   * Account ID of the customer.<br />
   * Optional if AccountNumber is passed, else mandatory.<br />
   * This input is a search criterion, if given.
   */
  accountId?: number | null;
  /**
   * Account Number of the customer.<br />
   * Optional if AccountId is passed, else mandatory.<br />
   * This input is a search criterion, if given.
   */
  accountNumber?: string | null;
  /**
   * Collecting Company Code (Shell Code) of the selected payer.<br />
   * Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.
   */
  colCoCode?: number | null;
  /**
   * Collecting Company Id of the selected payer.<br />
   * Optional If ColCo Code is passed else Mandatory
   */
  colCoId?: number | null;
  /**
   * Card Type ID<br />
   * Mandatory
   */
  cardTypeId?: number | null;
  /**
   * Token Type Id – Linked to the selected card type<br />
   * Optional<br />
   * Default – Assign the default token type associated with the card type of the card being created.<br />
   * The default value will be set by the background process and an error (code 12009) will be thrown by the background process when default value is not identified or invalid token type id is passed in the request.
   */
  tokenTypeId?: number | null;
  /**
   * Text to be printed on the card as Account Name.<br />
   * Optional – When not provided default emboss text associated with the card type will be embossed.<br />
   * Max length: 27<br />
   * The value should be validated against a configured list of allowed characters.<br />
   * [-0-9A-Z,/''.&amp; ÄÖÜÅÆÉØ]
   */
  embossText?: string | null;
  /**
   * Vehicle registration number.<br/>
   * Optional when DriverName is passed else mandatory.<br/>
   * Mandatory when ColCo setting is marked as ‘VRN mandatory’.<br />
   * Max length: 24<br />
   * The value will be validated against a configured list of allowed characters.<br />
   * Default value for the configuration is: [-0-9A-Z,/''.&amp; ÄÖÜÅÆÉØ] .
   * </br>Note: If Driver Name is null or empty, max allowed characters for VRN is 16.  When Driver Name is provided, max allowed characters for VRN is 24.
   */
  vRN?: string | null;
  /**
   * Driver Name.<br />
   * Optional when VRN is passed else mandatory.<br />
   * Max length: 27<br />
   * The value will be validated against a configured list of allowed characters.<br />
   * Default value for the configuration is: [-0-9A-Z,/''.&amp; ÄÖÜÅÆÉØ]<br />
   */
  driverName?: string | null;
  /**
   * Odometer Input to be enabled on the card<br />
   * Optional.<br />
   * Default is False
   */
  odometerInputRequired?: boolean;
  /**
   * FleetId Input to be enabled on the card<br />
   * Optional.<br />
   * Default is False<br />
   * Note: If AllowFleetIdInput settings of the account is disabled and this flag is marked
   *       true in the request, then request will be processed with VRN input required
   *       enabled instead of Fleet Id input required
   */
  fleetIdInputRequired?: boolean;
  /**
   * Purchase category Id<br />
   * Mandatory
   */
  purchaseCategoryId?: number | null;
  /**
   * The encrypted value of self-selected PIN.<br />
   * Optional – When not provided, the PIN will be auto generated(if the card token type supports PIN) and delivered based on the given PIN delivery option.<br />
   * Max Length: 256
   */
  selfSelectedEncryptedPIN?: string;
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
   * Card group ID<br />
   * Optional
   */
  cardGroupId?: number | null;
  /**
   * Card group name<br />
   * This field is mandatory when IsNewCardGroup parameter is set to true.<br />
   * Maximum field length: 40<br />
   * The value will be validated against a configured list of allowed characters.<br />
   * Default value for the configuration is: [0-9A-Z.]
   */
  cardGroupName?: string | null;
  /**
   * This need to be set to true if the card group needs to be created prior to processing the card order and the card needs to be assigned to the newly created card group.<br />
   * Optional<br />
   * Default - False
   */
  isNewCardGroup?: boolean;
  /**
   * This should be set to true if the card group name needs to be printed on the newly created card under a new card group.<br />
   * Optional<br />
   * Default – False<br />
   * Note: This value will be considered only if a new CardGroup is created for the Card.(i.e.when IsNewCardGroup is true)
   *       If the Card is added to an existing CardGroup,
   *       the property ‘PrintOnCard’ set for the CardGroup will determine whether the CardGroupName should be embossed on the Card.
   */
  embossCardGroup?: boolean;
  /**
   * Card delivery type.<br />
   * Mandatory <br />
   * Allowed Value: <br />
   * 1.    Customer Address(Default) <br />
   * 2.    New Delivery Address
   */
  cardDeliveryType: number | null;
  cardContact?: CardContact;
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
   * Mandatory<br />
   * Allowed Values:<br />
   * 1.    Paper<br />
   * 2.    Email<br />
   * 3.    SMS<br />
   * 4.    None <br /> **Note:** Paper delivery not applicable for selfselctedPIN type
   */
  pINAdviceType: number | null;
  pINContact?: PINContact;
  /**
   * True/False.<br />
   * Optional.<br />
   * Default: False<br />
   * If true, the caller would be notified back with the status as success or failure after the card order is processed.
   * This webhook feature has to be subscribed by the customer prior to use , please refer the API documentation for the more details.
   */
  notifyCaller?: boolean;
  /**
   * The caller to be notified with the status of the card order.<br />
   * Mandatory, if NotifyCaller is true.<br />
   * Maximum field length: 20<br />
   * Allowed values:<br />
   * •    “NextGenUI”: This value to be used by next gen UI application.<br />
   * •    “FleetHubUILifeTime”: This value to be used by Fleet Hub UI application for life time restriction cards.<br />
   * Note: The values passed in this field are case insensitive
   */
  caller?: string | null;
  /**
   * True/False.<br />
   * Optional.<br />
   * Default: False<br />
   * If true, the caller would be notified back with the status as success or failed after the processed card is synced with Gateway.
   */
  notifyCallerOnSync?: boolean;
  /**
   * True/False.<br />
   * Optional.<br />
   * Default: False<br />
   * For cards ordered with Validate Fleet Id parameter set to true, CFGW will be notified to enable this validation for the card.<br />
   * Note: When “FleetIdInputRequired” is not set on the card, validate fleet id will be considered false regardless of the value passed on this parameter.
   */
  validateFleetId?: boolean;
  /**
   * Type of action will be performed for the card when the fleet Id is validated.<br />
   * Optional.<br />
   * Default: NO_VALIDATION<br />
   * Allowed values:<br />
   * •    ALERT<br />
   * •    DECLINE<br />
   * •    DECLINE_ALERT<br />
   * •    NO_VALIDATION<br />
   * Note: When FleetIdOption is not provided and validatefleetid is true then by default allowed value is NO_VALIDATION.
   */
  fleetOption?: string | null;
  /**
   * Gateway Bundle Id to which the ordered card will be added.<br />
   * Optional.<br />
   * When a valid bundle Id is passed, upon successful processing of Card Order, the card will be added to the provided bundle in Gateway.
   * If card bundle has crossed the limit of 500 cards or if the card bundle is not available in the gateway then the background services will fail to added the card to the bundle.
   */
  bundleId?: string | null;
  /**
   * The value indicates what actions is to be performed with respect to usage restrictions on the card being ordered.<br />
   * UsageRestrictionAction is mandatory when bundle Id is passed. Else ignored.<br />
   * Allowed values: –<br />
   * • Update<br />
   * • Default<br />
   * • None
   */
  usageRestrictionAction?: string | null;
  /**
   * The value indicates what actions is to be performed with respect to product restrictions on the card being ordered.<br />
   * ProductRestrictionAction is mandatory when bundle Id is passed. Else ignored.<br />
   * Allowed values: -<br />
   * • Update<br />
   * • Default<br />
   * • None<br />
   * Note: This field is applicable when product restrictions
   */
  productRestrictionAction?: string | null;
  /**
   * An array of 3-digit global product codes.<br />
   * Optional.<br />
   * Default restrictions will be applied both products and product groups are null or empty.<br />
   * Note: This field is applicable when product restrictions are migrated to CFGW else, it will be ignored.
   */
  products?: string[];
  /**
   * An array of product group ids.<br />
   * Optional.<br />
   * Default restrictions will be applied both products and product groups are null or empty.<br />
   * Note: This field is applicable when product restrictions are migrated to CFGW else, it will be ignored
   */
  productGroups?: string[];
  /**
   * Expiry Date for newly created card to be update in cards plot form.<br />
   * Optional.<br />
   * Format: MMyy<br />
   * If not apply default Expiry Date.<br />
   * Note: There is a limit to the ExpiryDate which the user can choose for the Card.
   *       The expiry date which can be set for a card depends on the Card Type and the associated business rules for the OU.
   *       If the user chooses a later ExpiryDate than the allowed value for the CardType for the OU,
   *  Default Assigned Expiry Date will be applied on the card.
   */
  expiryDate?: string | null;
  /**
   * This is the Client Reference Id of card in the order which needs to be passed by the client.This will be playback in the ordercard enquiry<br />
   * Optional
   */
  clientReferenceId?: string | null;
  autoRenew?: CardDetailAutoRenewEnum;
}

export const cardDetailSchema: Schema<CardDetail> = object({
  payerId: ['PayerId', optional(nullable(number()))],
  payerNumber: ['PayerNumber', optional(nullable(string()))],
  accountId: ['AccountId', optional(nullable(number()))],
  accountNumber: ['AccountNumber', optional(nullable(string()))],
  colCoCode: ['ColCoCode', optional(nullable(number()))],
  colCoId: ['ColCoId', optional(nullable(number()))],
  cardTypeId: ['CardTypeId', optional(nullable(number()))],
  tokenTypeId: ['TokenTypeId', optional(nullable(number()))],
  embossText: ['EmbossText', optional(nullable(string()))],
  vRN: ['VRN', optional(nullable(string()))],
  driverName: ['DriverName', optional(nullable(string()))],
  odometerInputRequired: ['OdometerInputRequired', optional(boolean())],
  fleetIdInputRequired: ['FleetIdInputRequired', optional(boolean())],
  purchaseCategoryId: ['PurchaseCategoryId', optional(nullable(number()))],
  selfSelectedEncryptedPIN: ['SelfSelectedEncryptedPIN', optional(string())],
  selfSelectedPINKeyID: ['SelfSelectedPINKeyID', optional(nullable(string()))],
  selfSelectedPINSessionKey: [
    'SelfSelectedPINSessionKey',
    optional(nullable(string())),
  ],
  cardGroupId: ['CardGroupId', optional(nullable(number()))],
  cardGroupName: ['CardGroupName', optional(nullable(string()))],
  isNewCardGroup: ['IsNewCardGroup', optional(boolean())],
  embossCardGroup: ['EmbossCardGroup', optional(boolean())],
  cardDeliveryType: ['CardDeliveryType', nullable(number())],
  cardContact: ['CardContact', optional(lazy(() => cardContactSchema))],
  pINDeliveryAddressType: [
    'PINDeliveryAddressType',
    optional(nullable(number())),
  ],
  pINAdviceType: ['PINAdviceType', nullable(number())],
  pINContact: ['PINContact', optional(lazy(() => pINContactSchema))],
  notifyCaller: ['NotifyCaller', optional(boolean())],
  caller: ['Caller', optional(nullable(string()))],
  notifyCallerOnSync: ['NotifyCallerOnSync', optional(boolean())],
  validateFleetId: ['ValidateFleetId', optional(boolean())],
  fleetOption: ['FleetOption', optional(nullable(string()))],
  bundleId: ['BundleId', optional(nullable(string()))],
  usageRestrictionAction: [
    'UsageRestrictionAction',
    optional(nullable(string())),
  ],
  productRestrictionAction: [
    'ProductRestrictionAction',
    optional(nullable(string())),
  ],
  products: ['Products', optional(array(string()))],
  productGroups: ['ProductGroups', optional(array(string()))],
  expiryDate: ['ExpiryDate', optional(nullable(string()))],
  clientReferenceId: ['ClientReferenceId', optional(nullable(string()))],
  autoRenew: ['AutoRenew', optional(cardDetailAutoRenewEnumSchema)],
});
