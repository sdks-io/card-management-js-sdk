
# PIN Reminder Response

## Structure

`PINReminderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique request identifier passed from end user. This identifier helps in tracing a transaction |
| `mainReference` | `number \| undefined` | Optional | Service reference number for tracking. |
| `status` | `string \| undefined` | Optional | Indicates overall status of the request. Allowed values: SUCCESS, FAILED |
| `data` | [`PINReminderReference[] \| undefined`](../../doc/models/pin-reminder-reference.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "RequestId8",
  "MainReference": 42,
  "Status": "Status4",
  "Data": [
    {
      "CardId": 224,
      "PANID": 0,
      "PAN": 154,
      "CardExpiryDate": "CardExpiryDate6",
      "ReferenceId": 108
    },
    {
      "CardId": 224,
      "PANID": 0,
      "PAN": 154,
      "CardExpiryDate": "CardExpiryDate6",
      "ReferenceId": 108
    }
  ]
}
```

