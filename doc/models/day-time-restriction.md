
# Day Time Restriction

Details of the day/time restrictions such as weekdays and time range in which transactions should be allowed on the card.

## Structure

`DayTimeRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `monday` | `boolean \| undefined` | Optional | True if card could be used on a Monday, else false |
| `tuesday` | `boolean \| undefined` | Optional | True if card could be used on a Tuesday, else false. |
| `wednesday` | `boolean \| undefined` | Optional | True if card could be used on a Wednesday, else false. |
| `thursday` | `boolean \| undefined` | Optional | True if card could be used on a Thursday, else false |
| `friday` | `boolean \| undefined` | Optional | True if card could be used on a Friday, else false |
| `saturday` | `boolean \| undefined` | Optional | True if card could be used on a Saturday, else false |
| `sunday` | `boolean \| undefined` | Optional | True if card could be used on a Sunday, else false. |
| `timeFrom` | `string \| undefined` | Optional | Card could be used from this time in a day.<br>Format: HH:mm (24-hour format)<br>Note:<br><br>1. Clients to convert this to appropriate DateTime or TimeSpan type.<br>   “00:00” is the lowest time value and “23:59” is the highest time value. |
| `timeTo` | `string \| undefined` | Optional | Card could be used up to this time in a day.<br>Format: HH:mm (24-hour format)<br>Note:<br><br>1. Clients to convert this to appropriate DateTime or TimeSpan type.<br>   “00:00” is the lowest time value and “23:59” is the highest time value. |

## Example (as JSON)

```json
{
  "Monday": false,
  "Tuesday": false,
  "Wednesday": false,
  "Thursday": false,
  "Friday": false
}
```

