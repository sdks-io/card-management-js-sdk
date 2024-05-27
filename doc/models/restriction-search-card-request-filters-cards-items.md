
# Restriction Search Card Request Filters Cards Items

## Structure

`RestrictionSearchCardRequestFiltersCardsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pAN` | `string \| undefined` | Optional | Card PAN.<br>Optional if CardId is given, else mandatory.<br>Note: PAN is ignored if CardId is given. |
| `cardId` | `number \| undefined` | Optional | Unique Card Id in GFN.<br>Optional if PAN is given, else mandatory. |

## Example (as JSON)

```json
{
  "PAN": "PAN0",
  "CardId": 72
}
```
