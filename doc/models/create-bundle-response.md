
# Create Bundle Response

## Structure

`CreateBundleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| null \| undefined` | Optional | Request Id of the API call |
| `bundleCreationStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `bundleId` | `string \| undefined` | Optional | Identifier of the newly created bundle |
| `dayTimeRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `dayTimeRestrictionProfileId` | `string \| undefined` | Optional | Identifier of the day/time restriction profile created |
| `locationRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `locationRestrictionProfileId` | `string \| undefined` | Optional | Identifier of the location restriction profile created |
| `usageRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `productRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `cards` | [`BundleCardRestrictionStatus \| undefined`](../../doc/models/bundle-card-restriction-status.md) | Optional | - |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "2ace3991-5d03-4a68-ac68-ca9119b25101",
  "BundleCreationStatus": {
    "Code": "Code8",
    "Description": "Description8"
  },
  "BundleId": "BundleId2",
  "DayTimeRestrictionStatus": {
    "Code": "Code4",
    "Description": "Description2"
  },
  "DayTimeRestrictionProfileId": "DayTimeRestrictionProfileId0"
}
```

