# Customer

APIs for Retrieve and Update customer specific details

```ts
const customerController = new CustomerController(client);
```

## Class Name

`CustomerController`

## Methods

* [User-Loggedinuser](../../doc/controllers/customer.md#user-loggedinuser)
* [Customerpayers](../../doc/controllers/customer.md#customerpayers)
* [Customerdetail](../../doc/controllers/customer.md#customerdetail)
* [Post-Card-Accounts](../../doc/controllers/customer.md#post-card-accounts)
* [Customercardtypev](../../doc/controllers/customer.md#customercardtypev)
* [Cardgroups](../../doc/controllers/customer.md#cardgroups)
* [Audit Report](../../doc/controllers/customer.md#audit-report)
* [Customercreatecardgroup](../../doc/controllers/customer.md#customercreatecardgroup)
* [Customerupdatecardgroup](../../doc/controllers/customer.md#customerupdatecardgroup)


# User-Loggedinuser

This operation allows querying the user data of the logged in user.
This operation should be called only after successful authentication of the end user in client application. This operation will return the user access details such as payers and/or accounts.
This operation will also validate that logged in user has access to the requested operation, on failure it will return HasAPIAccess flag as false in the response.

```ts
async userLoggedinuser(
  requestId: string,
  body: LoggedInUserReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LoggedInUserRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`LoggedInUserReq`](../../doc/models/logged-in-user-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LoggedInUserRes`](../../doc/models/logged-in-user-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: LoggedInUserReq = {
};

try {
  const { result, ...httpResponse } = await customerController.userLoggedinuser(
    requestId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Customerpayers

This API allows querying the payer accounts details from the Shell Cards
Platform. It provides flexible search criteria for searching payer
information and supports paging.

Paging is applicable only when all the
payers passed in the input are from the same ColCo.

However, paging will
be ignored and the API will return all the matching data by merging the
data queried from each ColCo when payers passed in the input are from
multiple ColCos.

```ts
async customerpayers(
  requestId: string,
  body: PayerReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayerRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`PayerReq`](../../doc/models/payer-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PayerRes`](../../doc/models/payer-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: PayerReq = {
  page: 1,
  pageSize: 100,
};

try {
  const { result, ...httpResponse } = await customerController.customerpayers(
    requestId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Customerdetail

This API allows querying the card delivery addresses of a given account from the Shell Cards Platform. Only active delivery addresses will be returned.

```ts
async customerdetail(
  requestId: string,
  body: CustomerReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CustomerRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`CustomerReq`](../../doc/models/customer-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CustomerRes`](../../doc/models/customer-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: CustomerReq = {
};

try {
  const { result, ...httpResponse } = await customerController.customerdetail(
    requestId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Post-Card-Accounts

This API allows querying the customer account details from the Shell Cards Platform. It provides a flexible search criterion and supports pagination.

```ts
async postCardAccounts(
  requestId: string,
  body: AccountReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`AccountReq`](../../doc/models/account-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountRes`](../../doc/models/account-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: AccountReq = {
  page: 1,
  pageSize: 100,
};

try {
  const { result, ...httpResponse } = await customerController.postCardAccounts(
    requestId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Customercardtypev

This API provides allows querying the active card types that are associated to the given account.

The API returns the card type configurations, purchase categories associated with the card type and the card type restriction limits.

```ts
async customercardtypev(
  requestId: string,
  body: CardTypeReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CardTypeRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`CardTypeReq`](../../doc/models/card-type-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CardTypeRes`](../../doc/models/card-type-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: CardTypeReq = {
};

try {
  const { result, ...httpResponse } = await customerController.customercardtypev(
    requestId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Cardgroups

This API allows querying the card group details from the Shell Cards
Platform. It provides flexible search criteria and supports paging.

When the account is not passed in the input and card group type is configured as
â€˜Verticalâ€™ in the cards platform, this API will return all card groups from
the payer as well as from all the accounts under the payer.

When the account is not passed in the input and card group type is configured as
â€˜Horizontalâ€™ in cards platform, this API will return all card groups
configured directly under the payer.

```ts
async cardgroups(
  requestId: string,
  body: CardGroupReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CardGroupRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`CardGroupReq`](../../doc/models/card-group-req.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CardGroupRes`](../../doc/models/card-group-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: CardGroupReq = {
  page: 1,
  pageSize: 100,
};

try {
  const { result, ...httpResponse } = await customerController.cardgroups(
    requestId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Audit Report

This operation allows users to fetch audit data of account or card operations performed by users of a given customer
The audit data includes details of below API operations

* Order Card
* Create Card Group
* PIN reminder
* Move Cards
* Update Card Status
* Update Card Group
* Auto renew
* Bulk card order
* Bulk card block
* Bulk Card Order (Multi Account)
* BCOSummary
* BCOMultiAccountSummary
* BCBSummary
* Mobile Payment Registration
* Fund Transfer (Scheduled & Realtime)
* Delivery Address Update.

```ts
async auditReport(
  requestId: string,
  body?: AuditReq,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuditResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`AuditReq \| undefined`](../../doc/models/audit-req.md) | Body, Optional | request body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AuditResponse`](../../doc/models/audit-response.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: AuditReq = {
  page: 1,
  pageSize: 100,
};

try {
  const { result, ...httpResponse } = await customerController.auditReport(
    requestId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Customercreatecardgroup

This API allows creating a new Card Group in the Shell Cards Platform. It will
also allow moving of cards (up to 500 cards) into the newly created
card-group.

Move Card requests are queued after
passing the below validations

- Given PAN matches with only one
  card.
- Card is allowed to be moved to the Target Card Group and/or
  Target account requested.
- There is no pending Move Card request for
  the same card in the queue which is submitted on the same date
  (customerâ€™s local) and is yet to be processed or has been processed
  successfully

```ts
async customercreatecardgroup(
  requestId: string,
  body: CreateCardGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateCardGroupRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`CreateCardGroupRequest`](../../doc/models/create-card-group-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreateCardGroupRes`](../../doc/models/create-card-group-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: CreateCardGroupRequest = {
  colCoCode: 86,
  colCoId: 1,
  payerNumber: 'GB00123456',
  payerId: 123456,
  accountId: 123456,
  accountNumber: 'GB00123456',
  printOnCard: true,
};

try {
  const { result, ...httpResponse } = await customerController.customercreatecardgroup(
    requestId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |


# Customerupdatecardgroup

This API allows updating or removing a Card Group in the Shell Cards
Platform.

It also allows moving of cards out of a card group or from one card group to another existing card group.

The request for updating or removing of the card group, creationg of a new card group (where-applicable) and moving of card into another card group will be queued after passing the basic
validations.

```ts
async customerupdatecardgroup(
  requestId: string,
  body: UpdateCardGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateCardGroupRes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Header, Required | Mandatory UUID (according to RFC 4122 standards) for requests and responses. This will be played back in the response from the request. |
| `body` | [`UpdateCardGroupRequest`](../../doc/models/update-card-group-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UpdateCardGroupRes`](../../doc/models/update-card-group-res.md).

## Example Usage

```ts
const requestId = 'RequestId8';

const body: UpdateCardGroupRequest = {
  colCoCode: 86,
  colCoId: 1,
  payerNumber: 'GB00123456',
  payerId: 123456,
  accountId: 123456,
  accountNumber: 'GB00123456',
  cardGroupId: 1234,
  cardGroupName: 'test',
  printOnCard: true,
  cardTypeId: 123,
  terminateCardGroup: true,
  moveCards: true,
  targetAccountId: 123456,
  targetAccountNumber: 'GB00123452',
  targetNewCardGroupName: 'test1',
  targetCardGroupId: 1232,
};

try {
  const { result, ...httpResponse } = await customerController.customerupdatecardgroup(
    requestId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 401 | The request has not been applied because it lacks valid  authentication credentials for the target resource. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 403 | Forbidden | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 404 | The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |
| 500 | The server encountered an unexpected condition that  prevented it from fulfilling the request. | [`ErrorObjectError`](../../doc/models/error-object-error.md) |

