
# PIN Contact

## Structure

`PINContact`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deliveryContactTitle` | `string \| null \| undefined` | Optional | Title of the contact person <br /><br>Optional<br>**Constraints**: *Maximum Length*: `10` |
| `deliveryContactName` | `string \| null \| undefined` | Optional | Name of the contact person <br /><br>Mandatory - If PINAdviceType is paper else optional. <br /><br>Max field length: 50  <br /><br>Optional<br>**Constraints**: *Maximum Length*: `50` |
| `deliveryCompanyName` | `string \| null \| undefined` | Optional | Company name <br /><br>Mandatory - If PINAdviceType is paper else optional. <br /><br>Max field length: 50  <br /><br>Optional<br>**Constraints**: *Maximum Length*: `50` |
| `deliveryAddressLine1` | `string \| null \| undefined` | Optional | Address line 1 <br /><br>Mandatory - if PINAdviceType is paper else optional.<br /><br>Max field length: 40  <br /><br>Optional<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryAddressLine2` | `string \| null \| undefined` | Optional | Address line 2 <br /><br>Optional <br /><br>Max field length: 40  <br /><br>Optional<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryAddressLine3` | `string \| null \| undefined` | Optional | Address line 3 <br /><br>Optional <br /><br>Max field length: 40  <br /><br>Optional<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryZipCode` | `string \| null \| undefined` | Optional | ZIP code <br /><br>Mandatory - if PINAdviceType is paper else optional. <br /><br>Max field length: 10  <br /><br>Optional<br>**Constraints**: *Maximum Length*: `10` |
| `deliveryCity` | `string \| null \| undefined` | Optional | City  <br /><br>Mandatory - If PINAdviceType is paper else optional. <br /><br>Max field length: 40  <br /><br>Optional<br>**Constraints**: *Maximum Length*: `40` |
| `deliveryRegionId` | `number \| null \| undefined` | Optional | Region Id  <br /><br>Optional |
| `deliveryRegion` | `string \| null \| undefined` | Optional | Region  <br /><br>Optional<br /> |
| `deliveryCountry` | `string \| null \| undefined` | Optional | The ISO code of the country.<br /><br>Mandatory if PINAdviceType is paper else optional. |
| `phoneNumber` | `string \| null \| undefined` | Optional | Phone number for to send SMS of the PIN in case PINAdviceType is SMS.<br /><br>Mandatory if PINAdviceType is SMS else optional.<br /><br>Max field length: 20<br>**Constraints**: *Maximum Length*: `20` |
| `emailAddress` | `string \| null \| undefined` | Optional | Email address for to send email of the PIN in case PINAdviceType is Email.<br /><br>Mandatory if PINAdviceType is email else optional.<br /><br>Max field length: 90. <br/>Note:Based on the international standard that there can be Max Length 64 before the @ (the 'Local part’) =64(minimum of 1) Max Lenth after the (the domain) = 88 (Minimum of 2)<br>**Constraints**: *Maximum Length*: `90` |
| `saveForPINReminder` | `boolean \| undefined` | Optional | The given address will be used for sending PIN reminders in future when requested.<br /><br>Only allowed for paper delivery<br /><br>Optional |

## Example (as JSON)

```json
{
  "DeliveryContactTitle": "DeliveryContactTitle2",
  "DeliveryContactName": "DeliveryContactName2",
  "DeliveryCompanyName": "DeliveryCompanyName4",
  "DeliveryAddressLine1": "DeliveryAddressLine16",
  "DeliveryAddressLine2": "DeliveryAddressLine28"
}
```

