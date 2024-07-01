
# Account Velocity Limit

## Structure

`AccountVelocityLimit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | Type of velocity (COUNT type is not present for limits of PERTRX period<br>Possible Values: VALUE, VOLUME, COUNT |
| `period` | `string \| undefined` | Optional | Duration of the velocity or threshold alert.<br>Possible Values: DAILY, WEEKLY, MONTHLY, ANNUAL, LIFETIME, PERTRX |
| `limit` | `number \| undefined` | Optional | The limit associated with this velocity with the correct number of digits after the decimal point according to the minor denomination of the currency of the card issuer.<br>Example: 1500.55 |
| `accumulation` | `number \| undefined` | Optional | The transaction accumulation during the current period with the correct number of digits after the decimal point according to the minor denomination of the currency of the card issuer (except for COUNT type velocity). Not present for PERTRX period.<br>Example: 1100.55 |
| `balance` | `number \| undefined` | Optional | The remaining/available balance at this point in time with the correct number of digits after the decimal point according to the minor denomination of the currency of the card issuer (except for COUNT type velocity). Not present for PERTRX period.<br>Example: 400.55 |
| `override` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (false for default).<br>Example: false |
| `productGroup` | `string \| undefined` | Optional | The reference group name for product differentiated velocities. This field cannot be used with Volume type velocity.<br>Example: RoadSvc<br>This is an optional output field. |
| `threshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |

## Example (as JSON)

```json
{
  "Type": "Type4",
  "Period": "Period6",
  "Limit": 90.78,
  "Accumulation": 198.08,
  "Balance": 132.24
}
```

