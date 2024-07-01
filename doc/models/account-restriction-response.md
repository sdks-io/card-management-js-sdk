
# Account Restriction Response

## Structure

`AccountRestrictionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| null \| undefined` | Optional | Request Id of the API call |
| `accountId` | `number \| undefined` | Optional | Account Id on which restriction is applied.<br>Example: 123456 |
| `accountNumber` | `string \| undefined` | Optional | Account Number on which restriction is applied.<br>Example: GB000000123 |
| `usageRestrictionStatus` | `string \| undefined` | Optional | Status of the card usage restriction submitted to Gateway. Based on the response from Gateway value will be set as either “Success” or “Failed”. |
| `usageRestrictionDescription` | `string \| undefined` | Optional | Response for the usage restriction in case of an error. This field will have a value only when “UsageRestrictionStatus” is “Failed”. |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "2ace3991-5d03-4a68-ac68-ca9119b25101",
  "AccountId": 130,
  "AccountNumber": "AccountNumber8",
  "UsageRestrictionStatus": "UsageRestrictionStatus8",
  "UsageRestrictionDescription": "UsageRestrictionDescription2"
}
```

