
# Auto Renew Card Response Data Items

## Structure

`AutoRenewCardResponseDataItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `autoRenewReferenceId` | `number \| null \| undefined` | Optional | CardId and PAN of the card. ;( Semicolon is used as delimiter. |
| `cardIdAndPAN` | `string \| null \| undefined` | Optional | Reference number for each individual auto renew card in the order. |
| `pANID` | `number \| null \| undefined` | Optional | PANID of the card |

## Example (as JSON)

```json
{
  "AutoRenewReferenceId": 84,
  "CardIdAndPAN": "CardIdAndPAN6",
  "PANID": 48.46
}
```

