
# PIN Delivery Details

PINDeliverDetails entity. The fields of this entity are described below.
This is mandatory if PINContactType is 4 else optional and ignored.

## Structure

`PINDeliveryDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactName` | `string \| null \| undefined` | Optional | Contact Name<br>Max Length: 50 |
| `contactTitle` | `string \| null \| undefined` | Optional | Contact Title<br>Max Length: 50 |
| `companyName` | `string` | Required | Company Name for PIN delivery.<br>Max Length: 50 |
| `addressLine` | `string` | Required | Address Lines<br>Max Length: 1024 |
| `zipCode` | `string \| null` | Required | Zip Code<br>Max Length: 10 |
| `city` | `string` | Required | City<br>Max Length: 40 |
| `regionID` | `number \| null \| undefined` | Optional | Region |
| `countryID` | `number \| null \| undefined` | Optional | Country |
| `phoneNumber` | `string \| null \| undefined` | Optional | Cardholder phone number for PIN delivery. |
| `emailAddress` | `string \| null \| undefined` | Optional | Cardholder email address for PIN delivery<br>Max Length : 90<br>Example: xxxxxx@example.com <br/>Note:Based on the international standard that there can be Max Length 64 before the @ (the 'Local part’) =64(minimum of 1) Max Lenth after the (the domain) = 88 (Minimum of 2) |
| `savePINReminder` | `boolean \| undefined` | Optional | Save PIN Reminder<br>If SavePINReminder is true, the contact address will be saved database for PIN reminder.<br><br><br/>Only allowed for PIN Advice paper delivery. |

## Example (as JSON)

```json
{
  "ContactName": "ContactName2",
  "ContactTitle": "ContactTitle4",
  "CompanyName": "CompanyName0",
  "AddressLine": "AddressLine4",
  "ZipCode": "ZipCode2",
  "City": "City8",
  "RegionID": 232,
  "CountryID": 106,
  "PhoneNumber": "PhoneNumber2"
}
```

