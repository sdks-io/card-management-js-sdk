
# Bundle Restriction

## Structure

`BundleRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `resetDayTimeRestriction` | `boolean \| undefined` | Optional | True/False<br>A value indicates if the day/time restriction is to be reset for card bundle.<br>Optional<br>Default value is False.<br>**Default**: `false` |
| `resetLocationRestriction` | `boolean \| undefined` | Optional | True/False<br>A value indicates if the location restriction is to be reset for card bundle.<br>Optional<br>Default value is False.<br>**Default**: `false` |
| `resetProductRestriction` | `boolean \| undefined` | Optional | True/False<br>A value indicates if the product restriction is to be reset for card bundle.<br>Optional<br>Default value is False.<br>**Default**: `false` |
| `usageRestrictions` | [`UsageRestrictions \| undefined`](../../doc/models/usage-restrictions.md) | Optional | - |
| `dayTimeRestrictions` | [`DayTimeRestrictions \| undefined`](../../doc/models/day-time-restrictions.md) | Optional | Day/time restrictions such as weekdays and time range to be applied on the bundle.<br>Mandatory if respective action is set as “Add”.<br>The details of DayTimeRestriction entity is given below. |
| `productRestriction` | [`ProductRestrictions \| undefined`](../../doc/models/product-restrictions.md) | Optional | - |
| `locationRestrictionProfileId` | `string \| undefined` | Optional | Identifier of the location restriction profile to be updated for the bundle in Gateway.<br>Optional |
| `locationRestrictions` | [`LocationRestrictions \| undefined`](../../doc/models/location-restrictions.md) | Optional | Location restrictions to be applied on the bundle which either allows or restricts using the cards, which are under the bundle, in the specified locations.<br>Mandatory if respective action is set as “Add”.<br>Details of location restrictions are given below. |

## Example (as JSON)

```json
{
  "ResetDayTimeRestriction": false,
  "ResetLocationRestriction": false,
  "ResetProductRestriction": false,
  "UsageRestrictions": {
    "DailySpend": 7.72,
    "WeeklySpend": 10.22,
    "MonthlySpend": 48.66,
    "PerTransactionSpend": 17.28,
    "DailyVolume": 122
  },
  "DayTimeRestrictions": {
    "Friday": false,
    "Monday": false,
    "Saturday": false,
    "Sunday": false,
    "Thursday": false
  }
}
```

