
# Update Bundle Response

## Structure

`UpdateBundleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| null \| undefined` | Optional | Request Id of the API call |
| `requestActionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `dayTimeRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `locationRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `productRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `usageRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "2ace3991-5d03-4a68-ac68-ca9119b25101",
  "RequestActionStatus": {
    "Code": "Code6",
    "Description": "Description0"
  },
  "DayTimeRestrictionStatus": {
    "Code": "Code4",
    "Description": "Description2"
  },
  "LocationRestrictionStatus": {
    "Code": "Code6",
    "Description": "Description0"
  },
  "ProductRestrictionStatus": {
    "Code": "Code8",
    "Description": "Description8"
  }
}
```

