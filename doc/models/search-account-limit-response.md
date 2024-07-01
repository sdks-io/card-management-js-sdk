
# Search Account Limit Response

## Structure

`SearchAccountLimitResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| null \| undefined` | Optional | Request Id of the API call |
| `accountId` | `number \| undefined` | Optional | Account ID of the customer. |
| `accountNumber` | `string \| undefined` | Optional | Account Number<br>Example: GB99215176 |
| `referenceProduct` | `string \| undefined` | Optional | 3 digit Shell global fuel product code, if already set up.<br>Example: 021 |
| `restrictionCondition` | `string \| undefined` | Optional | The restriction condition code.<br>Example: DECLINE_ALERT |
| `velocityLimits` | [`AccountVelocityLimit[] \| undefined`](../../doc/models/account-velocity-limit.md) | Optional | - |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "2ace3991-5d03-4a68-ac68-ca9119b25101",
  "AccountId": 114,
  "AccountNumber": "AccountNumber2",
  "ReferenceProduct": "ReferenceProduct2",
  "RestrictionCondition": "RestrictionCondition0"
}
```

