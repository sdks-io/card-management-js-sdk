
# Bundle Details Response

## Structure

`BundleDetailsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payerId` | `number \| undefined` | Optional | Payer Id of the bundles and cards.<br>Example: 123456 |
| `payerNumber` | `string \| undefined` | Optional | Payer Number of the bundles and cards.<br>Example: GB000000123 |
| `accountId` | `number \| undefined` | Optional | Account ID of the bundle.<br>Example: 123456 |
| `accountNumber` | `string \| undefined` | Optional | Account Number of the bundle.<br>Example: GB000000123 |
| `bundleId` | `string \| undefined` | Optional | unique identifier for the Card Bundle |
| `externalBundleId` | `string \| undefined` | Optional | External system allocated Card Bundle identifier for Card Bundle. |
| `description` | `string \| undefined` | Optional | Card Bundle Description. |
| `pans` | `string[] \| undefined` | Optional | List of Card Pans added to the card bundle. |
| `restrictionCurrencyCode` | `string \| undefined` | Optional | ISO currency code of the country.<br>Example: GBP |
| `restrictionCurrencySymbol` | `string \| undefined` | Optional | Currency symbol of the country.<br>Example: £, $ |
| `restrictions` | [`BundledRestrictionsList \| undefined`](../../doc/models/bundled-restrictions-list.md) | Optional | - |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `requestId` | `string \| undefined` | Optional | API Request Id |

## Example (as JSON)

```json
{
  "PayerId": 172,
  "PayerNumber": "PayerNumber4",
  "AccountId": 232,
  "AccountNumber": "AccountNumber6",
  "BundleId": "BundleId4"
}
```

