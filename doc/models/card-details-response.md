
# Card Details Response

## Structure

`CardDetailsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payerId` | `number \| null \| undefined` | Optional | Payer Id (i.e. Customer Id of the Payment Customer in the Shell Card Platform) of the selected payer. |
| `payerNumber` | `string \| null \| undefined` | Optional | Payer Number of the selected payer. |
| `accountId` | `number \| null \| undefined` | Optional | Account Id (i.e. Customer Id of the Customer in the Shell Card Platform) of the customer. |
| `accountNumber` | `string \| null \| undefined` | Optional | Account Number of the customer. |
| `accountShortName` | `string \| null \| undefined` | Optional | Account short name. |
| `colCoCountryCode` | `string \| null \| undefined` | Optional | ISO 3166 Alpha-2 Country Code for the customer and card owning country. |
| `localCurrencyCode` | `string \| null \| undefined` | Optional | ISO 4217 Curreny Code of the local currency. |
| `localCurrencySymbol` | `string \| null \| undefined` | Optional | Currency symbol of local currency. |
| `cardId` | `number \| undefined` | Optional | Unique Card Id in Cards platform. |
| `pAN` | `string \| null \| undefined` | Optional | Card PAN. In the response body the PAN will be masked if the option is enabled in the Shell Card Platform. |
| `statusId` | [`CardDetailsResponseStatusIdEnum \| undefined`](../../doc/models/card-details-response-status-id-enum.md) | Optional | Possible Id’s and description:<br><br>* 1  Active<br>* 7  Blocked Card<br>* 8  Expired<br>* 9  Cancelled<br>* 10  New<br>* 23  Pending Renewal<br>* 31  Replaced<br>* 41  Temporary Block (Customer)<br>* 42  Temporary Block (Shell)<br>* 43  Fraud<br>* 101 Active (Block in progress) *<br>* 102 Blocked Card (Unblock in progress) *<br>* 103 Active (Cancel in progress) *<br>* 104 Active (Marked as damaged) *<br>* 105 New (Cancel as damaged) *<br>* 106 Active(Scheduled for block) ”#<br>* 107 Blocked Card(Scheduled for unblock)*#<br>* 108 Blocked Card (Cancel in progress) *<br><br>> Note:<br>> •  Items marked with * are intermediate statuses  to indicate that there are pending requests in progress. , The response can contain these intermediate statuses only if the IncludeIntermediateStatus flag is true.<br>> •  The placeholder “<Shell Card Platform Status>” in the items marked with # will be replaced with the Shell Card Platform status description. E.g., “Active (Scheduled for block)” |
| `status` | `string \| undefined` | Optional | Possible Id’s and description:<br><br>* 1  Active<br>* 7  Blocked Card<br>* 8  Expired<br>* 9  Cancelled<br>* 10  New<br>* 23  Pending Renewal<br>* 31  Replaced<br>* 41  Temporary Block (Customer)<br>* 42  Temporary Block (Shell)<br>* 43  Fraud<br>* 101 Active (Block in progress) *<br>* 102 Blocked Card (Unblock in progress) *<br>* 103 Active (Cancel in progress) *<br>* 104 Active (Marked as damaged) *<br>* 105 New (Cancel as damaged) *<br>* 106 Active(Scheduled for block) ”#<br>* 107 Blocked Card(Scheduled for unblock) *#<br>* 108 Blocked Card (Cancel in progress) *<br><br>> Note:<br>> •  Items marked with * are intermediate statuses  to indicate that there are pending requests in progress. , The response can contain these intermediate statuses only if the IncludeIntermediateStatus flag is true.<br>> •  The placeholder “<Shell Card Platform Status>” in the items marked with # will be replaced with the Shell Card Platform status description. E.g., “Active (Scheduled for block)” |
| `odometerPrompt` | `boolean \| undefined` | Optional | True if odometer input is enabled on the card, else false |
| `fleetIdPrompt` | `boolean \| undefined` | Optional | True if fleet id input is enabled, else false |
| `pINType` | [`CardDetailsResponsePINTypeEnum \| undefined`](../../doc/models/card-details-response-pin-type-enum.md) | Optional | PIN type:<br><br>* `Card` - Card PIN<br>* `Fleet` - Fleet PIN |
| `hasPIN` | `boolean \| undefined` | Optional | True if card has PIN, else false |
| `isSelfSelectedPIN` | `boolean \| undefined` | Optional | True if card has Self Selected PIN, else false |
| `temporaryBlockAllowed` | `boolean \| undefined` | Optional | True if card can be blocked temporarily, else false |
| `unblockAllowed` | `boolean \| undefined` | Optional | True/False True if card can be Unblocked, else false |
| `permanentBlockAllowed` | `boolean \| undefined` | Optional | True if card can be blocked permanently, else false |
| `issueNumber` | `number \| undefined` | Optional | Issue number of the card |
| `reissueSetting` | [`CardDetailsResponseReissueSettingEnum \| null \| undefined`](../../doc/models/card-details-response-reissue-setting-enum.md) | Optional | Reissue setting of the card. If the card is superseded (i.e. a replacement/new card is issued) then reissue setting of the latest card issued. Reissue setting:<br><br>* `True` - Card will be Reissued when nearing its expiry date<br>* `False` - Card will not be Reissued |
| `internationalPOSLanguageID` | [`CardDetailsResponseInternationalPOSLanguageIDEnum \| undefined`](../../doc/models/card-details-response-international-pos-language-id-enum.md) | Optional | POS language identifier. Language Id:<br><br>* `1` - German<br>* `2` - French<br>* `3` - Bulgarian<br>* `4` - Croatian<br>* `5` - Czech<br>* `6` - Danish<br>* `7` - Finnish<br>* `8` - English<br>* `9` - Greek<br>* `10` - Chinese<br>* `11` - Hungarian<br>* `12` - Italian<br>* `13` - Luxembourgish<br>* `14` - Malay<br>* `15` - Dutch<br>* `16` - Norwegian, Bokmal<br>* `17` - Urdu<br>* `18` - Polish<br>* `19` - Portuguese<br>* `20` - Romanian<br>* `21` - Russian<br>* `22` - Slovak<br>* `23` - Slovenian<br>* `24` - Spanish<br>* `25` - Swedish<br>* `26` - Turkish<br>* `27` - Thai<br>* `28` - Filipino<br>* `29` - Estonian<br>* `30` - Latvian<br>* `31` - Lithuanian |
| `internationalPOSLanguageCode` | [`CardDetailsResponseInternationalPOSLanguageCodeEnum \| undefined`](../../doc/models/card-details-response-international-pos-language-code-enum.md) | Optional | POS language code. Language code:<br><br>* `deu` - German<br>* `fra` - French<br>* `bul` - Bulgarian<br>* `hrv` - Croatian<br>* `ces` - Czech<br>* `dan` - Danish<br>* `fin` - Finnish<br>* `eng` - English<br>* `ell` - Greek<br>* `zho` - Chinese<br>* `hun` - Hungarian<br>* `ita` - Italian<br>* `ltz` - Luxembourgish<br>* `msa` - Malay<br>* `nld` - Dutch<br>* `nob` - Norwegian, Bokmal<br>* `urd` - Urdu<br>* `pol` - Polish<br>* `por` - Portuguese<br>* `ron` - Romanian<br>* `rus` - Russian<br>* `slk` - Slovak<br>* `slv` - Slovenian<br>* `spa` - Spanish<br>* `swe` - Swedish<br>* `tur` - Turkish<br>* `tha` - Thai<br>* `fil` - Filipino<br>* `est` - Estonian<br>* `lav` - Latvian<br>* `lit` - Lithuanian |
| `localPOSLanguageID` | [`CardDetailsResponseLocalPOSLanguageIDEnum \| undefined`](../../doc/models/card-details-response-local-pos-language-id-enum.md) | Optional | POS language identifier. Language Id:<br><br>* `1` - German<br>* `2` - French<br>* `3` - Bulgarian<br>* `4` - Croatian<br>* `5` - Czech<br>* `6` - Danish<br>* `7` - Finnish<br>* `8` - English<br>* `9` - Greek<br>* `10` - Chinese<br>* `11` - Hungarian<br>* `12` - Italian<br>* `13` - Luxembourgish<br>* `14` - Malay<br>* `15` - Dutch<br>* `16` - Norwegian, Bokmal<br>* `17` - Urdu<br>* `18` - Polish<br>* `19` - Portuguese<br>* `20` - Romanian<br>* `21` - Russian<br>* `22` - Slovak<br>* `23` - Slovenian<br>* `24` - Spanish<br>* `25` - Swedish<br>* `26` - Turkish<br>* `27` - Thai<br>* `28` - Filipino<br>* `29` - Estonian<br>* `30` - Latvian<br>* `31` - Lithuanian |
| `localPOSLanguageCode` | [`CardDetailsResponseLocalPOSLanguageCodeEnum \| undefined`](../../doc/models/card-details-response-local-pos-language-code-enum.md) | Optional | POS language code. Language code:<br><br>* `deu` - German<br>* `fra` - French<br>* `bul` - Bulgarian<br>* `hrv` - Croatian<br>* `ces` - Czech<br>* `dan` - Danish<br>* `fin` - Finnish<br>* `eng` - English<br>* `ell` - Greek<br>* `zho` - Chinese<br>* `hun` - Hungarian<br>* `ita` - Italian<br>* `ltz` - Luxembourgish<br>* `msa` - Malay<br>* `nld` - Dutch<br>* `nob` - Norwegian, Bokmal<br>* `urd` - Urdu<br>* `pol` - Polish<br>* `por` - Portuguese<br>* `ron` - Romanian<br>* `rus` - Russian<br>* `slk` - Slovak<br>* `slv` - Slovenian<br>* `spa` - Spanish<br>* `swe` - Swedish<br>* `tur` - Turkish<br>* `tha` - Thai<br>* `fil` - Filipino<br>* `est` - Estonian<br>* `lav` - Latvian<br>* `lit` - Lithuanian |
| `cardTypeCode` | `string \| null \| undefined` | Optional | ISO code of the card i.e. first 7 digits of the PAN. |
| `cardTypeId` | `number \| null \| undefined` | Optional | Card Type ID |
| `cardTypeName` | `string \| null \| undefined` | Optional | Card Type Name |
| `tokenTypeId` | `number \| null \| undefined` | Optional | Token Type ID configured for the Card |
| `tokenTypeName` | `string \| null \| undefined` | Optional | Token Type Name configured for the Card |
| `isChipCard` | `boolean \| undefined` | Optional | True if a chip card, else false |
| `isMagStripCard` | `boolean \| undefined` | Optional | True if it is a magnetic stripe card, else false |
| `isVirtualCard` | `boolean \| undefined` | Optional | True if it is a virtual card, else false |
| `purchaseCategoryCode` | `string \| null \| undefined` | Optional | Purchase category code of the card.<br>**Constraints**: *Maximum Length*: `1` |
| `purchaseCategoryId` | `number \| undefined` | Optional | Purchase category identifier in the Shell Card Platform. |
| `purchaseCategoryName` | `string \| null \| undefined` | Optional | Purchase category name |
| `isCRT` | `boolean \| undefined` | Optional | True if it is a Commercial Road Transport (CRT) card, else false |
| `isFleet` | `boolean \| undefined` | Optional | True if it is a Fleet card, else false |
| `isInternational` | `boolean \| undefined` | Optional | True if it is an international card, else false |
| `isNational` | `boolean \| undefined` | Optional | True if it is a national card, else false |
| `isPartnerSitesIncluded` | `boolean \| undefined` | Optional | True if it is allowed at all partner sites, else false |
| `isShellSitesOnly` | `boolean \| undefined` | Optional | True if it is only allowed at Shell sites, else false |
| `fuelSets` | [`CardDetailsResponseFuelSetsItems[] \| undefined`](../../doc/models/card-details-response-fuel-sets-items.md) | Optional | List of active fuel type product restrictions applied on the card.<br>**Constraints**: *Unique Items Required* |
| `nonFuelSets` | [`CardDetailsResponseNonFuelSetsItems[] \| undefined`](../../doc/models/card-details-response-non-fuel-sets-items.md) | Optional | List of active non-fuel type product restrictions applied on the card.<br>**Constraints**: *Unique Items Required* |
| `issuedDate` | `string \| null \| undefined` | Optional | Card issue date. |
| `expiryDate` | `string \| undefined` | Optional | Expiry date of the card. |
| `lastUsedDate` | `string \| null \| undefined` | Optional | Card last used date. |
| `misuseDate` | `string \| null \| undefined` | Optional | Last misused date of the card. |
| `temperature` | `string \| null \| undefined` | Optional | Hot-list status |
| `driverName` | `string \| undefined` | Optional | Driver name of the card. Note- While ordering card, optional when VRN is passed else mandatory.<br>**Constraints**: *Maximum Length*: `27` |
| `vRN` | `string \| undefined` | Optional | Vehicle registration number of the card. Note- While ordering card, optional when DriverName is passed else mandatory.<br>**Constraints**: *Maximum Length*: `16` |
| `embossText` | `string \| undefined` | Optional | Text printed on the card as account name.<br>**Constraints**: *Maximum Length*: `25` |
| `cardGroupId` | `number \| null \| undefined` | Optional | Existing Card Group ID, under which the replacement card is to be created.<br>Pass “-1” if the replacement card should not be assigned to any card group.<br>Optional.<br>If not provided, the replacement card will be created under the same card group as the current card.<br>Example- 156 |
| `cardGroupName` | `string \| null \| undefined` | Optional | Card group name. Note- 1. While ordering card this field is mandatory when IsNewCardGroup is true.<br>**Constraints**: *Maximum Length*: `30` |
| `renewalDate` | `string \| null \| undefined` | Optional | Renewal date of the card. Applicable if ReissueSetting is set to True. |
| `renewedCardId` | `number \| null \| undefined` | Optional | Renewed card id. |
| `renewedCardStatusId` | `number \| null \| undefined` | Optional | Renewed card status id. |
| `renewedCardStatus` | `string \| undefined` | Optional | Renewed card status description. |
| `renewedCardExpiryDate` | `string \| undefined` | Optional | Renewed card expiry date. |
| `renewedCardIssueNumber` | `number \| null \| undefined` | Optional | Renewed card issue number. |
| `renewedCardReissueSetting` | [`CardDetailsResponseRenewedCardReissueSettingEnum \| undefined`](../../doc/models/card-details-response-renewed-card-reissue-setting-enum.md) | Optional | Reissue setting of the renewed new card. Reissue Setting:<br><br>* `True` - Card will be sent to production<br>* `False` - Parent Card is Dormant or the Card is not to be produced |
| `creationDate` | `string \| null \| undefined` | Optional | Card Creation Date time |
| `effectiveDate` | `string \| null \| undefined` | Optional | Effective date for the Card |
| `lastModifiedDate` | `string \| null \| undefined` | Optional | Card last modified date |
| `bundleId` | `string \| null \| undefined` | Optional | Bundle Id associated with card in the Gateway. This field will have a null value if the card is not associated with any bundle in Gateway or the value of IncludeBundleDetails in request is false. |
| `cardDeliveryAddress` | [`CardDetailsResponseCardDeliveryAddress \| undefined`](../../doc/models/card-details-response-card-delivery-address.md) | Optional | Delivery address. |
| `pINDeliveryAddress` | [`CardDetailsResponsePINDeliveryAddress \| undefined`](../../doc/models/card-details-response-pin-delivery-address.md) | Optional | Delivery address. |
| `cardBlockSchedules` | [`CardDetailsResponseCardBlockSchedulesItemsAllOf0[] \| null \| undefined`](../../doc/models/card-details-response-card-block-schedules-items-all-of-0.md) | Optional | **Constraints**: *Unique Items Required* |
| `error` | [`ErrorStatus \| undefined`](../../doc/models/error-status.md) | Optional | - |
| `requestId` | `string \| undefined` | Optional | API Request |

## Example (as JSON)

```json
{
  "PayerId": 853,
  "PayerNumber": "PH50000843",
  "AccountId": 854,
  "AccountNumber": "PH50000844",
  "AccountShortName": "PARKLEY",
  "ColCoCountryCode": "PH",
  "LocalCurrencyCode": "EUR",
  "LocalCurrencySymbol": "€",
  "CardId": 125,
  "PAN": "7002861007636000020",
  "OdometerPrompt": true,
  "FleetIdPrompt": true,
  "PINType": "Card",
  "HasPIN": true,
  "IsSelfSelectedPIN": true,
  "TemporaryBlockAllowed": true,
  "UnblockAllowed": true,
  "PermanentBlockAllowed": true,
  "IssueNumber": 1,
  "InternationalPOSLanguageID": 8,
  "InternationalPOSLanguageCode": "eng",
  "LocalPOSLanguageID": 8,
  "LocalPOSLanguageCode": "eng",
  "CardTypeCode": "7077861",
  "CardTypeId": 1,
  "CardTypeName": "Philippines CRT 7077861",
  "TokenTypeId": 107,
  "TokenTypeName": "PH FLE NAT SIN R1",
  "IsChipCard": false,
  "IsMagStripCard": true,
  "IsVirtualCard": true,
  "PurchaseCategoryCode": "6",
  "PurchaseCategoryId": 54,
  "PurchaseCategoryName": "2 - FuelSave and Lubricants",
  "IsCRT": true,
  "IsFleet": true,
  "IsInternational": true,
  "IsNational": true,
  "IsPartnerSitesIncluded": true,
  "IsShellSitesOnly": true,
  "IssuedDate": "20181001",
  "ExpiryDate": "20181031",
  "LastUsedDate": "20181001 13:23:55",
  "MisuseDate": "20181001 13:23:55",
  "Temperature": "10-Warm",
  "DriverName": "ROBERT",
  "VRN": "MV65YLH",
  "EmbossText": "PARKLEY",
  "CardGroupId": 5,
  "CardGroupName": "GROUP1",
  "RenewalDate": "20181001",
  "RenewedCardId": 1325,
  "RenewedCardStatusId": 10,
  "RenewedCardStatus": "New",
  "RenewedCardExpiryDate": "20181031",
  "RenewedCardIssueNumber": 2,
  "CreationDate": "20181001",
  "EffectiveDate": "20181001",
  "LastModifiedDate": "20181001 13:23:55",
  "RequestId": "ed557f02-c7d7-4c01-b3e5-11bf3239c8ed"
}
```

