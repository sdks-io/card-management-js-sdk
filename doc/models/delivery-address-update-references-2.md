
# Delivery Address Update References 2

## Structure

`DeliveryAddressUpdateReferences2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardId` | `number \| undefined` | Optional | CardId |
| `cardPAN` | `string \| undefined` | Optional | PAN of the card. |
| `accountId` | `number \| undefined` | Optional | AccountId |
| `accountNumber` | `string \| undefined` | Optional | Account number |
| `referenceId` | `number \| undefined` | Optional | Individual delivery address update reference number for the delivery address update request. |
| `errorInfo` | `string \| undefined` | Optional | Individual error information for the delivery address update request. |

## Example (as JSON)

```json
{
  "CardId": 12345,
  "CardPAN": "7002051006629889654",
  "AccountId": 12356,
  "AccountNumber": "GB000000124",
  "ReferenceId": 573567,
  "ErrorInfo": "null"
}
```

