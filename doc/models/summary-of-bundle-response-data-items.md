
# Summary of Bundle Response Data Items

## Structure

`SummaryOfBundleResponseDataItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id of the bundles and cards.<br>Example: 123456 |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the bundles and cards.<br>Example: GB000000123 |
| `accountId` | `number \| null \| undefined` | Optional | Account ID of the bundle.<br>Example: 123456 |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the bundle.<br>Example: GB000000123 |
| `countOfCardsNotInBundle` | `number \| null \| undefined` | Optional | Count of cards that are not part of the bundle in a given account. |
| `cardBundles` | [`SummaryOfBundleResponseDataItemsCardBundlesItems[] \| undefined`](../../doc/models/summary-of-bundle-response-data-items-card-bundles-items.md) | Optional | List of Card Bundles |

## Example (as JSON)

```json
{
  "PayerId": 102,
  "PayerNumber": "PayerNumber6",
  "AccountId": 162,
  "AccountNumber": "AccountNumber8",
  "CountOfCardsNotInBundle": 222
}
```

