
# Create Card Group Request Cards Items

## Structure

`CreateCardGroupRequestCardsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| undefined` | Optional | Account Id of the account of the card.<br>Optional if AccountNumber is passed, else Mandatory. |
| `accountNumber` | `string \| undefined` | Optional | Account Number of the account of the card.<br>Optional if AccountId is passed, else Mandatory. |
| `cardId` | `number \| undefined` | Optional | Card Id of the card.<br>Optional if PAN is passed, else Mandatory. |
| `pAN` | `string \| undefined` | Optional | PAN of the card.<br>Optional if CardId is passed, else Mandatory. |

## Example (as JSON)

```json
{
  "AccountId": 164,
  "AccountNumber": "AccountNumber4",
  "CardId": 70,
  "PAN": "PAN6"
}
```

