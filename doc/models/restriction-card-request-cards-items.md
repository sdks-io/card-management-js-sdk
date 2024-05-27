
# Restriction Card Request Cards Items

## Structure

`RestrictionCardRequestCardsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| undefined` | Optional | Account Number of the customer.<br>Optional if AccountId is passed, else Mandatory.<br>This input is a search criterion, if given.<br>Example: GB000000123 |
| `accountId` | `number \| undefined` | Optional | Account ID of the customer.<br>Optional if AccountNumber is passed, else Mandatory.<br>This input is a search criterion, if given.<br>Example: 123456 |
| `pAN` | `string \| undefined` | Optional | Card PAN.<br>Optional if CardId is given, else mandatory.<br>Example: 7002051006629890645<br>Note:<br>•	PAN is ignored if CardId is given.<br>When PAN matches with multiple cards, the restriction will be applied on the latest issued card. |
| `cardId` | `number \| undefined` | Optional | Unique Card Id<br>Optional if PAN is given, else mandatory.<br>Example: 275549 |
| `resetUsageRestrictions` | `boolean \| undefined` | Optional | True/False.<br>If true, the usage restrictions applied on the card in Gateway will be reset to Customer Card Type level max limits, if there are no customer level overrides available then OU card type max limits. Else, the card restrictions will be updated with the usage restrictions provided in the API. |
| `resetDayTimeRestrictions` | `boolean \| undefined` | Optional | True/False.<br>If true, the Day/Time restrictions applied on the card will be deleted. Else, the card restrictions will be updated with the day/time restrictions provided in the API. |
| `resetProductRestrictions` | `boolean \| undefined` | Optional | True/False.<br>If true, Default fuel/non-fuel sets configured at the purchase category level will be applied to the card. Else, the card will be applied with product restrictions provided in the API. |
| `resetLocationRestrictions` | `boolean \| undefined` | Optional | True/False.<br>If true, the location restrictions applied on the card will be deleted. Else, the card restrictions will be updated with the location restrictions provided in the API. |
| `dayTimeRestrictions` | [`DayTimeRestrictions \| undefined`](../../doc/models/day-time-restrictions.md) | Optional | Day/time restrictions such as weekdays and time range to be applied on the bundle.<br>Mandatory if respective action is set as “Add”.<br>The details of DayTimeRestriction entity is given below. |
| `locationRestrictions` | [`LocationRestrictions \| undefined`](../../doc/models/location-restrictions.md) | Optional | Location restrictions to be applied on the bundle which either allows or restricts using the cards, which are under the bundle, in the specified locations.<br>Mandatory if respective action is set as “Add”.<br>Details of location restrictions are given below. |
| `productRestrictions` | [`ProductRestrictions \| undefined`](../../doc/models/product-restrictions.md) | Optional | - |
| `usageRestrictions` | [`UsageRestrictions \| undefined`](../../doc/models/usage-restrictions.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountNumber": "AccountNumber4",
  "AccountId": 114,
  "PAN": "PAN6",
  "CardId": 20,
  "ResetUsageRestrictions": false
}
```
