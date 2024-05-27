
# Product Group

## Structure

`ProductGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `number \| undefined` | Optional | Referenced Purchase Category Id<br>Example: 123, 124 |
| `productGroupId` | `string \| undefined` | Optional | Product group ID |
| `name` | `string \| undefined` | Optional | Product group name |
| `isDefault` | `boolean \| undefined` | Optional | Indicates whether this is a default Product Group at ColCo level or not.<br>Note: The Customer level default settings are not considered here. |
| `isFuelType` | `boolean \| undefined` | Optional | Identifies the type of Product group.<br>true - if it is a Fuel type Product group<br>false - if it is Non-Fuel type |
| `products` | [`ProductAllOf0[] \| undefined`](../../doc/models/product-all-of-0.md) | Optional | - |

## Example (as JSON)

```json
{
  "ReferenceId": 123,
  "ProductGroupId": "7",
  "Name": "Automotive Gas Oil",
  "IsDefault": false,
  "IsFuelType": false
}
```

