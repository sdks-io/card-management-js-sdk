
# Search Account Limit Response Data

## Structure

`SearchAccountLimitResponseData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| null \| undefined` | Optional | - |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `referenceProduct` | `string \| null \| undefined` | Optional | 3 digit Shell global fuel product code, if already set up. |
| `restrictionCondition` | `string \| null \| undefined` | Optional | The restriction condition code. |
| `velocityLimits` | [`AccountVelocityLimit[] \| undefined`](../../doc/models/account-velocity-limit.md) | Optional | - |

## Example (as JSON)

```json
{
  "AccountId": 29484,
  "AccountNumber": "GB99215176",
  "ReferenceProduct": "021",
  "RestrictionCondition": "DECLINE_ALERT",
  "VelocityLimits": [
    {
      "Type": "Type0",
      "Period": "Period2",
      "Limit": 24.94,
      "Accumulation": 132.24,
      "Balance": 189.6
    },
    {
      "Type": "Type0",
      "Period": "Period2",
      "Limit": 24.94,
      "Accumulation": 132.24,
      "Balance": 189.6
    }
  ]
}
```

