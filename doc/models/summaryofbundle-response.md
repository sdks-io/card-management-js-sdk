
# Summaryofbundle Response

## Structure

`SummaryofbundleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| null \| undefined` | Optional | Request Id of the API call |
| `payerId` | `number \| undefined` | Optional | Payer Id of the bundles and cards.<br>Example: 123456 |
| `payerNumber` | `string \| undefined` | Optional | Payer Number of the bundles and cards.<br>Example: GB000000123 |
| `accountId` | `number \| undefined` | Optional | - |
| `accountNumber` | `string \| undefined` | Optional | Account Number of the bundle.<br>Example: GB000000123 |
| `countOfCardsNotInBundle` | `number \| undefined` | Optional | Count of cards that are not part of the bundle in a given account. |
| `cardBundles` | [`CardBundle \| undefined`](../../doc/models/card-bundle.md) | Optional | - |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "2ace3991-5d03-4a68-ac68-ca9119b25101",
  "PayerId": 70,
  "PayerNumber": "PayerNumber2",
  "AccountId": 130,
  "AccountNumber": "AccountNumber4"
}
```

