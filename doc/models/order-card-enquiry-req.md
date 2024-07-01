
# Order Card Enquiry Req

This class holds Order Card Enquiry list based on which the Order Card Enquiry need to be filtered.

## Structure

`OrderCardEnquiryReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| null \| undefined` | Optional | Account ID of the customer.<br/> Optional if AccountNumber is passed, else mandatory. <br/> This input is a search criterion, if given. |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the customer.<br/> Optional if AccountId is passed, else mandatory.<br/> This input is a search criterion, if given. |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer. <br /><br>Optional – when ‘ReferenceNumber’ is provided.<br /> |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting Company Id (in ) of the selected payer. <br /><br>Optional – when ‘ReferenceNumber’ is provided. Else, either ‘ColCoId’ or ‘ColCoCode’ is mandatory.<br /> |
| `colCoCountryCode` | `string \| null \| undefined` | Optional | ISO 3166 Alpha-2 Country Code for the customer and card owning country. |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id (i.e. Customer Id of the Payment Customer) of the selected payer.<br /><br>Optional – when ‘ReferenceNumber’ is provided. Else, either ‘PayerId’ or ‘PayerNumber’ is mandatory. |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the selected payer.<br /><br>Optional – when ‘ReferenceNumber’ is provided. Else, either ‘PayerId’ or ‘PayerNumber’ is mandatory. |
| `referenceNumber` | `number \| undefined` | Optional | Reference number of the Card Order/ Bulk Card Order/ Order Card Request.<br /><br>Mandatory when ColCo and Payer fields are not provided. Else, optional. |
| `referenceType` | [`OrderCardEnquiryReqReferenceTypeEnum \| undefined`](../../doc/models/order-card-enquiry-req-reference-type-enum.md) | Optional | - |
| `fromDate` | `string \| null \| undefined` | Optional | Card Orders from Date/Time.<br /><br>Optional.<br /><br>Value should be with in last 7 days<br /><br>This field is ignored if ReferenceNumber is provided <br /><br>This field is optional when not provided and ReferenceNumber is null or empty then the value should be set to D-7(Where D is current date)<br /><br>Format: yyyyMMdd |
| `toDate` | `string \| null \| undefined` | Optional | Card Order to Date/Time<br /><br>Optional<br /><br>Value should be with in last 7 days<br /><br>This field is ignored if ReferenceNumber is provided <br /><br>This field is optional when not provided and ReferenceNumber is null or empty then the value should be set to current date<br /><br>Format: yyyyMMdd |
| `orderRequestId` | `string \| null \| undefined` | Optional | Client provided Unique Id of the original Order Card request, the status of which is enquired by this API |

## Example (as JSON)

```json
{
  "ColCoCountryCode": "PH",
  "OrderRequestId": "ed557f02-c7d7-4c01-b3e5-11bf",
  "AccountId": 66,
  "AccountNumber": "AccountNumber8",
  "ColCoCode": 228,
  "ColCoId": 214
}
```

