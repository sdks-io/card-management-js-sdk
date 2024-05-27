
# Submitted Card

Response entity object for SubmittedCard list <br/>Note: This list will be empty for status 9006 and 9012 i.e., request for all the cards failed.

## Structure

`SubmittedCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `replacementCardReference` | `number \| null \| undefined` | Optional | Reference number for tracking of replacement card order request of the specific card,<br /><br>This is applicable for requests with target status as Block and OrderReplacement passed as True. |
| `updateCardReference` | `number \| null \| undefined` | Optional | Reference number for tracking of update status request of the specific card, |
| `accountId` | `number \| null \| undefined` | Optional | Account Id of the customer.<br /><br>Optional if AccountNumber is passed, else Mandatory. |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the customer.<br /><br>Optional if AccountId is passed, else Mandatory. |
| `cardExpiryDate` | `string \| null \| undefined` | Optional | Expiry date of the card.<br /><br>Mandatory if PAN is passed, else optional.<br /><br>Format: yyyyMMdd |
| `cardId` | `number \| null \| undefined` | Optional | Card Id of the card.<br /><br>Optional if PAN is passed, else Mandatory. |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting company code of the customer. <br /><br>Optional if ColCoId is passed, else Mandatory.<br /> |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting company id of the customer. <br /><br>Optional if ColCoCode is passed, else Mandatory.<br /> |
| `pAN` | `string \| null \| undefined` | Optional | PAN of the card.<br /><br>Optional if CardId is passed, else Mandatory.<br /> |
| `payerId` | `number \| null \| undefined` | Optional | Payer id of the customer.<br /><br>Optional if PayerNumber is passed, else Mandatory. |
| `payerNumber` | `string \| null \| undefined` | Optional | PayerNumber of the customer.<br /><br>Optional if PayerId is passed, else Mandatory. |

## Example (as JSON)

```json
{
  "ReplacementCardReference": 234,
  "UpdateCardReference": 140,
  "AccountId": 124,
  "AccountNumber": "AccountNumber8",
  "CardExpiryDate": "CardExpiryDate6"
}
```

