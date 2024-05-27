
# Getting Started with Shell Card Management APIs

## Introduction

The Shell Card Management API is REST-based and employs OAUTH 2.0,Basic and ApiKey authentication.
The API endpoints accept JSON-encoded request bodies, return JSON-encoded responses and use standard HTTP response codes.  
All resources are located in the Shell Card Platform.  The Shell Card Platform is the overall platform that encompasses all the internal Shell systems used to manage resources.
The internal workings of the platform are not important when interacting with the API. However, it is worth noting that the platform uses a microservice architecture to communicate with various backend systems and some API calls are processed asynchronously.
All endpoints use the `POST` verb for retrieving, updating, creating and deleting resources in the Shell Card Platform. The endpoints that retrieve resources from the Shell Card Platform allow flexible search parameters in the API request body.

Go to the Shell Developer Portal: [https://developer.shell.com](https://developer.shell.com)

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install card-management-sdk@1.0.0
```

For additional package details, see the [Npm page for the card-management-sdk@1.0.0 npm](https://www.npmjs.com/package/card-management-sdk/v/1.0.0).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `url` | `UrlEnum` | This variable specifies the type of environment. Environments:<br><br>* `api.shell.com` - Production<br>* `api-test.shell.com` - SIT<br>*Default*: `UrlEnum.EnumApitestshellcomtest` |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `basicAuthCredentials` | [`BasicAuthCredentials`](https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/basic-authentication.md) | The credential object for basicAuth |
| `bearerTokenCredentials` | [`BearerTokenCredentials`](https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/oauth-2-client-credentials-grant.md) | The credential object for bearerToken |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  basicAuthCredentials: {
    username: 'Username',
    password: 'Password'
  },
  bearerTokenCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
  timeout: 0,
  environment: Environment.Production,
});
```

## Authorization

This API uses the following authentication schemes.

* [`BasicAuth (Basic Authentication)`](https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/basic-authentication.md)
* [`BearerToken (OAuth 2 Client Credentials Grant)`](https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/oauth-2-client-credentials-grant.md)

## List of APIs

* [O Auth Authorization](https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/doc/controllers/o-auth-authorization.md)
* [Customer](https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/doc/controllers/customer.md)
* [Restriction](https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/doc/controllers/restriction.md)
* [Card](https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/doc/controllers/card.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/doc/api-response.md)
* [ApiError](https://www.github.com/sdks-io/card-management-js-sdk/tree/1.0.0/doc/api-error.md)

