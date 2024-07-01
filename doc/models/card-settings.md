
# Card Settings

## Structure

`CardSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `selfSelectedEncryptedPIN` | `string \| null \| undefined` | Optional | The encrypted value of self-selected PIN.<br /><br>Optional – When not provided, the PIN will be auto generated(if the card token type supports PIN) and delivered based on the given PIN delivery option.<br /><br>Max Length: 256<br>**Constraints**: *Maximum Length*: `256` |
| `selfSelectedPINKeyID` | `string \| null \| undefined` | Optional | KeyId of the PIN encrypted value.<br /><br>Mandatory, if opted for self-selected PIN else optional.<br /><br>Max Length: 30<br>**Constraints**: *Maximum Length*: `30` |
| `selfSelectedPINSessionKey` | `string \| null \| undefined` | Optional | Encoded message of the TCS form which is used for encrypting the PIN of this card.<br /><br>The encode message forms are provided to clients by another API (“TCS”).<br /><br>Instructions to encrypt the PIN is covered in the related API specifications document.<br /><br>Mandatory –If opted for self-selected PIN else optional.<br>Max Length: 1024<br>**Constraints**: *Maximum Length*: `1024` |
| `validateFleetId` | `boolean \| undefined` | Optional | True/False.<br /><br>Optional <br /><br>Default: False<br /><br>For cards ordered with Validate Fleet Id parameter set to true, CFGW will be notified to enable this validation for the card.<br /><br>Note: When “FleetIdInputRequired” is not set on the card, validate fleet id will be considered false regardless of the value passed on this parameter. |
| `cardGroupId` | `number \| null \| undefined` | Optional | Existing Card Group ID, under which the replacement card is to be created.<br /><br>Pass “-1” if the replacement card should not be assigned to any card group.<br /><br>Optional <br /><br>If not provided, the replacement card will be created under the same card group as the current card. |
| `cardDeliveryType` | `number \| null` | Required | Card delivery type.<br /><br>Mandatory <br /><br>Allowed Value: <br /><br><br>1. Customer Address(Default) <br /><br>2. New Delivery Address <br /><br>3. Old Card Address |
| `deliveryContactTitle` | `string \| null \| undefined` | Optional | Title of the contact person. <br /><br>Optional<br /><br>Max field length: 10<br>**Constraints**: *Maximum Length*: `10` |
| `deliveryContactName` | `string \| null \| undefined` | Optional | Name of the contact person <br /><br>Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true.<br /><br>Max field length: 50<br>**Constraints**: *Maximum Length*: `50` |
| `deliveryCompanyName` | `string \| null \| undefined` | Optional | Company name <br /><br>Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true.<br>Max field length: 50<br>**Constraints**: *Maximum Length*: `50` |
| `deliveryAddressLine1` | `string \| null \| undefined` | Optional | Address line 1 <br /><br>Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true.<br /><br>Max field length: 40<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryAddressLine2` | `string \| null \| undefined` | Optional | Address line 2 <br /><br>Optional <br /><br>Max field length: 40<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryAddressLine3` | `string \| null \| undefined` | Optional | Address line 3 <br /><br>Optional<br /><br>Max field length: 40<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryZipCode` | `string \| null \| undefined` | Optional | ZIP code <br /><br>Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true.<br /><br>Max field length: 10<br>**Constraints**: *Maximum Length*: `10` |
| `deliveryCity` | `string \| null \| undefined` | Optional | City  <br /><br>Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true.<br /><br>Max field length: 40<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryRegionId` | `number \| null \| undefined` | Optional | Region Id  <br /><br>Optional |
| `deliveryRegion` | `string \| null \| undefined` | Optional | Region  <br /><br>Optional<br /><br>When region is passed |
| `deliveryCountry` | `string \| null \| undefined` | Optional | The ISO code of the country.<br /><br>Mandatory - If CardDeliveryType  is 2 and OrderCardReplacement is passed as true |
| `deliveryCountryId` | `number \| null \| undefined` | Optional | The countryId of gicen country.<br /> |
| `phoneNumber` | `string \| undefined` | Optional | Phone number for to send SMS. <br /><br>Optional<br /><br>Max field length: 20<br>**Constraints**: *Maximum Length*: `16` |
| `emailAddress` | `string \| null \| undefined` | Optional | Email address for to send email.<br /><br>Mandatory if PINAdviceType is email else optional.<br /><br>Max field length: 90<br>**Constraints**: *Maximum Length*: `90` |
| `pINDeliveryAddressType` | `number \| null \| undefined` | Optional | PIN delivery address type selection.<br /><br>Optional<br /><br>Allowed Values:<br /><br><br>1. Customer Address(Default)<br /><br>2. Card Address<br /><br>3. New Delivery Address |
| `pINAdviceType` | `number \| null \| undefined` | Optional | PIN delivery method.<br /><br>Mandatory when OrderReplacement Is true.<br /><br>Allowed Values:<br /><br><br>1. Paper<br /><br>2. Email<br /><br>3. SMS<br /><br>4. None |
| `pINDeliveryContactTitle` | `string \| null \| undefined` | Optional | Title of the contact person.<br /><br>Optional <br /><br>Max field length: 10<br>**Constraints**: *Maximum Length*: `10` |
| `pINDeliveryContactName` | `string \| null \| undefined` | Optional | Name of the contact person.<br /><br>Mandatory - If PINAdviceType is paper else optional.<br /><br>Max field length: 50<br>**Constraints**: *Maximum Length*: `50` |
| `pINDeliveryCompanyName` | `string \| null \| undefined` | Optional | Company name.<br /><br>Mandatory - If PINAdviceType is paper else optional.<br /><br>Max field length: 50<br>**Constraints**: *Maximum Length*: `50` |
| `pINDeliveryAddressLine1` | `string \| null \| undefined` | Optional | Address line 1.<br /><br>Mandatory - If PINAdviceType is paper else optional.<br /><br>Max field length: 40<br>**Constraints**: *Maximum Length*: `40` |
| `pINDeliveryAddressLine2` | `string \| null \| undefined` | Optional | Address line 2.<br /><br>Optional <br /><br>Max field length: 40<br>**Constraints**: *Maximum Length*: `40` |
| `pINDeliveryAddressLine3` | `string \| null \| undefined` | Optional | Address line 3.<br /><br>Optional <br /><br>Max field length: 40<br>**Constraints**: *Maximum Length*: `40` |
| `pINDeliveryZipCode` | `string \| null \| undefined` | Optional | ZIP code.<br /><br>Mandatory - if PINAdviceType is paper else optional. <br /><br>Max field length: 10<br>**Constraints**: *Maximum Length*: `10` |
| `pINDeliveryCity` | `string \| null \| undefined` | Optional | City.<br /><br>Mandatory - If PINAdviceType is paper else optional. <br /><br>Max field length: 40<br>**Constraints**: *Maximum Length*: `40` |
| `pINDeliveryRegionId` | `number \| null \| undefined` | Optional | Region Id.<br /><br>Optional |
| `pINDeliveryRegion` | `string \| null \| undefined` | Optional | Region.<br /><br>When region is passed |
| `pINDeliveryCountry` | `string \| null \| undefined` | Optional | The ISO code of the country.<br /><br>Mappings for ISO code <br /><br>Mandatory if PINAdviceType is paper else optional. |
| `pINDeliveryCountryId` | `number \| null \| undefined` | Optional | The countryId of the country.<br /><br>Mappings for ISO code<br /><br>This is not an input parameter. |
| `pINPhoneNumber` | `string \| null \| undefined` | Optional | Phone number for to send SMS of the PIN in case PINAdviceType is SMS.<br /><br>Mandatory if PINAdviceType is SMS else optional.<br /><br>Max field length: 20<br>**Constraints**: *Maximum Length*: `16` |
| `pINEmailAddress` | `string \| null \| undefined` | Optional | Email address for to send email of the PIN in case PINAdviceType is Email.<br /><br>Mandatory if PINAdviceType is email else optional.<br /><br>Max field length: 90<br>**Constraints**: *Maximum Length*: `90` |
| `saveForPINReminder` | `boolean \| undefined` | Optional | The given address will be used for sending PIN reminders in future when requested.<br /><br>PIN Advice type should be Paper<br>Optional |
| `saveForCardReissue` | `boolean \| undefined` | Optional | If this is specified, the contact address will be saved in cards platform for card reissue processing.<br /><br>Optional |
| `expiryDate` | `string \| null \| undefined` | Optional | Expiry Date for newly created card to be update in cards plot form.<br /><br>Optional <br /><br>Format: MMyy <br /><br>Eg:1221 <br /><br>If not apply the default Expiry Date.<br /><br>Note:<br /><br>There is a limit to the ExpiryDate which the user can choose for the Card.<br>If the user chooses a later ExpiryDate than the allowed value for the CardType of the OU,<br>the background service logs the respective error code and description<br>**Constraints**: *Maximum Length*: `4` |

## Example (as JSON)

```json
{
  "SelfSelectedEncryptedPIN": "SelfSelectedEncryptedPIN8",
  "SelfSelectedPINKeyID": "SelfSelectedPINKeyID2",
  "SelfSelectedPINSessionKey": "SelfSelectedPINSessionKey4",
  "ValidateFleetId": false,
  "CardGroupId": 118,
  "CardDeliveryType": 2
}
```

