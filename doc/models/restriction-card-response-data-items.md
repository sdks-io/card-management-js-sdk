
# Restriction Card Response Data Items

## Structure

`RestrictionCardResponseDataItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| null \| undefined` | Optional | Account Id of the customer. |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the customer. |
| `cardId` | `number \| null \| undefined` | Optional | Unique Card Id |
| `dayTimeRestrictionDescription` | `string \| null \| undefined` | Optional | This field will have a value only when “DayTimeRestrictionStatus” is “Failed”. |
| `dayTimeRestrictionStatus` | `string \| null \| undefined` | Optional | Status of the card day/time restriction submitted to API. Based on the response from API value will be set as either “Success” or “Failed”. |
| `locationRestrictionDescription` | `string \| null \| undefined` | Optional | This field will have a value only when “LocationRestrictionStatus” is “Failed”. |
| `locationRestrictionStatus` | `string \| null \| undefined` | Optional | Card Location restriction submitted to gateway based on gateway response value set as “Success” or “Failed”. |
| `pAN` | `string \| null \| undefined` | Optional | Card PAN |
| `productRestrictionDescription` | `string \| null \| undefined` | Optional | This field will have a value only when “ProductRestrictionStatus” is “Failed”. |
| `productRestrictionStatus` | `string \| null \| undefined` | Optional | Status of the card product restriction submitted |
| `usageRestrictionDescription` | `string \| null \| undefined` | Optional | This field will have a value only when “UsageRestrictionStatus” is “Failed”. |
| `usageRestrictionStatus` | `string \| null \| undefined` | Optional | Status of the card usage restriction submitted |
| `validationErrorCode` | `string \| null \| undefined` | Optional | Error code for validation failure.<br>Example error codes:<br>0007, 9007, 7000, 7001. |
| `validationErrorDescription` | `string \| null \| undefined` | Optional | Description of validation failure. |

## Example (as JSON)

```json
{
  "AccountId": 182,
  "AccountNumber": "AccountNumber8",
  "CardId": 88,
  "DayTimeRestrictionDescription": "DayTimeRestrictionDescription8",
  "DayTimeRestrictionStatus": "DayTimeRestrictionStatus8"
}
```

