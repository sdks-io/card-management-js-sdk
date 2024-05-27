
# Card Details Response Status Id Enum

Possible Id’s and description:

* 1  Active
* 7  Blocked Card
* 8  Expired
* 9  Cancelled
* 10  New
* 23  Pending Renewal
* 31  Replaced
* 41  Temporary Block (Customer)
* 42  Temporary Block (Shell)
* 43  Fraud
* 101 Active (Block in progress) *
* 102 Blocked Card (Unblock in progress) *
* 103 Active (Cancel in progress) *
* 104 Active (Marked as damaged) *
* 105 New (Cancel as damaged) *
* 106 Active(Scheduled for block) ”#
* 107 Blocked Card(Scheduled for unblock)*#
* 108 Blocked Card (Cancel in progress) *

> Note:
> •  Items marked with * are intermediate statuses  to indicate that there are pending requests in progress. , The response can contain these intermediate statuses only if the IncludeIntermediateStatus flag is true.
> •  The placeholder “<Shell Card Platform Status>” in the items marked with # will be replaced with the Shell Card Platform status description. E.g., “Active (Scheduled for block)”

## Enumeration

`CardDetailsResponseStatusIdEnum`

## Fields

| Name |
|  --- |
| `enum1` |
| `enum7` |
| `enum8` |
| `enum9` |
| `enum10` |
| `enum23` |
| `enum31` |
| `enum41` |
| `enum42` |
| `enum43` |
| `enum101` |
| `enum102` |
| `enum103` |
| `enum104` |
| `enum105` |
| `enum106` |
| `enum107` |
| `enum108` |

