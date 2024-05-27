
# Create Card Group Request

## Structure

`CreateCardGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `colCoCode` | `number \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer.<br>Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. It is optional for other countries if ColCoID is provided.<br>Example:<br>86-Philippines<br>5-UK |
| `colCoId` | `number \| undefined` | Optional | Collecting Company Id  of the selected payer.<br>Optional if ColCoCode is passed else Mandatory.<br>Example:<br>1-Philippines<br>5-UK |
| `payerNumber` | `string \| undefined` | Optional | Payer Number of the selected payer.<br>Optional if PayerId is passed else Mandatory |
| `payerId` | `number \| undefined` | Optional | Payer Id (i.e., Customer Id of the Payment Customer in H3 Cards Platform) of the selected payer.<br>Optional if PayerNumber is passed else Mandatory |
| `accountId` | `number \| undefined` | Optional | Account ID of the customer.<br>Optional if AccountNumber is passed else Mandatory. |
| `accountNumber` | `string \| undefined` | Optional | Account Number of the customer.<br>Optional if AccountId is passed else Mandatory. |
| `printOnCard` | `boolean \| undefined` | Optional | Whether card group name to be embossed on the cards or not. |
| `cardGroupName` | `string \| null \| undefined` | Optional | - |
| `cards` | [`CreateCardGroupRequestCardsItems[] \| undefined`](../../doc/models/create-card-group-request-cards-items.md) | Optional | List of cards to be moved to the new card group. This list is optional – no card will be moved to the new card group when the list is empty.<br>The fields of Card entity are described in the below rows.<br>The maximum number of cards allowed to be moved in a request is 500 (configurable). The whole request including the card group creation will be rejected when the limit is exceeded. |

## Example (as JSON)

```json
{
  "ColCoCode": 56,
  "ColCoId": 42,
  "PayerNumber": "PayerNumber0",
  "PayerId": 90,
  "AccountId": 150
}
```

