/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  basicAuthenticationProvider,
  compositeAuthenticationProvider,
  OAuthConfiguration,
  requestAuthenticationProvider,
} from './authentication';
import { BearerTokenManager } from './bearerTokenManager';
import { Configuration } from './configuration';
import { OAuthToken } from './models/oAuthToken';

export function createAuthProviderFromConfig(
  config: Partial<Configuration>,
  bearerToken: () => BearerTokenManager | undefined
) {
  const authConfig = {
    basicAuth:
      config.basicAuthCredentials &&
      basicAuthenticationProvider(
        config.basicAuthCredentials.username,
        config.basicAuthCredentials.password
      ),
    bearerToken:
      config.bearerTokenCredentials &&
      requestAuthenticationProvider(
        config.bearerTokenCredentials.oAuthToken,
        bearerTokenTokenProvider(
          bearerToken,
          config.bearerTokenCredentials.oAuthTokenProvider
        ),
        config.bearerTokenCredentials.oAuthOnTokenUpdate,
        {
          clockSkew: config.bearerTokenCredentials.oAuthClockSkew,
        } as OAuthConfiguration
      ),
  };

  return compositeAuthenticationProvider<
    keyof typeof authConfig,
    typeof authConfig
  >(authConfig);
}

function bearerTokenTokenProvider(
  bearerToken: () => BearerTokenManager | undefined,
  defaultProvider:
    | ((
        lastOAuthToken: OAuthToken | undefined,
        authManager: BearerTokenManager
      ) => Promise<OAuthToken>)
    | undefined
): ((token: OAuthToken | undefined) => Promise<OAuthToken>) | undefined {
  return (token: OAuthToken | undefined) => {
    const manager = bearerToken();
    if (manager === undefined) {
      throw Error('Unable to find the OAuthManager instance');
    }
    if (defaultProvider === undefined) {
      return manager.updateToken(token);
    }
    return defaultProvider(token, manager);
  };
}
