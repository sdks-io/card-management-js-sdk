
# Search Card Request

## Structure

`SearchCardRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filters` | [`SearchRequest \| undefined`](../../doc/models/search-request.md) | Optional | Encapsulate the Search details request. |
| `pageSize` | `string \| undefined` | Optional | Page Size – Number of records to show on a page<br>Optional<br>Default value 50 |
| `page` | `string \| undefined` | Optional | Page Number |

## Example (as JSON)

```json
{
  "PageSize": "1",
  "Page": "1",
  "Filters": {
    "AccountId": 108,
    "AccountNumber": "AccountNumber2",
    "CardGroupId": 154,
    "CardGroupName": "CardGroupName4",
    "CardSegment": "CardSegment4",
    "CardStatus": [
      "CardStatus7",
      "CardStatus8"
    ]
  }
}
```

