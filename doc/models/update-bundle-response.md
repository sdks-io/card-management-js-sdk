
# Update Bundle Response

## Structure

`UpdateBundleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestActionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `dayTimeRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `locationRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `productRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `usageRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |

## Example (as JSON)

```json
{
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
  },
  "UsageRestrictionStatus": {
    "Code": "Code4",
    "Description": "Description8"
  }
}
```

