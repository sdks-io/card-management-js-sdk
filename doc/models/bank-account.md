
# Bank Account

## Structure

`BankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `bankName` | `string \| null \| undefined` | Optional | Bank Name |
| `accountName` | `string \| null \| undefined` | Optional | Account Name |
| `dateEffective` | `string \| null \| undefined` | Optional | Bank Account effective date for the payer |
| `dateTerminated` | `string \| null \| undefined` | Optional | Bank Account terminated date. Default is null |
| `iBAN` | `string \| null \| undefined` | Optional | Bank Account IBAN for Payer |
| `currencyCode` | `string \| null \| undefined` | Optional | Bank Account currency ISO code. |
| `currencySymbol` | `string \| null \| undefined` | Optional | Bank Account currency Symbol. |
| `countryISOCode` | `string \| null \| undefined` | Optional | Bank Account Country ISO Code |
| `country` | `string \| null \| undefined` | Optional | Bank Account Country Name<br>1-Austria<br>2-Belgium<br>3-Bulgaria<br>4-Croatia<br>5-Czech Republic |
| `sortCode` | `string \| null \| undefined` | Optional | Payer bank Sort Code |
| `swiftCode` | `string \| null \| undefined` | Optional | Payer Bank Swift Code |
| `bankType` | `string \| null \| undefined` | Optional | Bank Type Id and Description |

## Example (as JSON)

```json
{
  "AccountNumber": "45346346443",
  "BankName": "swiss",
  "AccountName": "ARIM SERVIS",
  "DateEffective": "20200808",
  "IBAN": "CZ6508000000192000145399",
  "CurrencyCode": "EUR",
  "CurrencySymbol": "€",
  "CountryISOCode": "DE",
  "Country": "Germany",
  "SortCode": "0100",
  "SwiftCode": "KOMBCZPPXXX",
  "BankType": "1-Test",
  "DateTerminated": "DateTerminated0"
}
```
