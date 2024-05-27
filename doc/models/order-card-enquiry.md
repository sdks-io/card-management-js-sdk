
# Order Card Enquiry

This entity models the data that is sent in the https

## Structure

`OrderCardEnquiry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| null \| undefined` | Optional | Account ID on the card request |
| `accountNumber` | `string \| null \| undefined` | Optional | AccountNumber |
| `bCOReference` | `number \| null \| undefined` | Optional | Bulk card order request refrence numer.<br /><br>This field will be null if the order is not through BCO. |
| `bCORowNumber` | `number \| null \| undefined` | Optional | Row number of the request in the BCO file.<br /><br>This field will be null if the order is not through BCO. |
| `cardGroupId` | `number \| null \| undefined` | Optional | Card group ID |
| `cardGroupName` | `string \| null \| undefined` | Optional | Card group name |
| `cardId` | `number \| null \| undefined` | Optional | Unique Card Id.<br /><br>The field will be null if the card order request is not successly processed. |
| `cardPAN` | `string \| null \| undefined` | Optional | Card PAN.<br /><br>Mask PAN (Mask all digits except the Last 6 digits of the PAN).<br /><br>The field will be null if the card order request is not successly processed. |
| `cardTypeCode` | `string \| null \| undefined` | Optional | CardTypeCode<br /><br>ISO code of the card i.e. first 7 digits of the PAN |
| `cardTypeId` | `number \| null \| undefined` | Optional | CardTypeId |
| `cardTypeName` | `string \| null \| undefined` | Optional | CardTypeName |
| `driverName` | `string \| null \| undefined` | Optional | Driver name |
| `errorCode` | `string \| null \| undefined` | Optional | Error code for the order card request.<br /><br>The value will be 0000 if it is processed without errors. |
| `errorDescription` | `string \| null \| undefined` | Optional | Error description for the order card request.<br /><br>The value will be empty string if it is processed without errors. |
| `gatewaySyncErrorCode` | `string \| null \| undefined` | Optional | Error code for the Gateway sync error.<br /><br>The value will be 0000 if it is processed without errors. |
| `gatewaySyncErrorDescription` | `string \| null \| undefined` | Optional | Error description for the Gateway sync error.<br /><br>The value will be empty string if it is processed without errors. |
| `gatewaySyncStatus` | `string \| null \| undefined` | Optional | GatewaySyncStatus<br /><br>Status of the card sync with CFGW.<br /><br>Possible values:<br /><br>-Success<br /><br>-Failed<br /><br>-In Progress<br /><br>-Not Submitted |
| `mainReference` | `number \| undefined` | Optional | Main reference number for the order card request.<br /><br>This field will be null if the order is through BCO. |
| `orderCardReference` | `number \| undefined` | Optional | Indivitual card reference number for the order card request.<br /><br>This field will be null if the order is through BCO. |
| `orderStatus` | `string \| null \| undefined` | Optional | Order status.<br /><br>Possible values:<br /><br>P   Pending<br /><br>I   Picked up for processing<br /><br>PX	Failed at Queue but retry attempts pending<br /><br>X	Failed  at Queue<br /><br>R	Card is processed, awaiting for PAN update.<br /><br>S	Processed<br /><br>F	Failed |
| `payerId` | `number \| undefined` | Optional | Payer ID on the card request. |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number on the card request |
| `processedDate` | `string \| null \| undefined` | Optional | Date and time (in cutomers local time) when the card order request is processed<br /><br>Format: yyyyMMdd HH:mm:ss<br /><br>Note: The client application to convert the string to appropriate date/time type. |
| `purchaseCategoryCode` | `string \| null \| undefined` | Optional | PurchaseCategoryCode |
| `purchaseCategoryId` | `number \| null \| undefined` | Optional | PurchaseCategoryId <br /><br>Note: Not Purchase code. This is a unique purchase category id assigned |
| `purchaseCategoryName` | `string \| null \| undefined` | Optional | PurchaseCategoryName |
| `submittedDate` | `string \| null \| undefined` | Optional | Date and time (in cutomers local time) when the card order request is submitted.<br /><br>Format: yyyyMMdd HH:mm:ss<br /><br>Note: The client application to convert the string to appropriate date/time type. |
| `syncProcessedDate` | `string \| null \| undefined` | Optional | SyncProcessedDate<br /><br>Date and time (in cutomers local time) when the sync card request is processed.<br /><br>Format: yyyyMMdd HH:mm:ss<br /><br>Note: The client application to convert the string to appropriate date/time type. |
| `syncRequestedDate` | `string \| null \| undefined` | Optional | SyncRequestedDate<br /><br>Date and time (in cutomers local time) when the sync card request is submitted.<br /><br>Format: yyyyMMdd HH:mm:ss <br /><br>Note: The client application to convert the string to appropriate date/time type. |
| `vRN` | `string \| null \| undefined` | Optional | Vehicle registration number |
| `orderRequestId` | `string \| null \| undefined` | Optional | Unique Id of the Original Order card request, the status of which is enquired by this API. <br /><br>This is returned for end to end traceability of a request based on the original Order Card request. |
| `expiryDate` | `string \| null \| undefined` | Optional | Expiry date of the card.<br /><br>Format: MMyy<br /><br>(Clients to convert this to appropriate DateTime type.)<br /><br>Note: This is the Expiry Date saved.<br /><br>If the Order Card request is still not processed, i.e.PAN is not yet issued, this field will be null or empty. <br /><br>For a Card Order with a custom Expiry Date passed in the request, this value will be returned after it is updated successfully. |
| `clientReferenceId` | `string \| null \| undefined` | Optional | This is the Client Reference Id of card in the order which needs to be passed by the client. |
| `statusDescription` | `string \| null \| undefined` | Optional | Order status.<br /><br>Possible values<br /><br>Success<br /><br>Failed<br /><br>InProgress<br /> |
| `colCoId` | `number \| null \| undefined` | Optional | Colcoid |

## Example (as JSON)

```json
{
  "AccountId": 206,
  "AccountNumber": "AccountNumber0",
  "BCOReference": 154,
  "BCORowNumber": 80,
  "CardGroupId": 252
}
```

