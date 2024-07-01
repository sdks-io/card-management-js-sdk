
# Restrictioncards Res

## Structure

`RestrictioncardsRes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| undefined` | Optional | Account Id of the customer.<br>Example: 123456 |
| `accountNumber` | `string \| undefined` | Optional | Account Number of the customer.<br>Example: GB000000123 |
| `cardId` | `string \| undefined` | Optional | Unique Card Id<br>Example: 275549 |
| `pAN` | `string \| undefined` | Optional | Card PAN.<br>Example: 7002051006629890645 |
| `usageRestrictionStatus` | `string \| undefined` | Optional | Status of the card usage restriction submitted. Based on the response the value will be set as either “Success” or “Failed”. |
| `usageRestrictionDescription` | `string \| undefined` | Optional | Response for the usage restriction in case of an error. This field will have a value only when “UsageRestrictionStatus” is “Failed”. |
| `dayTimeRestrictionStatus` | `string \| undefined` | Optional | Status of the card day/time restriction submitted. Based on the response from Gateway value will be set as either “Success” or “Failed”. |
| `dayTimeRestrictionDescription` | `string \| undefined` | Optional | Response for the day/time restriction in case of an error. This field will have a value only when “DayTimeRestrictionStatus” is “Failed”. |
| `productRestrictionStatus` | `string \| undefined` | Optional | Status of the card product restriction submitted. Based on the response  the value will be set  either as “Success” or “Failed”. |
| `productRestrictionDescription` | `string \| undefined` | Optional | Response for the product restriction in case of an error. This field will have a value only when “ProductRestrictionStatus” is “Failed”. |
| `locationRestrictionStatus` | `string \| undefined` | Optional | Card Location restriction submitted, based on response value set as “Success” or “Failed”. |
| `locationRestrictionStatusDescription` | `string \| undefined` | Optional | Response for the location restriction in case of an error. This field will have a value only when “LocationRestrictionStatus” is “Failed”. |
| `validationErrorCode` | `string \| undefined` | Optional | Error code for validation failure. |
| `validationErrorDescription` | `string \| undefined` | Optional | Description of validation failure. |

## Example (as JSON)

```json
{
  "AccountId": 148,
  "AccountNumber": "AccountNumber0",
  "CardId": "CardId0",
  "PAN": "PAN2",
  "UsageRestrictionStatus": "UsageRestrictionStatus0"
}
```

