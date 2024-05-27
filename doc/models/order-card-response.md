
# Order Card Response

## Structure

`OrderCardResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique request identifier passed from end user. This identifier helps in tracing a transaction |
| `status` | `string \| undefined` | Optional | Indicates overall status of the request. Allowed values: SUCCESS, FAILED |
| `data` | [`CreateCardResponse[] \| undefined`](../../doc/models/create-card-response.md) | Optional | - |
| `mainReference` | `number \| undefined` | Optional | Main order reference number for tracking. |

## Example (as JSON)

```json
{
  "RequestId": "RequestId2",
  "Status": "Status8",
  "Data": [
    {
      "DriverAndVRN": "DriverAndVRN6",
      "OrderCardReference": 86
    }
  ],
  "MainReference": 110
}
```

