
# Card Detail

Request entity object for CardDetail

## Structure

`CardDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id  of the selected payer.<br /><br>Optional if PayerNumber is passed else Mandatory |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the selected payer.<br /><br>Optional if PayerId is passed else Mandatory |
| `accountId` | `number \| null \| undefined` | Optional | Account ID of the customer.<br /><br>Optional if AccountNumber is passed, else mandatory.<br /><br>This input is a search criterion, if given. |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the customer.<br /><br>Optional if AccountId is passed, else mandatory.<br /><br>This input is a search criterion, if given. |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer.<br /><br>Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided. |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting Company Id of the selected payer.<br /><br>Optional If ColCo Code is passed else Mandatory |
| `cardTypeId` | `number \| null \| undefined` | Optional | Card Type ID<br /><br>Mandatory<br>**Constraints**: `>= 1`, `<= 2147483647` |
| `tokenTypeId` | `number \| null \| undefined` | Optional | Token Type Id – Linked to the selected card type<br /><br>Optional<br /><br>Default – Assign the default token type associated with the card type of the card being created.<br /><br>The default value will be set by the background process and an error (code 12009) will be thrown by the background process when default value is not identified or invalid token type id is passed in the request.<br>**Constraints**: `>= 1`, `<= 2147483647` |
| `embossText` | `string \| null \| undefined` | Optional | Text to be printed on the card as Account Name.<br /><br>Optional – When not provided default emboss text associated with the card type will be embossed.<br /><br>Max length: 27<br /><br>The value should be validated against a configured list of allowed characters.<br /><br>[-0-9A-Z,/''.&amp; ÄÖÜÅÆÉØ]<br>**Constraints**: *Maximum Length*: `25` |
| `vRN` | `string \| null \| undefined` | Optional | Vehicle registration number.<br/><br>Optional when DriverName is passed else mandatory.<br/><br>Mandatory when ColCo setting is marked as ‘VRN mandatory’.<br /><br>Max length: 24<br /><br>The value will be validated against a configured list of allowed characters.<br /><br>Default value for the configuration is: [-0-9A-Z,/''.&amp; ÄÖÜÅÆÉØ] .<br></br>Note: If Driver Name is null or empty, max allowed characters for VRN is 16.  When Driver Name is provided, max allowed characters for VRN is 24.<br>**Constraints**: *Maximum Length*: `24` |
| `driverName` | `string \| null \| undefined` | Optional | Driver Name.<br /><br>Optional when VRN is passed else mandatory.<br /><br>Max length: 27<br /><br>The value will be validated against a configured list of allowed characters.<br /><br>Default value for the configuration is: [-0-9A-Z,/''.&amp; ÄÖÜÅÆÉØ]<br /><br>**Constraints**: *Maximum Length*: `27` |
| `odometerInputRequired` | `boolean \| undefined` | Optional | Odometer Input to be enabled on the card<br /><br>Optional.<br /><br>Default is False |
| `fleetIdInputRequired` | `boolean \| undefined` | Optional | FleetId Input to be enabled on the card<br /><br>Optional.<br /><br>Default is False<br /><br>Note: If AllowFleetIdInput settings of the account is disabled and this flag is marked<br>true in the request, then request will be processed with VRN input required<br>enabled instead of Fleet Id input required |
| `purchaseCategoryId` | `number \| null \| undefined` | Optional | Purchase category Id<br /><br>Mandatory<br>**Constraints**: `>= 1`, `<= 2147483647` |
| `selfSelectedEncryptedPIN` | `string \| undefined` | Optional | The encrypted value of self-selected PIN.<br /><br>Optional – When not provided, the PIN will be auto generated(if the card token type supports PIN) and delivered based on the given PIN delivery option.<br /><br>Max Length: 256<br>**Constraints**: *Maximum Length*: `256` |
| `selfSelectedPINKeyID` | `string \| null \| undefined` | Optional | KeyId of the PIN encrypted value.<br /><br>Mandatory, if opted for self-selected PIN else optional.<br /><br>Max Length: 30<br>**Constraints**: *Maximum Length*: `30` |
| `selfSelectedPINSessionKey` | `string \| null \| undefined` | Optional | Encoded message of the TCS form which is used for encrypting the PIN of this card.<br /><br>The encode message forms are provided to clients by another API (“TCS”).<br /><br>Instructions to encrypt the PIN is covered in the related API specifications document.<br /><br>Mandatory –If opted for self-selected PIN else optional.<br>Max Length: 1024<br>**Constraints**: *Maximum Length*: `1024` |
| `cardGroupId` | `number \| null \| undefined` | Optional | Card group ID<br /><br>Optional |
| `cardGroupName` | `string \| null \| undefined` | Optional | Card group name<br /><br>This field is mandatory when IsNewCardGroup parameter is set to true.<br /><br>Maximum field length: 40<br /><br>The value will be validated against a configured list of allowed characters.<br /><br>Default value for the configuration is: [0-9A-Z.]<br>**Constraints**: *Maximum Length*: `40` |
| `isNewCardGroup` | `boolean \| undefined` | Optional | This need to be set to true if the card group needs to be created prior to processing the card order and the card needs to be assigned to the newly created card group.<br /><br>Optional<br /><br>Default - False |
| `embossCardGroup` | `boolean \| undefined` | Optional | This should be set to true if the card group name needs to be printed on the newly created card under a new card group.<br /><br>Optional<br /><br>Default – False<br /><br>Note: This value will be considered only if a new CardGroup is created for the Card.(i.e.when IsNewCardGroup is true)<br>If the Card is added to an existing CardGroup,<br>the property ‘PrintOnCard’ set for the CardGroup will determine whether the CardGroupName should be embossed on the Card. |
| `cardDeliveryType` | `number \| null` | Required | Card delivery type.<br /><br>Mandatory <br /><br>Allowed Value: <br /><br><br>1. Customer Address(Default) <br /><br>2. New Delivery Address<br>**Constraints**: `>= 1`, `<= 2` |
| `cardContact` | [`CardDeliveryContact \| undefined`](../../doc/models/card-delivery-contact.md) | Optional | Request entity object for CardDeliveryContact<br>Mandatory when CardDeliveryType is 2 else ignored. |
| `pINDeliveryAddressType` | `number \| null \| undefined` | Optional | PIN delivery address type selection.<br /><br>Optional<br /><br>Allowed Values:<br /><br><br>1. Customer Address(Default)<br /><br>2. Card Address<br /><br>3. New Delivery Address<br>**Constraints**: `>= 1`, `<= 3` |
| `pINAdviceType` | `number \| null` | Required | PIN delivery method.<br /><br>Mandatory<br /><br>Allowed Values:<br /><br><br>1. Paper<br /><br>2. Email<br /><br>3. SMS<br /><br>4. None <br /> **Note:** Paper delivery not applicable for selfselctedPIN type<br>**Constraints**: `>= 1`, `<= 4` |
| `pINContact` | [`PINDeliveryContact \| undefined`](../../doc/models/pin-delivery-contact.md) | Optional | Request entity object for PINDeliveryContact<br>Mandatory when PINDeliveryAddressType is ‘3’ (New delivery address). Else, ignored. |
| `notifyCaller` | `boolean \| undefined` | Optional | True/False.<br /><br>Optional.<br /><br>Default: False<br /><br>If true, the caller would be notified back with the status as success or failure after the card order is processed.<br>This webhook feature has to be subscribed by the customer prior to use , please refer the API documentation for the more details. |
| `caller` | `string \| null \| undefined` | Optional | The caller to be notified with the status of the card order.<br /><br>Mandatory, if NotifyCaller is true.<br /><br>Maximum field length: 20<br /><br>Allowed values:<br /><br>•	“NextGenUI”: This value to be used by next gen UI application.<br /><br>•	“FleetHubUILifeTime”: This value to be used by Fleet Hub UI application for life time restriction cards.<br /><br>Note: The values passed in this field are case insensitive<br>**Constraints**: *Maximum Length*: `20` |
| `notifyCallerOnSync` | `boolean \| undefined` | Optional | True/False.<br /><br>Optional.<br /><br>Default: False<br /><br>If true, the caller would be notified back with the status as success or failed after the processed card is synced with Gateway. |
| `validateFleetId` | `boolean \| undefined` | Optional | True/False.<br /><br>Optional.<br /><br>Default: False<br /><br>For cards ordered with Validate Fleet Id parameter set to true, CFGW will be notified to enable this validation for the card.<br /><br>Note: When “FleetIdInputRequired” is not set on the card, validate fleet id will be considered false regardless of the value passed on this parameter. |
| `fleetOption` | `string \| null \| undefined` | Optional | Type of action will be performed for the card when the fleet Id is validated.<br /><br>Optional.<br /><br>Default: NO_VALIDATION<br /><br>Allowed values:<br /><br>•	ALERT<br /><br>•	DECLINE<br /><br>•	DECLINE_ALERT<br /><br>•	NO_VALIDATION<br /><br>Note: When FleetIdOption is not provided and validatefleetid is true then by default allowed value is NO_VALIDATION. |
| `bundleId` | `string \| null \| undefined` | Optional | Gateway Bundle Id to which the ordered card will be added.<br /><br>Optional.<br /><br>When a valid bundle Id is passed, upon successful processing of Card Order, the card will be added to the provided bundle in Gateway.<br>If card bundle has crossed the limit of 500 cards or if the card bundle is not available in the gateway then the background services will fail to added the card to the bundle. |
| `usageRestrictionAction` | `string \| null \| undefined` | Optional | The value indicates what actions is to be performed with respect to usage restrictions on the card being ordered.<br /><br>UsageRestrictionAction is mandatory when bundle Id is passed. Else ignored.<br /><br>Allowed values: –<br /><br>• Update<br /><br>• Default<br /><br>• None |
| `productRestrictionAction` | `string \| null \| undefined` | Optional | The value indicates what actions is to be performed with respect to product restrictions on the card being ordered.<br /><br>ProductRestrictionAction is mandatory when bundle Id is passed. Else ignored.<br /><br>Allowed values: -<br /><br>• Update<br /><br>• Default<br /><br>• None<br /><br>Note: This field is applicable when product restrictions |
| `products` | `string[] \| undefined` | Optional | An array of 3-digit global product codes.<br /><br>Optional.<br /><br>Default restrictions will be applied both products and product groups are null or empty.<br /><br>Note: This field is applicable when product restrictions are migrated to CFGW else, it will be ignored. |
| `productGroups` | `string[] \| undefined` | Optional | An array of product group ids.<br /><br>Optional.<br /><br>Default restrictions will be applied both products and product groups are null or empty.<br /><br>Note: This field is applicable when product restrictions are migrated to CFGW else, it will be ignored |
| `expiryDate` | `string \| null \| undefined` | Optional | Expiry Date for newly created card to be update in cards plot form.<br /><br>Optional.<br /><br>Format: MMyy<br /><br>If not apply default Expiry Date.<br /><br>Note: There is a limit to the ExpiryDate which the user can choose for the Card.<br>The expiry date which can be set for a card depends on the Card Type and the associated business rules for the OU.<br>If the user chooses a later ExpiryDate than the allowed value for the CardType for the OU,<br>Default Assigned Expiry Date will be applied on the card. |
| `clientReferenceId` | `string \| null \| undefined` | Optional | This is the Client Reference Id of card in the order which needs to be passed by the client.This will be playback in the ordercard enquiry<br /><br>Optional<br>**Constraints**: *Maximum Length*: `50` |
| `autoRenew` | [`CardDetailAutoRenewEnum \| undefined`](../../doc/models/card-detail-auto-renew-enum.md) | Optional | Whether to reissue card automatically when nearing the expiry.<br><br>Allowed values: -<br><br>1. As per card type setting (Default).<br>2. Card will be Reissued when nearing its expiry date.<br>3. Card will not be Reissued. |

## Example (as JSON)

```json
{
  "PayerId": 90,
  "PayerNumber": "PayerNumber8",
  "AccountId": 150,
  "AccountNumber": "AccountNumber0",
  "ColCoCode": 56,
  "CardDeliveryType": 80,
  "PINAdviceType": 184
}
```
