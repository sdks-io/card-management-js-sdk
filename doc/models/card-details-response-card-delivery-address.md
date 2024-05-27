
# Card Details Response Card Delivery Address

Delivery address.

## Structure

`CardDetailsResponseCardDeliveryAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactForeName` | `string \| undefined` | Optional | Fore name of the contact person |
| `contactMiddleName` | `string \| undefined` | Optional | Middle name of the contact person |
| `contactLastName` | `string \| undefined` | Optional | Last name of the contact person |
| `contactTitle` | `string \| undefined` | Optional | Title of the contact person Optional Max field length- 10 Note- If the Shell Card Platform configuration is set to clear the personal details captured on card orders, this value will be cleared from the record after processing the request.<br>**Constraints**: *Maximum Length*: `10` |
| `companyName` | `string` | Required | Company name Mandatory if IsNewDeliveryAddress and OrderReplacement are passed. True, Note- If the Shell Card Platform configuration is set to clear the personal details captured on card orders, this value will be cleared from the record after processing the request. |
| `addressId` | `number` | Required | Address Id in cards platform. |
| `addressLine1` | `string` | Required | Address line 1 Mandatory if IsNewDeliveryAddress and OrderReplacement are passed True. Max field length- 40 Note- If the Shell Card Platform configuration is set to clear the personal details captured on card orders, this value will be cleared from the record after processing the request.<br>**Constraints**: *Minimum Length*: `1` |
| `addressLine2` | `string \| undefined` | Optional | Address line 2 Optional Max field length- 40 Note- If the Shell Card Platform configuration is set to clear the personal details captured on card orders, this value will be cleared from the record after processing the request. |
| `addressLine3` | `string \| undefined` | Optional | Address line Optional Max field length- 40 Note- If the Shell Card Platform configuration is set to clear the personal details captured on card orders, this value will be cleared from the record after processing the request. |
| `zipCode` | `string` | Required | ZIP code Mandatory if IsNewDeliveryAddress and OrderReplacement are passed. True, Max field length- 10 Note- If the Shell Card Platform configuration is set to clear the personal details captured on card orders, this value will be cleared from the record after processing the request.<br>**Constraints**: *Maximum Length*: `10` |
| `city` | `string \| undefined` | Optional | City Max field length- 40 Note- If the Shell Card Platform configuration is set to clear the personal details captured on card orders, this value will be cleared from the record after processing the request.<br>**Constraints**: *Maximum Length*: `40` |
| `regionId` | `number \| null \| undefined` | Optional | Region Id |
| `region` | `string \| undefined` | Optional | Region Optional When region is passed, Shell Card Platform will look up for the region id for the given region.  If the option to clear personal details is set in the Shell Card Platform, then this value will be cleared from the record after processing the request . |
| `countryId` | `number` | Required | Country Id in cards platform. |
| `countryISOCode` | `string` | Required | The ISO code of the country. Mandatory if IsNewDeliveryAddress and OrderReplacement are passed. If the option to clear personal details is set in the Shell Card Platform, then this value will be cleared from the record after processing the request . |
| `country` | `string` | Required | Country name. |

## Example (as JSON)

```json
{
  "ContactForeName": "ROBERT",
  "ContactMiddleName": "M",
  "ContactLastName": "Langdon",
  "ContactTitle": "Mr.",
  "CompanyName": "PARKLEY Philippines",
  "AddressId": 1768,
  "AddressLine1": "No 345, 1st cross,",
  "AddressLine2": "10th avenue",
  "AddressLine3": "makati city",
  "ZipCode": "1630",
  "City": "manila",
  "Region": "EU",
  "CountryId": 1,
  "CountryISOCode": "PH",
  "Country": "Philippines"
}
```

