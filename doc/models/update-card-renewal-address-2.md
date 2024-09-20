
# Update Card Renewal Address 2

## Structure

`UpdateCardRenewalAddress2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactName` | `string` | Required | Contact name<br>Note: Mandatory when ‘UseCustomerDefaultAddress’ is set to ‘false’. The field is ignored otherwise.<br><br>Max Length: 50 |
| `contactTitle` | `string \| undefined` | Optional | Title<br>Max Length: 50 |
| `companyName` | `string` | Required | Company name.<br>Note: Mandatory when ‘UseCustomerDefaultAddress’ is set to ‘false’. The field is ignored otherwise.<br>Max Length: 50 |
| `addressLine` | `string` | Required | Address line 1,2 and 3<br>Note: Mandatory when ‘UseCustomerDefaultAddress’ is set to ‘false’. The field is ignored otherwise.<br>Max Length: 128<br>Note: -Each address line should be separated by “\r\n”. |
| `zipCode` | `string` | Required | ZipCode<br>Note: Mandatory when ‘UseCustomerDefaultAddress’ is set to ‘false’. The field is ignored otherwise.<br>Max Length: 10 |
| `city` | `string \| undefined` | Optional | City<br>Note: Mandatory when ‘UseCustomerDefaultAddress’ is set to ‘false’. The field is ignored otherwise.<br>Max Length: 40 |
| `regionID` | `number \| undefined` | Optional | Region id of card. |
| `countryID` | `number` | Required | Country ID<br>Note: Mandatory when ‘UseCustomerDefaultAddress’ is set to ‘false’. The field is ignored otherwise. |
| `emailAddress` | `string \| undefined` | Optional | Email Address<br><br>Max Length: 90<br>Note: -<br>Based on the international standard that there can be<br>•    Max Length 64 before the @ (the 'Local part’) =64(minimum of 1)<br>•    Max Lenth after the (the domain) = 88 (Minimum of 2) |
| `phoneNumber` | `string \| undefined` | Optional | Phone number<br>Optional<br>Max Length: 16 |

## Example (as JSON)

```json
{
  "ContactName": "Jack",
  "ContactTitle": "Mr",
  "CompanyName": "Travel Transport",
  "AddressLine": "Elm Street 11",
  "ZipCode": "1023EA",
  "City": "London",
  "RegionID": 2,
  "CountryID": 8,
  "EmailAddress": "testmail@gmail.com",
  "PhoneNumber": "+99999999999"
}
```

