
# Create Bundle Response

## Structure

`CreateBundleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bundleCreationStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `bundleId` | `string \| undefined` | Optional | Identifier of the newly created bundle |
| `dayTimeRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `dayTimeRestrictionProfileId` | `string \| undefined` | Optional | Identifier of the day/time restriction profile created |
| `locationRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `locationRestrictionProfileId` | `string \| undefined` | Optional | Identifier of the location restriction profile created |
| `usageRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `productRestrictionStatus` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `productRestrictionProfileId` | `string \| undefined` | Optional | Identifier of the product restriction profile created |
| `cards` | [`BundleCardRestrictionStatus[] \| undefined`](../../doc/models/bundle-card-restriction-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "BundleId": "1",
  "DayTimeRestrictionProfileId": "2",
  "LocationRestrictionProfileId": "3",
  "ProductRestrictionProfileId": "4",
  "BundleCreationStatus": {
    "Code": "Code8",
    "Description": "Description8"
  },
  "DayTimeRestrictionStatus": {
    "Code": "Code4",
    "Description": "Description2"
  },
  "LocationRestrictionStatus": {
    "Code": "Code6",
    "Description": "Description0"
  }
}
```

