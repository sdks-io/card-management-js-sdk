
# Bundle Restriction

## Structure

`BundleRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dayTimeRestrictionAction` | `string \| null \| undefined` | Optional | The value indicates what actions to be performed with respect to day time restriction.<br>Mandatory<br>Allowed values –<br>•    Add: Apply the given restriction on the bundle.<br>•    Default: No Day/Time restriction will be applied on the bundle in Gateway. |
| `locationRestrictionAction` | `string \| null \| undefined` | Optional | The value indicates what actions to be performed with respect to location restriction.<br>Mandatory<br>Allowed values –<br>•    Add: Apply the given restriction on the bundle.<br>•    Default: No location restriction will be applied on the bundle in Gateway. |
| `usageRestrictions` | `unknown \| undefined` | Optional | - |
| `dayTimeRestrictions` | [`DayTimeRestrictions \| undefined`](../../doc/models/day-time-restrictions.md) | Optional | - |
| `productRestrictions` | `unknown \| undefined` | Optional | - |
| `locationRestrictions` | [`LocationRestriction \| undefined`](../../doc/models/location-restriction.md) | Optional | - |

## Example (as JSON)

```json
{
  "DayTimeRestrictionAction": "DayTimeRestrictionAction8",
  "LocationRestrictionAction": "LocationRestrictionAction6",
  "UsageRestrictions": {
    "key1": "val1",
    "key2": "val2"
  },
  "DayTimeRestrictions": {
    "Monday": false,
    "Tuesday": false,
    "Wednesday": false,
    "Thursday": false,
    "Friday": false
  },
  "ProductRestrictions": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

