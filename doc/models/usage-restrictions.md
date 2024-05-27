
# Usage Restrictions

## Structure

`UsageRestrictions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dailySpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed per day.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `weeklySpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed per week.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `monthlySpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed per month.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `perTransactionSpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed per transaction.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `dailyVolume` | `number \| null \| undefined` | Optional | Maximum volume (quantity) allowed per day.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `weeklyVolume` | `number \| null \| undefined` | Optional | Maximum volume (quantity) allowed per week.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `monthlyVolume` | `number \| null \| undefined` | Optional | Maximum volume (quantity) allowed per month.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `perTransactionVolume` | `number \| null \| undefined` | Optional | Maximum volume (quantity) allowed per transaction.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `dailyTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed per day.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `weeklyTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed per week.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `monthlyTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed per month.<br>Optional.<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `annualSpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed per annum.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `lifeTimeSpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed in card’s life time.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `annualVolume` | `number \| null \| undefined` | Optional | Maximum volume (quantity) allowed per annum.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `lifeTimeVolume` | `number \| null \| undefined` | Optional | Maximum volume (quantity) allowed in card’s life time.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `annualTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed per annum.<br>Optional.<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |
| `lifeTimeTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed in card’s lifetime.<br>Optional<br>The value ‘0’ represents not set. If Values is passed as null, will be considered as inherited.<br>Valid range: 0 to 9999999999 |

## Example (as JSON)

```json
{
  "DailySpend": 7.72,
  "WeeklySpend": 10.22,
  "MonthlySpend": 48.66,
  "PerTransactionSpend": 17.28,
  "DailyVolume": 122
}
```
