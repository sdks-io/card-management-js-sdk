
# Auto Renew Card Request Auto Renew Cards Items

## Structure

`AutoRenewCardRequestAutoRenewCardsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| undefined` | Optional | Account Number of the customer.<br>Optional if AccountId is passed, else Mandatory. |
| `accountId` | `number \| undefined` | Optional | Account Id of the customer.<br>Optional if AccountNumber is passed, else Mandatory. |
| `pAN` | `string \| undefined` | Optional | PAN of the card.<br>Optional if CardId is passed, else Mandatory. |
| `cardId` | `number \| undefined` | Optional | Card Id of the card.<br>Optional if PAN is passed, else Mandatory. |
| `reissueSetting` | `boolean` | Required | Reissue setting of the card.<br>Values:<br>True – Card will be Reissued when nearing its expiry date<br>False – Card will not be Reissued<br>Mandatory |

## Example (as JSON)

```json
{
  "AccountNumber": "AccountNumber4",
  "AccountId": 178,
  "PAN": "PAN6",
  "CardId": 84,
  "ReissueSetting": false
}
```

