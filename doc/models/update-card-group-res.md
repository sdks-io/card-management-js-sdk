
# Update Card Group Res

## Structure

`UpdateCardGroupRes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique identifier for the request. This will be played back in the response from the request. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `data` | [`UpdateCardGroupResponse[] \| undefined`](../../doc/models/update-card-group-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "0e6fb42a-51b0-43b2-f010-92f822657f6a",
  "Status": "SUCCESS",
  "Data": [
    {
      "MainReference": 166,
      "UpdateCardGroupReference": 110,
      "NewCardGroupReference": 112,
      "MoveCardReferences": [
        {
          "CardId": 234,
          "PAN": "PAN6",
          "Reference": 188
        }
      ]
    }
  ]
}
```

