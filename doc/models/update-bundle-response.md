
# Update Bundle Response

## Structure

`UpdateBundleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | API Request Id |
| `status` | `string \| undefined` | Optional | API Response Status |
| `errors` | [`ErrorDetails \| undefined`](../../doc/models/error-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "RequestId": "RequestId4",
  "Status": "Status0",
  "Errors": {
    "Code": "Code4",
    "Title": "Title6",
    "Detail": "Detail6",
    "AdditionalInfo": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

