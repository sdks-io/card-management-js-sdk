/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, numberEnum } from '../schema';

/**
 * Enum for OrderCardEnquiryReqReferenceTypeEnum
 */
export enum OrderCardEnquiryReqReferenceTypeEnum {
  Enum1 = 1,
  Enum2 = 2,
  Enum3 = 3,
}

/**
 * Schema for OrderCardEnquiryReqReferenceTypeEnum
 */
export const  orderCardEnquiryReqReferenceTypeEnumSchema: Schema<OrderCardEnquiryReqReferenceTypeEnum> = numberEnum(OrderCardEnquiryReqReferenceTypeEnum);
