
# Card Restriction Req

## Structure

`CardRestrictionReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting Company Id of the selected payer.<br>Optional if ColCoCode is passed else Mandatory.<br>Example:<br>1 for Philippines<br>5 for UK |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting Company Code of the selected payer.<br>Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.<br>Example:<br>86 for Philippines<br>5 for UK |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id of the selected payer.<br>Optional if PayerNumber is passed else Mandatory<br>Example: 123456 |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the selected payer.<br>Optional if PayerId is passed else Mandatory<br>Example: GB000000123 |
| `cards` | [`RestrictionCardsList \| undefined`](../../doc/models/restriction-cards-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "ColCoId": 188,
  "ColCoCode": 202,
  "PayerId": 236,
  "PayerNumber": "PayerNumber8",
  "Cards": {
    "AccountId": 184,
    "CardId": 90,
    "PAN": "PAN0",
    "ResetUsageRestrictions": false,
    "ResetDayTimeRestrictions": false
  }
}
```

