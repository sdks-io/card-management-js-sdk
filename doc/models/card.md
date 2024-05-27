
# Card

## Structure

`Card`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| null \| undefined` | Optional | Account ID |
| `accountName` | `string \| null \| undefined` | Optional | Account Name |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `accountShortName` | `string \| null \| undefined` | Optional | Account Short Name |
| `bundleId` | `string \| null \| undefined` | Optional | Bundle Id associated with card in the Gateway.<br /><br>This field will have null value if the card is not associated with any bundle in Gateway or the value of IncludeBundleDetails in request is false. |
| `cardBlockSchedules` | [`CardBlockSchedule[] \| undefined`](../../doc/models/card-block-schedule.md) | Optional | List of Scheduled Card Blocks details<br /><br>Entity: CardBlockSchedule |
| `cardGroupId` | `number \| null \| undefined` | Optional | Card group ID |
| `cardGroupName` | `string \| null \| undefined` | Optional | Card group name |
| `cardId` | `number \| null \| undefined` | Optional | Unique Card Id |
| `cardTypeCode` | `string \| null \| undefined` | Optional | ISO code of the card i.e. first 7 digits of the PAN |
| `cardTypeId` | `number \| null \| undefined` | Optional | Card Type ID Example Id and Description: 1 -Philippines CRT 7077861 2-Philippines<br /><br>Fleet 7002861 5-SHELL FLEET-HONG KONG 7002821 6-SHELL NHF- HONG KONG 7002821 7-SHELL CRT- HONG KONG 7077821 |
| `cardTypeName` | `string \| null \| undefined` | Optional | Card Type Name Example Id and Description: 1-Philippines CRT 7077861 2-Philippines <br /><br>Fleet 7002861 5-SHELL FLEET- HONG KONG 7002821 6-SHELL NHF- HONG KONG 7002821 7-SHELL  CRT- HONG KONG 7077821 |
| `colCoCountryCode` | `string \| null \| undefined` | Optional | The 2 character ISO Code for the customer and card owning country. <br /><br>If default card type is not set then the first two alphabets of the account ID is returned. |
| `creationDate` | `string \| null \| undefined` | Optional | Card Creation datetime.<br /><br>Format: yyyyMMdd HH:mm:ss<br /><br>Note: Clients to convert this to appropriate DateTime type. |
| `driverName` | `string \| null \| undefined` | Optional | Driver name |
| `effectiveDate` | `string \| null \| undefined` | Optional | Effective date for the Card<br /><br>Format: yyyyMMdd<br /><br>Note: Clients to convert this to appropriate DateTime type. |
| `expiryDate` | `string \| null \| undefined` | Optional | Expiry date of the card.<br /><br>Format: yyyyMMdd<br /><br>Note: Clients to convert this to appropriate DateTime type. |
| `fleetIdInput` | `boolean \| undefined` | Optional | True/False True if fleet id input is enabled, else false |
| `isCRT` | `boolean \| undefined` | Optional | True/False True if it is a CRT type card, else false |
| `isFleet` | `boolean \| undefined` | Optional | True/False True if it is a Fleet type card, else false |
| `isInternational` | `boolean \| undefined` | Optional | True/False True if it is an international card, else false |
| `isNational` | `boolean \| undefined` | Optional | True/False True if it is a national card, else false |
| `isPartnerSitesIncluded` | `boolean \| undefined` | Optional | True/False True if it is allowed at all partner sites, else false |
| `isShellSitesOnly` | `boolean \| undefined` | Optional | True/False True if it is only allowed at Shell sites, else false |
| `issueDate` | `string \| null \| undefined` | Optional | Issue date<br /><br>Format: yyyyMMdd<br /><br>Note: Clients to convert this to appropriate DateTime type. |
| `isSuperseded` | `boolean \| undefined` | Optional | True/False True if a new card is issued with the same PAN, else false. |
| `isVirtualCard` | `boolean \| undefined` | Optional | True/False True if it is a virtual card, else false |
| `lastModifiedDate` | `string \| null \| undefined` | Optional | Card last modified date and time<br /><br>Format: yyyyMMdd HH:mm:ss<br /><br>Note: Clients to convert this to appropriate DateTime type. |
| `lastUsedDate` | `string \| null \| undefined` | Optional | Card last used date .<br /><br>Note: last used date of a card will be calculated based on billed/unbilled sales items<br>of a given card.The query that extracts the last used dates will be applied on the<br>subset of the cards being returned to the client.Unbilled sales items is checked<br>first and for those not found in the unbilled table, sales items will be checked<br>(only when the last used date is not found in unbilled table for at least a single<br>card from the result). The transactions in last 48 hours are not expected to be<br>Therefore this field gives the correct information up to 48 hours early.<br /><br>Format: yyyyMMdd HH:mm:ss<br /><br>Note: Clients to convert this to appropriate DateTime type |
| `localCurrencyCode` | `string \| null \| undefined` | Optional | ISO code of the local currency. <br /> |
| `localCurrencySymbol` | `string \| null \| undefined` | Optional | Local currency symbol. <br /> |
| `odometerInput` | `boolean \| undefined` | Optional | True/False True if odometer input is enabled on the card, else false |
| `pAN` | `string \| null \| undefined` | Optional | Card PAN Mask PAN (Mask all digits except the Last 6 digits of the PAN) |
| `purchaseCategoryCode` | `string \| null \| undefined` | Optional | Purchase category code |
| `purchaseCategoryId` | `number \| null \| undefined` | Optional | Purchase category Id <br /><br>Note: Not Purchase code. |
| `purchaseCategoryName` | `string \| null \| undefined` | Optional | Purchase category name |
| `reason` | `string \| null \| undefined` | Optional | Card Status reason Example: Lost Stolen Card no longer required |
| `reissueSetting` | `string \| null \| undefined` | Optional | Reissue setting of the card. If the card is superseded (i.e. a replacement/new card is issued) then reissue setting of the latest card issued. <br /><br>Values<br /><br>•True –Card will be Reissued when nearing its expiry date <br /><br>•False –Card will not be Reissued |
| `statusDescription` | `string \| null \| undefined` | Optional | Status Description (Active, Temporarily Blocked, etc.,)<br /><br>Possible Ids and description: 1 Active 7 Blocked Card 8 Expired 9 Cancelled 10 New 23 Pending Renewal 31 Replaced 41<br /><br>Temporary Block(Customer) 42 Temporary Block(Shell) 43 Fraud 101 Active(Block in progress)<br /><br><br>* 102 Blocked Card(Unblock in progress) <br /><br>* 103 Active(Cancel in progress) <br /><br>* 104 Active(Marked as damaged)<br /><br>* 105 New(Cancel in progress) <br /><br>* 106 { Status}(Scheduled for block)<br /><br>* 107 { Status}(Scheduled for unblock) <br /><br>  *# Note: Items marked with* are intermediate statuses  to indicate that there are pending requests in progress.<br /><br>  The response can contain these intermediate statuses only if the<br /><br>  IncludeIntermediateStatus flag is true. The placeholder { Status} in the items<br /><br>  marked with # will be replaced with the  status description. E.g., Active (Scheduled for block) |
| `statusId` | `number \| null \| undefined` | Optional | Card Status id Possible Ids and description: 1 Active 7 Blocked Card 8 Expired 9 Cancelled 10 New 23 Pending Renewal 31 Replaced 41 Temporary Block(Customer) 42 <br /><br>Temporary Block(Shell) 43 Fraud 101 Active(Block in progress) <br /><br><br>* 102 Blocked Card(Unblock in progress)<br /><br>* 103 Active(Cancel in progress) <br /><br>* 104 Active(Marked as damaged) <br /><br>* 105 New(Cancel in progress)<br /><br>* 106 { Status}(Scheduled for block) <br /><br><br># 107 {Status}(Scheduled for unblock)<br /><br><br>*# Note: Items marked with* are intermediate statuses to indicate that there are pending requests in progress.<br /><br>The response can contain these intermediate statuses only if the IncludeIntermediateStatus flag is true.<br /><br>The placeholder { Status} in the items marked with # will be replaced with<br /><br>the status description. E.g., Active (Scheduled for block) |
| `tokenTypeID` | `number \| null \| undefined` | Optional | Token Type ID configured for the Card E.g. 107 |
| `tokenTypeName` | `string \| undefined` | Optional | Token Type Name configured for the Card |
| `vRN` | `string \| null \| undefined` | Optional | Vehicle registration number |
| `clientReferenceId` | `string \| null \| undefined` | Optional | Customer reference number of the card. |
| `isEMVContact` | `boolean \| undefined` | Optional | Is Europay, MasterCard, and Visa Contact enabled or not. |
| `isEMVContactless` | `boolean \| undefined` | Optional | Is Europay, MasterCard, and Visa Contactless enabled or not. |
| `isRFID` | `boolean \| undefined` | Optional | Whether the card type is enabled for RFID (Radio Frequency Identification) |
| `rFIDUID` | `string \| null \| undefined` | Optional | RFIDUID |
| `eMAID` | `string \| null \| undefined` | Optional | EMAID |
| `eVPrintedNumber` | `string \| null \| undefined` | Optional | EV Printed Number |
| `cardMediaCode` | `string \| null \| undefined` | Optional | Card Media Code. |

## Example (as JSON)

```json
{
  "AccountId": 140,
  "AccountName": "AccountName0",
  "AccountNumber": "AccountNumber4",
  "AccountShortName": "AccountShortName6",
  "BundleId": "BundleId2"
}
```

