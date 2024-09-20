
# Usage Restriction

Details of the usage restrictions such as day/week/month value and volume restrictions applied on the card.

## Structure

`UsageRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `level` | `string \| undefined` | Optional | Usage limit is applied on the card from this level.<br>Valid values –<br>•    Inherited<br>•    Card<br>When Card level usage restrictions are not present, the API will return the inherited restrictions.<br>Note: -This field is deprecated. Instead, use ‘Override’. |
| `dailySpend` | `number \| undefined` | Optional | Maximum spend value (amount) allowed per day.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `dailySpendAccumulated` | `number \| undefined` | Optional | Balance spend value (amount) available for rest of the day. |
| `dailySpendBalance` | `number \| undefined` | Optional | Balance spend value (amount) available for rest of the day. |
| `dailySpendOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `dailySpendThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55 |
| `weeklySpend` | `number \| undefined` | Optional | Maximum spend value (amount) allowed per week.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `weeklySpendAccumulated` | `number \| undefined` | Optional | Value (amount) spent during the week. |
| `weeklySpendBalance` | `number \| undefined` | Optional | Balance spend value (amount) available for rest of the week. |
| `weeklySpendOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `weeklySpendThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `monthlySpend` | `number \| undefined` | Optional | Maximum spend value (amount) allowed per month.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `monthlySpendAccumulated` | `number \| undefined` | Optional | Value (amount) spent during the month. |
| `monthlySpendBalance` | `number \| undefined` | Optional | Balance spend value (amount) available for rest of the month. |
| `monthlySpendOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `perTransactionSpend` | `number \| undefined` | Optional | Maximum spend value (amount) allowed per transaction.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `perTransactionSpendOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `annualSpend` | `number \| undefined` | Optional | Maximum spend value (amount) allowed per annum.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `annualSpendAccumulated` | `number \| undefined` | Optional | Value (amount) spent during the year. |
| `annualSpendBalance` | `number \| undefined` | Optional | Balance spend value (amount) available for rest of the year. |
| `annualSpendOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `annualSpendThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `lifeTimeSpend` | `number \| undefined` | Optional | Maximum spend value (amount) allowed in card’s life time.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited |
| `lifeTimeSpendAccumulated` | `number \| undefined` | Optional | Value (amount) spent during the card’s life time |
| `lifeTimeSpendBalance` | `number \| undefined` | Optional | Balance spend value (amount) available for rest of the card’s life time. |
| `lifeTimeSpendOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `lifeTimeSpendThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `dailyVolume` | `number \| undefined` | Optional | Maximum volume (quantity) allowed per day.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `dailyVolumeAccumulated` | `number \| undefined` | Optional | Volume (quantity) bought during the day. |
| `dailyVolumeBalance` | `number \| undefined` | Optional | Balance volume (quantity) available for rest of the day. |
| `dailyVolumeOverride` | `number \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `dailyVolumeThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `weeklyVolume` | `number \| undefined` | Optional | Maximum volume (quantity) allowed per week.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `weeklyVolumeAccumulated` | `number \| undefined` | Optional | Volume (quantity) bought during the week. |
| `weeklyVolumeBalance` | `number \| undefined` | Optional | Balance volume (quantity) available for rest of the week. |
| `weeklyVolumeOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `weeklyVolumeThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `monthlyVolume` | `number \| undefined` | Optional | Maximum volume (quantity) allowed per month.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `monthlyVolumeAccumulated` | `number \| undefined` | Optional | Volume (quantity) bought during the month. |
| `monthlyVolumeBalance` | `number \| undefined` | Optional | Balance volume (quantity) available for rest of the month. |
| `monthlyVolumeOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default). |
| `monthlyVolumeThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `perTransactionVolume` | `number \| undefined` | Optional | Maximum volume (quantity) allowed per transaction.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `perTransactionVolumeOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `annualVolume` | `number \| undefined` | Optional | Maximum volume (quantity) allowed per annum.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `annualVolumeAccumulated` | `number \| undefined` | Optional | Volume (quantity) bought during the year. |
| `annualVolumeBalance` | `number \| undefined` | Optional | Balance volume (quantity) available for rest of the year. |
| `annualVolumeOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `annualVolumeThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `lifeTimeVolume` | `number \| undefined` | Optional | Maximum volume (quantity) allowed in the card’s life time.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `lifeTimeVolumeAccumulated` | `number \| undefined` | Optional | Volume (quantity) bought during the card’s life time. |
| `lifeTimeVolumeBalance` | `number \| undefined` | Optional | Balance volume (quantity) available for rest of the card’s life time. |
| `lifeTimeVolumeOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `lifeTimeVolumeThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `dailyTransactionCount` | `number \| undefined` | Optional | Maximum number of transactions allowed per day.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited |
| `dailyTransactionAccumulated` | `number \| undefined` | Optional | Number of times the card is used during the day. |
| `dailyTransactionBalance` | `number \| undefined` | Optional | Number of times the card could be used in rest of the day. |
| `dailyTransactionOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `dailyTransactionThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `weeklyTransactionCount` | `number \| undefined` | Optional | Maximum number of transactions allowed per week.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `weeklyTransactionAccumulated` | `number \| undefined` | Optional | Number of times the card is used during the week |
| `weeklyTransactionBalance` | `number \| undefined` | Optional | Number of times the card could be used in rest of the week. |
| `weeklyTransactionOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `weeklyTransactionThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `monthlyTransactionCount` | `number \| undefined` | Optional | Maximum number of transactions allowed per month.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `monthlyTransactionAccumulated` | `number \| undefined` | Optional | Number of times the card is used during the month |
| `monthlyTransactionBalance` | `number \| undefined` | Optional | Number of times the card could be used in rest of the month. |
| `monthlyTransactionOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `monthlyTransactionThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `annualTransactionCount` | `number \| undefined` | Optional | Maximum number of transactions allowed per annum.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance. |
| `annualTransactionAccumulated` | `number \| undefined` | Optional | Number of times the card is used during the year. |
| `annualTransactionBalance` | `number \| undefined` | Optional | Number of times the card could be used in rest of the year. |
| `annualTransactionOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `annualTransactionThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |
| `lifeTimeTransactionCount` | `number \| undefined` | Optional | Maximum number of transactions allowed in the card’s life time.<br>Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.<br>However, Inherited limit ‘0’ represents unlimited. |
| `lifeTimeTransactionAccumulated` | `number \| undefined` | Optional | Number of times the card is used during the card’s life time. |
| `lifeTimeTransactionBalance` | `number \| undefined` | Optional | Number of times the card could be used in rest of the card’s life time. |
| `lifeTimeTransactionOverride` | `boolean \| undefined` | Optional | Indicate if the limit is overridden or default. (False for default).<br>Example: false |
| `lifeTimeTransactionThreshold` | `number \| undefined` | Optional | The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.<br>Example: 50.55<br>This is an optional output field. |

## Example (as JSON)

```json
{
  "Level": "Level8",
  "DailySpend": 43.36,
  "DailySpendAccumulated": 178.28,
  "DailySpendBalance": 56.44,
  "DailySpendOverride": false
}
```

