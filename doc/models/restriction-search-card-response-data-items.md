
# Restriction Search Card Response Data Items

## Structure

`RestrictionSearchCardResponseDataItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bundleId` | `number \| undefined` | Optional | Bundle Id associated with card |
| `restrictions` | [`SearchCardResponseRestrictions \| undefined`](../../doc/models/search-card-response-restrictions.md) | Optional | - |
| `restrictionCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code of the country. |
| `restrictionCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the country. |
| `accountId` | `number \| null \| undefined` | Optional | Account ID |
| `accountName` | `string \| null \| undefined` | Optional | Account Name |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number |
| `accountShortName` | `string \| null \| undefined` | Optional | AccountShortName |
| `cardId` | `number \| null \| undefined` | Optional | Unique Card |
| `cardTypeCode` | `string \| null \| undefined` | Optional | ISO code of the card i.e. first 7 digits of the PAN |
| `cardTypeId` | `number \| null \| undefined` | Optional | Card Type ID<br>Example Id & Description:<br>1 - Philippines CRT 7077861<br>2- Philippines Fleet 7002861<br>5-SHELL FLEET- HONG KONG 7002821<br>6-SHELL NHF- HONG KONG 7002821<br>7-SHELL CRT- HONG KONG 7077821 |
| `cardTypeName` | `string \| null \| undefined` | Optional | Card Type Name<br>Example Id & Description:<br>1 - Philippines CRT 7077861<br>2- Philippines Fleet 7002861<br>5-SHELL FLEET- HONG KONG 7002821<br>6-SHELL NHF- HONG KONG 7002821<br>7-SHELL CRT- HONG KONG 7077821 |
| `colCoCurrencyCode` | `string \| null \| undefined` | Optional | ISO currency code of the country |
| `colCoCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the country |
| `currencyCode` | `string \| null \| undefined` | Optional | ISO currency code of the Customer Currency |
| `currencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of the Customer Currency Code |
| `driverName` | `string \| null \| undefined` | Optional | Driver name |
| `expiryDate` | `string \| null \| undefined` | Optional | Expiry date of the card<br>Format: yyyyMMdd |
| `isCRT` | `boolean \| undefined` | Optional | True if it is a CRT type card, else false |
| `isFleet` | `boolean \| undefined` | Optional | True if it is a Fleet type card, else false |
| `isInternational` | `boolean \| undefined` | Optional | True if it is an international card, else false |
| `isNational` | `boolean \| undefined` | Optional | True if it is a national card, else false |
| `isPartnerSitesIncluded` | `boolean \| undefined` | Optional | True if it is allowed at all partner sites, else false |
| `isShellSitesOnly` | `boolean \| undefined` | Optional | True if it is only allowed at Shell sites, else false |
| `issueDate` | `string \| null \| undefined` | Optional | Issue date<br>Format: yyyyMMdd |
| `issueNumber` | `number \| null \| undefined` | Optional | Issue Number |
| `isSuperseded` | `boolean \| undefined` | Optional | True if a new card is issued with the same PAN, else false |
| `isVirtualCard` | `boolean \| undefined` | Optional | True if it is a virtual card, else false |
| `pAN` | `string \| null \| undefined` | Optional | Card PAN |
| `purchaseCategoryCode` | `string \| null \| undefined` | Optional | Purchase category code<br>Example:<br>0 - All Fuels (without VP) and Lubricants<br>1 - FuelSave only<br>2 - FuelSave and Lubricants<br>3 - No Restrictions<br>4 - VP and FuelSave<br>5 - Diesel ONLY<br>6 - Diesel and Lubricants<br>7 - VP and Lubricants<br>8 - VP and FuelSave and Lubricants |
| `purchaseCategoryId` | `number \| null \| undefined` | Optional | Purchase category Id |
| `purchaseCategoryName` | `string \| null \| undefined` | Optional | Purchase category name<br>Example:<br>0 - All Fuels (without VP) and Lubricants<br>1 - FuelSave only<br>2 - FuelSave and Lubricants<br>3 - No Restrictions<br>4 - VP and FuelSave<br>5 - Diesel ONLY<br>6 - Diesel and Lubricants<br>7 - VP and Lubricants<br>8 - VP and FuelSave and Lubricants |
| `statusDescription` | `string \| null \| undefined` | Optional | Status Description (Active, Temporarily Blocked, etc.,) |
| `statusId` | `number \| null \| undefined` | Optional | Card Status id |
| `vRN` | `string \| null \| undefined` | Optional | Vehicle registration number |
| `mediumTypeID` | `number \| null \| undefined` | Optional | Id of the medium type identifier.<br><br>Example: 1,2,4<br><br>Full list below:<br>1 - Fuel Card<br>2 - Fuel Card with EV<br>4 - Fuel Card and Key fob Card<br>5 - Key fob<br>6 - Virtual Card<br>7 - NPII Token<br>8 – Smartpay |
| `mediumType` | `string \| null \| undefined` | Optional | Name of the medium type identifier.<br><br>Example: Fuel Card, Fuel Card with EV, Key fob  <br>Full list below:<br>1 - Fuel Card<br>2 - Fuel Card with EV<br>4 - Fuel Card and Key fob Card<br>5 - Key fob<br>6 - Virtual Card<br>7 - NPII Token<br>8 - Smartpay |

## Example (as JSON)

```json
{
  "BundleId": 58,
  "Restrictions": {
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
        {
          "GlobalProductCode": "GlobalProductCode6",
          "Description": "Description8"
        }
      ],
      "ProductGroups": [
        {
          "ReferenceId": 82,
          "ProductGroupId": "ProductGroupId6",
          "Name": "Name0",
          "IsDefault": false,
          "IsFuelType": false
        },
        {
          "ReferenceId": 82,
          "ProductGroupId": "ProductGroupId6",
          "Name": "Name0",
          "IsDefault": false,
          "IsFuelType": false
        }
      ]
    },
    "UsageRestrictions": {
      "DailySpend": 7.72,
      "WeeklySpend": 10.22,
      "MonthlySpend": 48.66,
      "PerTransactionSpend": 17.28,
      "DailyVolume": 122
    }
  },
  "RestrictionCurrencyCode": "RestrictionCurrencyCode4",
  "RestrictionCurrencySymbol": "RestrictionCurrencySymbol4",
  "AccountId": 172
}
```

