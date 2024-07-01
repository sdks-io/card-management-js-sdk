
# Search Card Restriction Req

## Structure

`SearchCardRestrictionReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoId` | `number \| null \| undefined` | Optional | Collecting Company Id of the selected payer.<br>Optional if ColCoCode is passed else Mandatory.<br>Example:<br>1 for Philippines<br>5 for UK |
| `colCoCode` | `number \| null \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer.<br>Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.<br>Example:<br>86 for Philippines<br>5 for UK |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id (i.e. Customer Id of the Payment Customer) of the selected payer.<br>Optional if PayerNumber is passed else Mandatory<br>Example: 123456 |
| `payerNumber` | `string \| undefined` | Optional | Payer Number of the selected payer.<br>Optional if PayerId is passed else Mandatory<br>Example: GB000000123 |
| `accounts` | [`Accounts \| undefined`](../../doc/models/accounts.md) | Optional | - |
| `bundleId` | `string \| null \| undefined` | Optional | Identifier of the Card bundle<br>Optional if cards list is given, else mandatory.<br>This input is a search criterion, if given. |
| `cards` | [`SearchCardRestriction \| undefined`](../../doc/models/search-card-restriction.md) | Optional | - |
| `includeLocationRestrictions` | `boolean \| null \| undefined` | Optional | True/False<br>Whether to include location restriction of the cards in the response.<br>Optional<br>Default ‘false’ |
| `includeBundleDetails` | `boolean \| null \| undefined` | Optional | Default value is False,<br>When the value is True, API will return bundle Id associated with cards in the response, if available.<br>Note: Use ‘Null’ or ‘False’ for optimum performance. A delay in response is expected when set to ‘True’. |
| `includeInheritedLimits` | `boolean \| null \| undefined` | Optional | Default value is True,<br>When True: service will return the inherited values for the usage limits (from card-program or account as available) when it is not overridden on the card. |

## Example (as JSON)

```json
{
  "ColCoId": 90,
  "ColCoCode": 104,
  "PayerId": 138,
  "PayerNumber": "PayerNumber0",
  "Accounts": {
    "AccountId": 28,
    "AccountNumber": "AccountNumber0"
  }
}
```

