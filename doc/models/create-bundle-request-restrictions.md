
# Create Bundle Request Restrictions

Restrictions to be applied on the bundle.
Mandatory

## Structure

`CreateBundleRequestRestrictions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `usageRestrictionAction` | `string \| null` | Required | Usage restrictions such as value, volume and transaction count restricted per day, week, month, annum, lifetime and transaction to be applied on the bundle.<br>Mandatory |
| `dayTimeRestrictionAction` | `string \| null` | Required | The value indicates what actions to be performed with respect to day time restriction.<br>Mandatory<br>Allowed values –<br>•	Add: Apply the given restriction on the bundle.<br>•	Default: No Day/Time restriction will be applied on the bundle in Gateway. |
| `locationRestrictionAction` | `string` | Required | The value indicates what actions to be performed with respect to location restriction.<br>Mandatory<br>Allowed values –<br>•	Add: Apply the given restriction on the bundle.<br>•	Default: No location restriction will be applied on the bundle in Gateway. |
| `dayTimeRestrictions` | [`DayTimeRestrictions \| undefined`](../../doc/models/day-time-restrictions.md) | Optional | Day/time restrictions such as weekdays and time range to be applied on the bundle.<br>Mandatory if respective action is set as “Add”.<br>The details of DayTimeRestriction entity is given below. |
| `locationRestrictions` | [`LocationRestrictions \| undefined`](../../doc/models/location-restrictions.md) | Optional | Location restrictions to be applied on the bundle which either allows or restricts using the cards, which are under the bundle, in the specified locations.<br>Mandatory if respective action is set as “Add”.<br>Details of location restrictions are given below. |
| `productRestrictions` | [`ProductRestrictions \| undefined`](../../doc/models/product-restrictions.md) | Optional | - |
| `usageRestrictions` | [`UsageRestrictions \| undefined`](../../doc/models/usage-restrictions.md) | Optional | - |

## Example (as JSON)

```json
{
  "UsageRestrictionAction": "UsageRestrictionAction0",
  "DayTimeRestrictionAction": "DayTimeRestrictionAction2",
  "LocationRestrictionAction": "LocationRestrictionAction6",
  "DayTimeRestrictions": {
    "Friday": false,
    "Monday": false,
    "Saturday": false,
    "Sunday": false,
    "Thursday": false
  },
  "LocationRestrictions": {
    "CountryRestrictions": {
      "Exclusive": false,
      "Countries": [
        "Countries7"
      ]
    },
    "NetworkRestrictions": [
      {
        "Country": "Country6",
        "Exclusive": false,
        "Networks": [
          "Networks3",
          "Networks4",
          "Networks5"
        ]
      },
      {
        "Country": "Country6",
        "Exclusive": false,
        "Networks": [
          "Networks3",
          "Networks4",
          "Networks5"
        ]
      }
    ],
    "ShellSiteRestrictions": [
      {
        "Country": "Country4",
        "Sites": [
          "Sites3",
          "Sites4"
        ],
        "SiteGroups": [
          "SiteGroups9",
          "SiteGroups8",
          "SiteGroups7"
        ],
        "Exclusive": false
      },
      {
        "Country": "Country4",
        "Sites": [
          "Sites3",
          "Sites4"
        ],
        "SiteGroups": [
          "SiteGroups9",
          "SiteGroups8",
          "SiteGroups7"
        ],
        "Exclusive": false
      }
    ],
    "PartnerSiteRestrictions": [
      {
        "NetworkCode": "NetworkCode2",
        "Sites": [
          "Sites3"
        ],
        "SiteGroups": [
          "SiteGroups1",
          "SiteGroups2"
        ],
        "Exclusive": false
      }
    ]
  },
  "ProductRestrictions": {
    "Products": [
      "Products4"
    ],
    "ProductGroups": [
      "ProductGroups3",
      "ProductGroups4"
    ]
  },
  "UsageRestrictions": {
    "DailySpend": 7.72,
    "WeeklySpend": 10.22,
    "MonthlySpend": 48.66,
    "PerTransactionSpend": 17.28,
    "DailyVolume": 122
  }
}
```

