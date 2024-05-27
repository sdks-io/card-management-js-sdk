
# PIN Reminder Reference

This class holds the PIN Reminder References

## Structure

`PINReminderReference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardId` | `number \| null \| undefined` | Optional | Card Id |
| `pANID` | `number \| null \| undefined` | Optional | PAN ID |
| `pAN` | `number \| null \| undefined` | Optional | PAN |
| `cardExpiryDate` | `string \| null \| undefined` | Optional | Expiry date of the card.<br>Mandatory if Either PAN or PANID is passed, else optional.<br>Format: yyyyMMdd |
| `referenceId` | `number \| undefined` | Optional | Individual card pin reminder reference number for the Pin Reminder request. |

## Example (as JSON)

```json
{
  "CardId": 122,
  "PANID": 154,
  "PAN": 52,
  "CardExpiryDate": "CardExpiryDate4",
  "ReferenceId": 46
}
```

