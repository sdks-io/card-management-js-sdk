
# Create Card Group Response Error Cards Items

## Structure

`CreateCardGroupResponseErrorCardsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardId` | `number \| undefined` | Optional | Card Id of the card. |
| `pAN` | `string \| undefined` | Optional | PAN of the card. |
| `errorCode` | `string \| undefined` | Optional | Error code for validation failure. |
| `errorDescription` | `string \| undefined` | Optional | Description of validation failure. |

## Example (as JSON)

```json
{
  "CardId": 1234,
  "PAN": "7002097550439850718",
  "ErrorCode": "E0001",
  "ErrorDescription": "Card is not active"
}
```

