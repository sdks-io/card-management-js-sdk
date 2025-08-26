
# Getting Started with Shell Card Management APIs

## Introduction

The Shell Card Management API provides secure and structured access to the Shell Card Platform, enabling integration with Shell’s internal systems for managing card-related resources.

This REST-based API uses the POST method for all operations—including retrieval, creation, update, and deletion of resources. It supports flexible search capabilities through JSON-encoded request bodies and returns JSON-formatted responses. Standard HTTP status codes are used to indicate the outcome of each request.

Authentication is handled via OAuth 2.0 using the Client Credentials flow. Access tokens must be included in the Authorization header of each request.

All resources are managed within the Shell Card Platform, which abstracts the complexity of backend systems. Some operations may be processed asynchronously, and clients should be prepared to handle delayed responses or polling mechanisms where applicable.

Go to the Shell Developer Portal: [https://developer.shell.com](https://developer.shell.com)

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install card-management-sdk@2.0.0
```

For additional package details, see the [Npm page for the card-management-sdk@2.0.0 npm](https://www.npmjs.com/package/card-management-sdk/v/2.0.0).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | `Environment` | The API environment. <br> **Default: `Environment.SIT`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| clientCredentialsAuthCredentials | [`ClientCredentialsAuthCredentials`](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/auth/oauth-2-client-credentials-grant.md) | The credential object for clientCredentialsAuth |

The API client can be initialized as follows:

```ts
import { Client, Environment } from 'card-management-sdk';

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
  timeout: 0,
  environment: Environment.SIT,
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| SIT | **Default** |
| Production | - |

## Authorization

This API uses the following authentication schemes.

* [`BearerToken (OAuth 2 Client Credentials Grant)`](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/auth/oauth-2-client-credentials-grant.md)

## List of APIs

* [Customer](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/controllers/customer.md)
* [Restriction](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/controllers/restriction.md)
* [Card](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/controllers/card.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/retry-configuration.md)
* [ProxySettings](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/proxy-settings.md)

### HTTP

* [HttpRequest](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/api-response.md)
* [ApiError](https://www.github.com/sdks-io/card-management-js-sdk/tree/2.0.0/doc/api-error.md)

