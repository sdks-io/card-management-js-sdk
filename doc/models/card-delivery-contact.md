
# Card Delivery Contact

Request entity object for CardDeliveryContact
Mandatory when CardDeliveryType is 2 else ignored.

## Structure

`CardDeliveryContact`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deliveryContactTitle` | `string \| null \| undefined` | Optional | Title of the contact person <br /><br>Optional<br>Max field length: 10<br>**Constraints**: *Maximum Length*: `10` |
| `deliveryContactName` | `string \| null` | Required | Name of the contact person <br /><br>Mandatory  <br /><br>Max field length: 50<br>**Constraints**: *Maximum Length*: `50` |
| `deliveryCompanyName` | `string \| null` | Required | Company name <br /><br>Mandatory  <br /><br>Max field length: 50<br>**Constraints**: *Maximum Length*: `50` |
| `deliveryAddressLine1` | `string \| null` | Required | Address line 1 <br /><br>Mandatory<br /><br>Max field length: 40<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryAddressLine2` | `string \| null \| undefined` | Optional | Address line 2 <br /><br>Optional <br /><br>Max field length: 40  <br /><br>Optional<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryAddressLine3` | `string \| null \| undefined` | Optional | Address line 3 <br /><br>Optional <br /><br>Max field length: 40  <br /><br>Optional<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryZipCode` | `string \| null` | Required | ZIP code <br /><br>Mandatory  <br /><br>Max field length: 10  <br /><br>Optional<br>**Constraints**: *Maximum Length*: `10` |
| `deliveryCity` | `string \| null` | Required | City  <br /><br>Mandatory  <br /><br>Max field length: 40<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryRegionId` | `number \| null \| undefined` | Optional | Region Id  <br /><br>Optional |
| `deliveryRegion` | `string \| null \| undefined` | Optional | Region  <br /><br>Optional<br /><br>When region is passed |
| `deliveryCountry` | `string \| null` | Required | The ISO code of the country.<br /> |
| `phoneNumber` | `string \| null \| undefined` | Optional | Phone number for courier delivery.<br /><br>Optional.<br /><br>Max field length: 20<br>**Constraints**: *Maximum Length*: `20` |
| `emailAddress` | `string \| null \| undefined` | Optional | Email address for courier delivery.<br /><br>Optional.<br /><br>Max field length: 90 <br/>Note:Based on the international standard that there can be Max Length 64 before the @ (the 'Local part’) =64(minimum of 1) Max Lenth after the (the domain) = 88 (Minimum of 2)<br>**Constraints**: *Maximum Length*: `90` |
| `saveForCardReissue` | `boolean \| undefined` | Optional | If this is specified, the contact address will be saved in cards platform for card reissue processing.<br /><br>Optional |

## Example (as JSON)

```json
{
  "DeliveryContactTitle": "DeliveryContactTitle0",
  "DeliveryContactName": "DeliveryContactName6",
  "DeliveryCompanyName": "DeliveryCompanyName4",
  "DeliveryAddressLine1": "DeliveryAddressLine14",
  "DeliveryAddressLine2": "DeliveryAddressLine26",
  "DeliveryAddressLine3": "DeliveryAddressLine38",
  "DeliveryZipCode": "DeliveryZipCode6",
  "DeliveryCity": "DeliveryCity8",
  "DeliveryRegionId": 216,
  "DeliveryRegion": "DeliveryRegion2",
  "DeliveryCountry": "DeliveryCountry6"
}
```

