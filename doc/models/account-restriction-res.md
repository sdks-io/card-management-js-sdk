
# Account Restriction Res

## Structure

`AccountRestrictionRes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Unique identifier for the request. This will be played back in the response from the request. |
| `status` | `string \| undefined` | Optional | Status of the request |
| `data` | [`AccountRestrictionResponse[] \| undefined`](../../doc/models/account-restriction-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "0e6fb42a-51b0-43b2-f010-92f822657f6a",
  "Status": "SUCCESS",
  "Data": [
    {
      "AccountId": 62,
      "AccountNumber": "AccountNumber8",
      "UsageRestrictionStatus": "UsageRestrictionStatus8",
      "UsageRestrictionDescription": "UsageRestrictionDescription2"
    },
    {
      "AccountId": 62,
      "AccountNumber": "AccountNumber8",
      "UsageRestrictionStatus": "UsageRestrictionStatus8",
      "UsageRestrictionDescription": "UsageRestrictionDescription2"
    }
  ]
}
```

