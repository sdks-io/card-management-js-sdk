/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { AccountRequest, accountRequestSchema } from '../models/accountRequest';
import {
  AccountResponse,
  accountResponseSchema,
} from '../models/accountResponse';
import { AuditRequest, auditRequestSchema } from '../models/auditRequest';
import { AuditResponse, auditResponseSchema } from '../models/auditResponse';
import {
  CardGroupRequest,
  cardGroupRequestSchema,
} from '../models/cardGroupRequest';
import {
  CardGroupResponse,
  cardGroupResponseSchema,
} from '../models/cardGroupResponse';
import {
  CardTypeRequest,
  cardTypeRequestSchema,
} from '../models/cardTypeRequest';
import {
  CardTypeResponse,
  cardTypeResponseSchema,
} from '../models/cardTypeResponse';
import {
  CreateCardGroupRequest,
  createCardGroupRequestSchema,
} from '../models/createCardGroupRequest';
import {
  CreateCardGroupResponse,
  createCardGroupResponseSchema,
} from '../models/createCardGroupResponse';
import {
  CustomerDetailRequest,
  customerDetailRequestSchema,
} from '../models/customerDetailRequest';
import {
  CustomerDetailResponse,
  customerDetailResponseSchema,
} from '../models/customerDetailResponse';
import {
  FleetmanagementV1UserLoggedinuserRequest,
  fleetmanagementV1UserLoggedinuserRequestSchema,
} from '../models/fleetmanagementV1UserLoggedinuserRequest';
import {
  LoggedInUserResponse,
  loggedInUserResponseSchema,
} from '../models/loggedInUserResponse';
import { PayerRequest, payerRequestSchema } from '../models/payerRequest';
import { PayerResponse, payerResponseSchema } from '../models/payerResponse';
import {
  UpdateCardGroupRequest,
  updateCardGroupRequestSchema,
} from '../models/updateCardGroupRequest';
import {
  UpdateCardGroupResponse,
  updateCardGroupResponseSchema,
} from '../models/updateCardGroupResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { FleetmanagementV1CustomerCustomer403Error } from '../errors/fleetmanagementV1CustomerCustomer403Error';
import { FleetmanagementV1CustomerPayers400Error } from '../errors/fleetmanagementV1CustomerPayers400Error';
import { FleetmanagementV1CustomerPayers404Error } from '../errors/fleetmanagementV1CustomerPayers404Error';
import { FleetmanagementV1UserLoggedinuser400Error } from '../errors/fleetmanagementV1UserLoggedinuser400Error';
import { FleetmanagementV1UserLoggedinuser401Error } from '../errors/fleetmanagementV1UserLoggedinuser401Error';
import { FleetmanagementV1UserLoggedinuser403Error } from '../errors/fleetmanagementV1UserLoggedinuser403Error';
import { FleetmanagementV1UserLoggedinuser404Error } from '../errors/fleetmanagementV1UserLoggedinuser404Error';
import { FleetmanagementV1UserLoggedinuser500Error } from '../errors/fleetmanagementV1UserLoggedinuser500Error';

export class CustomerController extends BaseController {
  /**
   * This API allows querying the user data of the logged in user.</br>
   * This API will return the user access details such as payers and/or accounts. </br>
   * This API will also validate that logged in user has access to the requested API, on failure it will
   * return HasAPIAccess flag as false in response.</br>
   *
   * @param apikey       This is the API key of the specific
   *                                                                        environment which needs to be passed by the
   *                                                                        client.
   * @param requestId    Mandatory UUID (according to RFC 4122
   *                                                                        standards) for requests and responses. This
   *                                                                        will be played back in the response from
   *                                                                        the request.
   * @param body         Logged in user request body
   * @return Response from the API call
   */
  async loggedinUser(
    apikey: string,
    requestId: string,
    body?: FleetmanagementV1UserLoggedinuserRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LoggedInUserResponse>> {
    const req = this.createRequest(
      'POST',
      '/fleetmanagement/v1/user/loggedinuser'
    );
    const mapped = req.prepareArgs({
      apikey: [apikey, string()],
      requestId: [requestId, string()],
      body: [body, optional(fleetmanagementV1UserLoggedinuserRequestSchema)],
    });
    req.header('apikey', mapped.apikey);
    req.header('RequestId', mapped.requestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      FleetmanagementV1UserLoggedinuser400Error,
      'The server cannot or will not process the request  due to something that is perceived to be a client\r\n error (e.g., malformed request syntax, invalid \r\n request message framing, or deceptive request routing).'
    );
    req.throwOn(
      401,
      FleetmanagementV1UserLoggedinuser401Error,
      'The request has not been applied because it lacks valid  authentication credentials for the target resource.'
    );
    req.throwOn(
      403,
      FleetmanagementV1UserLoggedinuser403Error,
      'The server understood the request but refuses to authorize it.'
    );
    req.throwOn(
      404,
      FleetmanagementV1UserLoggedinuser404Error,
      'The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists.'
    );
    req.throwOn(
      500,
      FleetmanagementV1UserLoggedinuser500Error,
      'The server encountered an unexpected condition the prevented it from fulfilling the request.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(loggedInUserResponseSchema, requestOptions);
  }

  /**
   * This API allows querying the payer accounts details from the Shell Cards
   *
   * Platform. It provides flexible search criteria for searching payer
   *
   * information and supports paging.
   *
   *
   *
   * Paging is applicable only when all the
   *
   * payers passed in the input are from the same ColCo.
   *
   *
   *
   * However, paging will
   *
   * be ignored and the API will return all the matching data by merging the
   *
   * data queried from each ColCo when payers passed in the input are from
   *
   * multiple ColCos.
   *
   *
   *
   * @param apikey       This is the API key of the specific environment which needs to be
   *                                            passed by the client.
   * @param requestId    Mandatory UUID (according to RFC 4122 standards) for requests and
   *                                            responses. This will be played back in the response from the request.
   * @param body         Serach payers request body
   * @return Response from the API call
   */
  async payers(
    apikey: string,
    requestId: string,
    body?: PayerRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PayerResponse>> {
    const req = this.createRequest(
      'POST',
      '/fleetmanagement/v1/customer/payers'
    );
    const mapped = req.prepareArgs({
      apikey: [apikey, string()],
      requestId: [requestId, string()],
      body: [body, optional(payerRequestSchema)],
    });
    req.header('apikey', mapped.apikey);
    req.header('RequestId', mapped.requestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      FleetmanagementV1CustomerPayers400Error,
      'The server cannot or will not process the request  due to something that is perceived to be a client\r\n error (e.g., malformed request syntax, invalid \r\n request message framing, or deceptive request routing).'
    );
    req.throwOn(
      401,
      ApiError,
      'The request has not been applied because it lacks valid  authentication credentials for the target resource.'
    );
    req.throwOn(
      403,
      ApiError,
      'The server understood the request but refuses to authorize it.'
    );
    req.throwOn(
      404,
      FleetmanagementV1CustomerPayers404Error,
      'The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists.'
    );
    req.throwOn(
      500,
      ApiError,
      'The server encountered an unexpected condition the prevented it from fulfilling the request.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(payerResponseSchema, requestOptions);
  }

  /**
   * This API allows querying the card delivery addresses of a given account from the Shell Cards
   * Platform.
   *
   * Only active delivery addresses will be returned.
   *
   *
   *
   * @param apikey       This is the API key of the specific environment which needs
   *                                                     to be passed by the client.
   * @param requestId    Mandatory UUID (according to RFC 4122 standards) for requests
   *                                                     and responses. This will be played back in the response from
   *                                                     the request.
   * @param body         Customerdetails request body
   * @return Response from the API call
   */
  async customer(
    apikey: string,
    requestId: string,
    body?: CustomerDetailRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CustomerDetailResponse>> {
    const req = this.createRequest(
      'POST',
      '/fleetmanagement/v1/customer/customer'
    );
    const mapped = req.prepareArgs({
      apikey: [apikey, string()],
      requestId: [requestId, string()],
      body: [body, optional(customerDetailRequestSchema)],
    });
    req.header('apikey', mapped.apikey);
    req.header('RequestId', mapped.requestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      ApiError,
      'The server cannot or will not process the request  due to something that is perceived to be a client\r\n error (e.g., malformed request syntax, invalid \r\n request message framing, or deceptive request routing).'
    );
    req.throwOn(
      401,
      ApiError,
      'The request has not been applied because it lacks valid  authentication credentials for the target resource.'
    );
    req.throwOn(
      403,
      FleetmanagementV1CustomerCustomer403Error,
      'The server understood the request but refuses to authorize it.'
    );
    req.throwOn(
      404,
      ApiError,
      'The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists.'
    );
    req.throwOn(
      500,
      ApiError,
      'The server encountered an unexpected condition the prevented it from fulfilling the request.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(customerDetailResponseSchema, requestOptions);
  }

  /**
   * This API allows querying the customer account details from the Shell Cards Platform.
   *
   * It provides a flexible search criterion and supports paging".
   *
   * @param apikey       This is the API key of the specific environment which needs to be
   *                                              passed by the client.
   * @param requestId    Mandatory UUID (according to RFC 4122 standards) for requests and
   *                                              responses. This will be played back in the response from the request.
   * @param body
   * @return Response from the API call
   */
  async accounts(
    apikey: string,
    requestId: string,
    body?: AccountRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AccountResponse>> {
    const req = this.createRequest(
      'POST',
      '/fleetmanagement/v1/customer/accounts'
    );
    const mapped = req.prepareArgs({
      apikey: [apikey, string()],
      requestId: [requestId, string()],
      body: [body, optional(accountRequestSchema)],
    });
    req.header('apikey', mapped.apikey);
    req.header('RequestId', mapped.requestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      ApiError,
      'The server cannot or will not process the request  due to something that is perceived to be a client\r\n error (e.g., malformed request syntax, invalid \r\n request message framing, or deceptive request routing).'
    );
    req.throwOn(
      401,
      ApiError,
      'The request has not been applied because it lacks valid  authentication credentials for the target resource.'
    );
    req.throwOn(
      403,
      ApiError,
      'The server understood the request but refuses to authorize it.'
    );
    req.throwOn(
      404,
      ApiError,
      'The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists.'
    );
    req.throwOn(
      500,
      ApiError,
      'The server encountered an unexpected condition the prevented it from fulfilling the request.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(accountResponseSchema, requestOptions);
  }

  /**
   * This operation allows querying card types that are associated to the given account and are allowed
   * to be shown to users.
   *
   * @param apikey       This is the API key of the specific environment which needs to be
   *                                               passed by the client.
   * @param requestId    Mandatory UUID (according to RFC 4122 standards) for requests and
   *                                               responses. This will be played back in the response from the request.
   * @param body         Get CardType Request Body
   * @return Response from the API call
   */
  async cardType(
    apikey: string,
    requestId: string,
    body?: CardTypeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CardTypeResponse>> {
    const req = this.createRequest(
      'POST',
      '/fleetmanagement/v2/customer/cardtype'
    );
    const mapped = req.prepareArgs({
      apikey: [apikey, string()],
      requestId: [requestId, string()],
      body: [body, optional(cardTypeRequestSchema)],
    });
    req.header('apikey', mapped.apikey);
    req.header('RequestId', mapped.requestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      ApiError,
      'The server cannot or will not process the request  due to something that is perceived to be a client\r\n error (e.g., malformed request syntax, invalid \r\n request message framing, or deceptive request routing).'
    );
    req.throwOn(
      401,
      ApiError,
      'The request has not been applied because it lacks valid  authentication credentials for the target resource.'
    );
    req.throwOn(
      403,
      ApiError,
      'The server understood the request but refuses to authorize it.'
    );
    req.throwOn(
      404,
      ApiError,
      'The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists.'
    );
    req.throwOn(
      500,
      ApiError,
      'The server encountered an unexpected condition the prevented it from fulfilling the request.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(cardTypeResponseSchema, requestOptions);
  }

  /**
   * This operation allows querying the card group details . It provides flexible search criteria and
   * supports paging.\
   *
   *
   * When the card group type is configured as ‘Vertical’ in cards platform, this operation will return
   * all card groups from the given account or if no account is passed in the input, then will return
   * card groups from all the accounts under the payer.
   *
   *
   * When the card group type is configured as ‘Horizontal’ in cards platform, this API will return all
   * card groups configured directly under the payer.
   *
   *
   * Accounts with cancelled status will not be considered for cardgroups search for the configured (E.g.,
   * SFH) set of client apps.
   *
   *
   * @param apikey       This is the API key of the specific environment which needs to be
   *                                                passed by the client.
   * @param requestId    Mandatory UUID (according to RFC 4122 standards) for requests and
   *                                                responses. This will be played back in the response from the
   *                                                request.
   * @param body         Request Body
   * @return Response from the API call
   */
  async cardGroups(
    apikey: string,
    requestId: string,
    body?: CardGroupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CardGroupResponse>> {
    const req = this.createRequest(
      'POST',
      '/fleetmanagement/v1/customer/cardgroups'
    );
    const mapped = req.prepareArgs({
      apikey: [apikey, string()],
      requestId: [requestId, string()],
      body: [body, optional(cardGroupRequestSchema)],
    });
    req.header('apikey', mapped.apikey);
    req.header('RequestId', mapped.requestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      ApiError,
      'The server cannot or will not process the request  due to something that is perceived to be a client\r\n error (e.g., malformed request syntax, invalid \r\n request message framing, or deceptive request routing).'
    );
    req.throwOn(
      401,
      ApiError,
      'The request has not been applied because it lacks valid  authentication credentials for the target resource.'
    );
    req.throwOn(
      403,
      ApiError,
      'The server understood the request but refuses to authorize it.'
    );
    req.throwOn(
      404,
      ApiError,
      'The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists.'
    );
    req.throwOn(
      500,
      ApiError,
      'The server encountered an unexpected condition the prevented it from fulfilling the request.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(cardGroupResponseSchema, requestOptions);
  }

  /**
   * This operation allows users to fetch audit data of account or card operations performed by users of
   * a given customer
   *
   * The audit data includes details of below API operations
   *
   *
   *
   * * Order Card
   *
   * * Create Card Group
   *
   * * PIN reminder
   *
   * * Move Cards
   *
   * * Update Card Status
   *
   * * Update Card Group
   *
   * * Auto renew
   *
   * * Bulk card order
   *
   * * Bulk card block
   *
   * * Bulk Card Order (Multi Account)
   *
   * * BCOSummary
   *
   * * BCOMultiAccountSummary
   *
   * * BCBSummary
   *
   * * Mobile Payment Registration
   *
   * * Fund Transfer (Scheduled & Realtime)
   *
   * * Delivery Address Update.
   *
   * @param apikey       This is the API key of the specific environment which needs to be
   *                                            passed by the client.
   * @param requestId    Mandatory UUID (according to RFC 4122 standards) for requests and
   *                                            responses. This will be played back in the response from the request.
   * @param body         request body
   * @return Response from the API call
   */
  async auditReport(
    apikey: string,
    requestId: string,
    body?: AuditRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AuditResponse>> {
    const req = this.createRequest(
      'POST',
      '/fleetmanagement/v1/customer/auditreport'
    );
    const mapped = req.prepareArgs({
      apikey: [apikey, string()],
      requestId: [requestId, string()],
      body: [body, optional(auditRequestSchema)],
    });
    req.header('apikey', mapped.apikey);
    req.header('RequestId', mapped.requestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      ApiError,
      'The server cannot or will not process the request  due to something that is perceived to be a client\r\n error (e.g., malformed request syntax, invalid \r\n request message framing, or deceptive request routing).'
    );
    req.throwOn(
      401,
      ApiError,
      'The request has not been applied because it lacks valid  authentication credentials for the target resource.'
    );
    req.throwOn(
      403,
      ApiError,
      'The server understood the request but refuses to authorize it.'
    );
    req.throwOn(
      404,
      ApiError,
      'The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists.'
    );
    req.throwOn(
      500,
      ApiError,
      'The server encountered an unexpected condition the prevented it from fulfilling the request.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(auditResponseSchema, requestOptions);
  }

  /**
   * This API allows creating a new Card Group in the Shell Cards Platform. It will
   *
   * also allow moving of cards (up to 500 cards) into the newly created
   *
   * card-group.
   *
   *
   *
   * ### Move Card requests are queued after passing the below validations
   *
   *
   *
   * * Given PAN matches with only one card.
   *
   * * Card is allowed to be moved to the Target Card Group and/or
   *
   * * Target account requested.
   *
   * * There is no pending Move Card request for the same card in the queue which is submitted on the
   * same date
   *
   * and is yet to be processed or has been processed
   *
   * successfully
   *
   *
   *
   * @param apikey       This is the API key of the specific environment which needs
   *                                                      to be passed by the client.
   * @param requestId    Mandatory UUID (according to RFC 4122 standards) for
   *                                                      requests and responses. This will be played back in the
   *                                                      response from the request.
   * @param body         CreateCardGroup request body
   * @return Response from the API call
   */
  async createCardGroup(
    apikey: string,
    requestId: string,
    body?: CreateCardGroupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateCardGroupResponse>> {
    const req = this.createRequest(
      'POST',
      '/fleetmanagement/v1/customer/createcardgroup'
    );
    const mapped = req.prepareArgs({
      apikey: [apikey, string()],
      requestId: [requestId, string()],
      body: [body, optional(createCardGroupRequestSchema)],
    });
    req.header('apikey', mapped.apikey);
    req.header('RequestId', mapped.requestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      ApiError,
      'The server cannot or will not process the request  due to something that is perceived to be a client\r\n error (e.g., malformed request syntax, invalid \r\n request message framing, or deceptive request routing).'
    );
    req.throwOn(
      401,
      ApiError,
      'The request has not been applied because it lacks valid  authentication credentials for the target resource.'
    );
    req.throwOn(
      403,
      ApiError,
      'The server understood the request but refuses to authorize it.'
    );
    req.throwOn(
      404,
      ApiError,
      'The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists.'
    );
    req.throwOn(
      500,
      ApiError,
      'The server encountered an unexpected condition the prevented it from fulfilling the request.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(createCardGroupResponseSchema, requestOptions);
  }

  /**
   * This API allows updating or removing a Card Group in the Shell Cards Platform.
   *
   *
   *
   * It also allows moving of cards out of a card group or from one card group to another existing card
   * group.
   *
   *
   *
   * The request for updating or removing of the card group, creationg of a new card group (where-
   * applicable) and moving of card into another card group will be queued at Microservices after passing
   * the basic
   *
   * validations.
   *
   *
   *
   * @param apikey       This is the API key of the specific environment which needs
   *                                                      to be passed by the client.
   * @param requestId    Mandatory UUID (according to RFC 4122 standards) for
   *                                                      requests and responses. This will be played back in the
   *                                                      response from the request.
   * @param body         request body of customer card group
   * @return Response from the API call
   */
  async updateCardGroup(
    apikey: string,
    requestId: string,
    body?: UpdateCardGroupRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UpdateCardGroupResponse>> {
    const req = this.createRequest(
      'POST',
      '/fleetmanagement/v1/customer/updatecardgroup'
    );
    const mapped = req.prepareArgs({
      apikey: [apikey, string()],
      requestId: [requestId, string()],
      body: [body, optional(updateCardGroupRequestSchema)],
    });
    req.header('apikey', mapped.apikey);
    req.header('RequestId', mapped.requestId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      ApiError,
      'The server cannot or will not process the request  due to something that is perceived to be a client\r\n error (e.g., malformed request syntax, invalid \r\n request message framing, or deceptive request routing).'
    );
    req.throwOn(
      401,
      ApiError,
      'The request has not been applied because it lacks valid  authentication credentials for the target resource.'
    );
    req.throwOn(
      403,
      ApiError,
      'The server understood the request but refuses to authorize it.'
    );
    req.throwOn(
      404,
      ApiError,
      'The origin server did not find a current representation  for the target resource or is not willing to disclose  that one exists.'
    );
    req.throwOn(
      500,
      ApiError,
      'The server encountered an unexpected condition the prevented it from fulfilling the request.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(updateCardGroupResponseSchema, requestOptions);
  }
}
