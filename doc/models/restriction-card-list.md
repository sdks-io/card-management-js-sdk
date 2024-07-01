
# Restriction Card List

## Structure

`RestrictionCardList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardId` | `number \| undefined` | Optional | Unique Card Id |
| `pAN` | `string \| undefined` | Optional | Card PAN |
| `expiryDate` | `string \| undefined` | Optional | Expiry date of the card<br>Format: yyyyMMdd<br>Note: Clients to convert this to appropriate DateTime type. |
| `statusId` | `number \| undefined` | Optional | Card Status id |
| `statusDescription` | `string \| undefined` | Optional | Status Description (Active, Temporarily Blocked, etc.,) |
| `driverName` | `string \| undefined` | Optional | Driver name<br>Example:  ANDREW GILBERRY |
| `vRN` | `string \| undefined` | Optional | Vehicle registration number<br>Example: MV65YLH |
| `issueDate` | `string \| undefined` | Optional | Issue date<br>Format: yyyyMMdd<br>Note: Clients to convert this to appropriate DateTime type. |
| `issueNumber` | `number \| undefined` | Optional | Issue Number |
| `accountId` | `number \| undefined` | Optional | Account ID<br>Example: 29484 |
| `accountNumber` | `string \| undefined` | Optional | Account Number<br>Example: GB99215176 |
| `accountName` | `string \| undefined` | Optional | Account Name<br>Example: MATTHEW ALGIE & COMPANY LIMITED |
| `accountShortName` | `string \| undefined` | Optional | Account Short Name |
| `currencyCode` | `string \| undefined` | Optional | ISO currency code of the Customer Currency<br>Example: GBP |
| `colCoCurrencyCode` | `string \| undefined` | Optional | ISO currency code of the country.<br>Example: GBP |
| `colCoCurrencySymbol` | `string \| undefined` | Optional | Currency symbol of the country.<br>Example: £, $ |
| `restrictionCurrencyCode` | `string \| undefined` | Optional | ISO currency code of the country.<br>Example: GBP |
| `restrictionCurrencySymbol` | `string \| undefined` | Optional | Currency symbol of the country.<br>Example: £, $ |
| `purchaseCategoryId` | `string \| undefined` | Optional | Purchase category Id<br>Example: 123, 124, etc., |
| `purchaseCategoryCode` | `string \| undefined` | Optional | Purchase category code<br>Example:<br>0 - All Fuels (without VP) and Lubricants<br>1 - FuelSave only<br>2 - FuelSave and Lubricants<br>3 - No Restrictions<br>4 - VP and FuelSave<br>5 - Diesel ONLY<br>6 - Diesel and Lubricants<br>7 - VP and Lubricants<br>8 - VP and FuelSave and Lubricants |
| `purchaseCategoryName` | `string \| undefined` | Optional | Purchase category name<br>Example:<br>0 - All Fuels (without VP) and Lubricants<br>1 - FuelSave only<br>2 - FuelSave and Lubricants<br>3 - No Restrictions<br>4 - VP and FuelSave<br>5 - Diesel ONLY<br>6 - Diesel and Lubricants<br>7 - VP and Lubricants<br>8 - VP and FuelSave and Lubricants |
| `isSuperseded` | `boolean \| undefined` | Optional | True/False<br>True if a new card is issued with the same PAN, else false |
| `isVirtualCard` | `boolean \| undefined` | Optional | True/False<br>True if it is a virtual card, else false |
| `isNational` | `boolean \| undefined` | Optional | True/False<br>True if it is a national card, else false |
| `isInternational` | `boolean \| undefined` | Optional | True/False<br>True if it is an international card, else false |
| `isCRT` | `boolean \| undefined` | Optional | True/False<br>True if it is a CRT type card, else false |
| `isFleet` | `boolean \| undefined` | Optional | True/False<br>True if it is a Fleet type card, else false |
| `isShellSitesOnly` | `boolean \| undefined` | Optional | True/False<br>True if it is only allowed at Shell sites, else false |
| `isPartnerSitesIncluded` | `boolean \| undefined` | Optional | True/False<br>True if it is allowed at all partner sites, else false |
| `cardTypeId` | `number \| undefined` | Optional | Card Type ID<br>Example Id & Description:<br>1 - Philippines CRT 7077861<br>2- Philippines Fleet 7002861<br>5-SHELL FLEET- HONG KONG 7002821<br>6-SHELL NHF- HONG KONG 7002821<br>7-SHELL CRT- HONG KONG 7077821 |
| `cardTypeCode` | `string \| undefined` | Optional | ISO code of the card i.e. first 7 digits of the PAN |
| `cardTypeName` | `string \| undefined` | Optional | Card Type Name<br>Example Id & Description:<br>1 - Philippines CRT 7077861<br>2- Philippines Fleet 7002861<br>5-SHELL FLEET- HONG KONG 7002821<br>6-SHELL NHF- HONG KONG 7002821<br>7-SHELL CRT- HONG KONG 7077821 |
| `bundleId` | `string \| undefined` | Optional | Bundle Id associated with card in the Gateway.<br>This field will have a null value if the card is not associated with any bundle of IncludeBundleDetails in request is false.<br>If the search is based on a bundle Id, the same will be returned. |
| `mediumTypeID` | `number \| undefined` | Optional | Id of the medium type identifier.<br>Example: 1,2,4<br>Full list below:<br>1 - Fuel Card<br>2 - Fuel Card with EV<br>4 - Fuel Card and Key fob Card<br>5 - Key fob<br>6 - Virtual Card<br>7 - NPII Token<br>8 – Smartpay |
| `mediumType` | `string \| undefined` | Optional | Name of the medium type identifier.<br><br>Example: Fuel Card, Fuel Card with EV, Key fob  <br>Full list below:<br>1 - Fuel Card<br>2 - Fuel Card with EV<br>4 - Fuel Card and Key fob Card<br>5 - Key fob<br>6 - Virtual Card<br>7 - NPII Token<br>8 - Smartpay |

## Example (as JSON)

```json
{
  "CardId": 110,
  "PAN": "PAN8",
  "ExpiryDate": "ExpiryDate8",
  "StatusId": 178,
  "StatusDescription": "StatusDescription4"
}
```

