
# Card Move Res

## Structure

`CardMoveRes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | API Request ID |
| `mainReference` | `number \| undefined` | Optional | Move-Card reference number for tracking the execution of the request. |
| `status` | `string \| undefined` | Optional | API Request Overall status |
| `data` | [`SubmittedMoveCard[] \| undefined`](../../doc/models/submitted-move-card.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "RequestId4",
  "MainReference": 114,
  "Status": "Status0",
  "Data": [
    {
      "AccountId": "AccountId4",
      "AccountNumber": "AccountNumber8",
      "CardId": "CardId8",
      "PAN": "PAN0",
      "MoveCardReference": "MoveCardReference0"
    },
    {
      "AccountId": "AccountId4",
      "AccountNumber": "AccountNumber8",
      "CardId": "CardId8",
      "PAN": "PAN0",
      "MoveCardReference": "MoveCardReference0"
    },
    {
      "AccountId": "AccountId4",
      "AccountNumber": "AccountNumber8",
      "CardId": "CardId8",
      "PAN": "PAN0",
      "MoveCardReference": "MoveCardReference0"
    }
  ]
}
```

