
# Account Restriction Request

## Structure

`AccountRestrictionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting Company Id of the selected payer.<br>Optional if ColCoCode is passed else Mandatory.<br>Example:<br>1 for Philippines<br>5 for UK |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer.<br>Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.<br>Example:<br>86 for Philippines<br>5 for UK |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id of the selected payer.<br>Optional if PayerNumber is passed else Mandatory<br>Example: 123456 |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the selected payer.<br>Optional if PayerId is passed else Mandatory<br>Example: GB000000123 |
| `accountId` | `number \| null \| undefined` | Optional | Account ID of the customer on which the restrictions will be applied.<br>Optional if AccountNumber is passed, else Mandatory.<br>Example: 123456 |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the customer on which the restrictions will be applied.<br>Optional if AccountId is passed, else Mandatory.<br>Example: GB000000123 |
| `resetUsageRestrictions` | `boolean \| null \| undefined` | Optional | True/False.<br>If true, the usage restrictions applied on the account will be removed.<br>Optional<br>Default: False |
| `usageRestrictions` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "ColCoId": 138,
  "ColCoCode": 152,
  "PayerId": 186,
  "PayerNumber": "PayerNumber8",
  "AccountId": 246
}
```

