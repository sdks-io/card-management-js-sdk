
# Card Details Request

## Structure

`CardDetailsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoCode` | `number \| undefined` | Optional | Collecting Company Id  of the selected payer.<br>Optional if ColCoCode is passed else Mandatory.<br>Example:<br>1-Philippines<br>5-UK |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer.<br>Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.<br>Example:<br>86-Philippines<br>5-UK |
| `colCoCountryCode` | `string \| null \| undefined` | Optional | ISO Country code of collecting company |
| `clientReferenceId` | `string \| null \| undefined` | Optional | Customer reference number of the card.<br>Optional |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the selected payer. |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id (i.e. Customer Id of the Payment of the selected payer. |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the customer.<br>Optional if AccountId is passed, else mandatory. |
| `accountId` | `number \| null \| undefined` | Optional | Account ID of the customer.<br>Optional if AccountNumber is passed, else mandatory. |
| `pAN` | `string \| null \| undefined` | Optional | PAN of the card.<br>Optional if CardId is passed, else Mandatory. |
| `cardId` | `number \| null \| undefined` | Optional | Card Id of the card.<br>Optional if PAN is passed, else Mandatory. |
| `tokenTypeID` | `number \| null \| undefined` | Optional | Token Type ID for the Card<br>Optional |
| `tokenTypeName` | `string \| null \| undefined` | Optional | Token Type name for the Card<br>Optional |
| `creationDate` | `string \| null \| undefined` | Optional | Card Creation Date time<br>Optional<br>Format: yyyyMMdd |
| `effectiveDate` | `string \| null \| undefined` | Optional | Effective date for the Card<br>Optional<br>Format: yyyyMMdd |
| `includeBundleDetails` | `boolean \| undefined` | Optional | When the value is True, API will return bundle Id associated with card in the response, if available.<br>Note: Use ‘Null’ or ‘False’ for optimum performance. A delay in response is expected when set to ‘True’. |
| `includeIntermediateStatus` | `boolean \| undefined` | Optional | A flag which indicates if the response can contain intermediate statuses |
| `includeScheduledCardBlocks` | `boolean \| undefined` | Optional | A flag which indicates if the response can contain scheduled card blocks details |

## Example (as JSON)

```json
{
  "ColCoCode": 154,
  "ColCoId": 140,
  "ColCoCountryCode": "ColCoCountryCode6",
  "ClientReferenceId": "ClientReferenceId2",
  "PayerNumber": "PayerNumber8"
}
```

