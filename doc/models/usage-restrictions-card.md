
# Usage Restrictions Card

## Structure

`UsageRestrictionsCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dailySpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed per day.<br>Optional<br>It allows null in the input field. If Values is passed as null, apply the card type limit. However, if the card type limit is NULL for the same field then No limit will be applied in Gateway. |
| `weeklySpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed per week.<br>Optional |
| `monthlySpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed per month.<br>Optional |
| `perTransactionSpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed per transaction.<br>Optional |
| `annualSpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed per annum.<br>Optional |
| `lifeTimeSpend` | `number \| null \| undefined` | Optional | Maximum spend value (amount) allowed in card’s life time.<br>Optional |
| `dailyVolume` | `number \| null \| undefined` | Optional | Maximum volume (quantity) allowed per day.<br>Optional |
| `weeklyVolume` | `number \| null \| undefined` | Optional | Maximum volume (quantity) allowed per week.<br>Optional |
| `monthlyVolume` | `number \| null \| undefined` | Optional | Maximum volume (quantity) allowed per month.<br>Optional |
| `perTransactionVolume` | `number \| undefined` | Optional | Maximum volume (quantity) allowed per transaction.<br>Optional |
| `annualVolume` | `number \| null \| undefined` | Optional | Maximum volume (quantity) allowed per annum.<br>Optional |
| `lifeTimeVolume` | `number \| undefined` | Optional | Maximum volume (quantity) allowed in card’s life time.<br>Optional |
| `dailyTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed per day.<br>Optional |
| `weeklyTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed per week.<br>Optional |
| `monthlyTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed per month.<br>Optional. |
| `annualTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed per annum. |
| `lifeTimeTransactionCount` | `number \| null \| undefined` | Optional | Maximum number of transactions allowed in card’s lifetime.<br>Optional |

## Example (as JSON)

```json
{
  "DailySpend": 76.58,
  "WeeklySpend": 181.92,
  "MonthlySpend": 132.96,
  "PerTransactionSpend": 101.58,
  "AnnualSpend": 51.38
}
```

