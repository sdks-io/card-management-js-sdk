
# PIN Reminder Request

This entity models the data that is received in the https request body of the PINReminder operation.

## Structure

`PINReminderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `number \| undefined` | Optional | Account Id of the customer.<br /><br>Optional if AccountNumber is passed, else Mandatory.<br /><br>This input is a search criterion, if given. |
| `accountNumber` | `string \| undefined` | Optional | Account Number of the customer.<br /><br>Optional if AccountId is passed, else Mandatory.<br /><br>This input is a search criterion, if given. |
| `colCoCode` | `number \| undefined` | Optional | Collecting Company Code (Shell Code) of the selected payer. <br /><br>Mandatory for serviced OUs such as Romania, Latvia, Lithuania, Estonia, Ukraine etc. <br /><br>It is optional for other countries if ColCoID is provided. |
| `colCoId` | `number \| undefined` | Optional | Collecting Company Id of the selected payer<br /><br>Optional if ColCoCode is passed else Mandatory. |
| `payerId` | `number \| undefined` | Optional | Payer Id (i.e. Customer Id of the Payment Customer of the selected payer.<br /><br>Optional if PayerNumber is passed else Mandatory |
| `payerNumber` | `string \| undefined` | Optional | Payer Number (Ex: GB000000123) of the selected payer.<br /><br>Optional if PayerId is passed else Mandatory |
| `pINReminderCardDetails` | [`PINReminderCardDetails[] \| undefined`](../../doc/models/pin-reminder-card-details.md) | Optional | List of PINReminderCardDetails entity. The fields of this entity are described below. |

## Example (as JSON)

```json
{
  "AccountId": 178,
  "AccountNumber": "AccountNumber6",
  "ColCoCode": 84,
  "ColCoId": 70,
  "PayerId": 118
}
```

