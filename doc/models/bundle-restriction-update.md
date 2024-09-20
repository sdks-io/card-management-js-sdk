
# Bundle Restriction Update

## Structure

`BundleRestrictionUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `resetDayTimeRestriction` | `boolean \| null \| undefined` | Optional | True/False<br>A value indicates if the day/time restriction is to be reset for card bundle.<br>Optional<br>Default value is False. |
| `resetLocationRestriction` | `boolean \| null \| undefined` | Optional | True/False<br>A value indicates if the location restriction is to be reset for card bundle.<br>Optional<br>Default value is False. |
| `resetProductRestriction` | `boolean \| null \| undefined` | Optional | True/False<br>A value indicates if the product restriction is to be reset for card bundle.<br>Optional<br>Default value is False. |
| `usageRestrictions` | `unknown \| undefined` | Optional | - |
| `dayTimeRestrictionProfileId` | `string \| null \| undefined` | Optional | Identifier of the day/time restriction profile to be updated for the bundle in Gateway.<br>Optional |
| `dayTimeRestrictions` | [`CardDayTimeRestrictions \| undefined`](../../doc/models/card-day-time-restrictions.md) | Optional | - |
| `productRestrictions` | `unknown \| undefined` | Optional | - |
| `locationRestrictionProfileId` | `string \| undefined` | Optional | Identifier of the location restriction profile to be updated for the bundle in Gateway.<br>Optional |
| `locationRestrictions` | [`LocationRestriction \| undefined`](../../doc/models/location-restriction.md) | Optional | - |

## Example (as JSON)

```json
{
  "ResetDayTimeRestriction": false,
  "ResetLocationRestriction": false,
  "ResetProductRestriction": false,
  "UsageRestrictions": {
    "key1": "val1",
    "key2": "val2"
  },
  "DayTimeRestrictionProfileId": "DayTimeRestrictionProfileId2"
}
```

