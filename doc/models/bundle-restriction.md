
# Bundle Restriction

## Structure

`BundleRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dayTimeRestrictionAction` | `string \| null \| undefined` | Optional | The value indicates what actions to be performed with respect to day time restriction.<br>Mandatory<br>Allowed values –<br>•    Add: Apply the given restriction on the bundle.<br>•    Default: No Day/Time restriction will be applied on the bundle in Gateway. |
| `locationRestrictionAction` | `string \| null \| undefined` | Optional | The value indicates what actions to be performed with respect to location restriction.<br>Mandatory<br>Allowed values –<br>•    Add: Apply the given restriction on the bundle.<br>•    Default: No location restriction will be applied on the bundle in Gateway. |
| `productRestrictionAction` | `string \| null \| undefined` | Optional | The value indicates what actions to be performed with respect to Product restriction.<br>Mandatory<br>Allowed values –<br>•    Add: Apply the given restriction on the bundle.<br>•    Default: No Product restriction will be applied on the bundle in Gateway. |
| `dayTimeRestrictions` | [`DayTimeRestrictions \| undefined`](../../doc/models/day-time-restrictions.md) | Optional | - |
| `productRestrictions` | [`ProductRestrictionCard \| undefined`](../../doc/models/product-restriction-card.md) | Optional | - |
| `locationRestrictions` | [`LocationRestriction \| undefined`](../../doc/models/location-restriction.md) | Optional | - |
| `usageRestrictions` | [`UsageRestrictionsCard \| undefined`](../../doc/models/usage-restrictions-card.md) | Optional | - |

## Example (as JSON)

```json
{
  "DayTimeRestrictionAction": "DayTimeRestrictionAction8",
  "LocationRestrictionAction": "LocationRestrictionAction6",
  "ProductRestrictionAction": "ProductRestrictionAction4",
  "DayTimeRestrictions": {
    "Monday": false,
    "Tuesday": false,
    "Wednesday": false,
    "Thursday": false,
    "Friday": false
  },
  "ProductRestrictions": {
    "Products": [
      "Products4"
    ],
    "ProductGroups": [
      "ProductGroups3",
      "ProductGroups4"
    ]
  }
}
```

