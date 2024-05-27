
# Card Move Request

## Structure

`CardMoveRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoCode` | `number \| null \| undefined` | Optional | - |
| `colCoId` | `number \| null \| undefined` | Optional | - |
| `colCoCountryCode` | `string \| null \| undefined` | Optional | - |
| `payerNumber` | `string \| null \| undefined` | Optional | - |
| `payerId` | `number \| null \| undefined` | Optional | - |
| `cards` | [`CardMoveRequestCardsItems[] \| undefined`](../../doc/models/card-move-request-cards-items.md) | Optional | - |
| `targetAccountId` | `number \| undefined` | Optional | - |
| `targetAccountNumber` | `string \| undefined` | Optional | - |
| `targetCardGroupId` | `number \| undefined` | Optional | - |
| `targetNewCardGroupName` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "ColCoCode": 166,
  "ColCoId": 152,
  "ColCoCountryCode": "ColCoCountryCode0",
  "PayerNumber": "PayerNumber2",
  "PayerId": 200
}
```

