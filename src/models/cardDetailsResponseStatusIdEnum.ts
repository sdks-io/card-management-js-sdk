/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, numberEnum } from '../schema';

/**
 * Enum for CardDetailsResponseStatusIdEnum
 */
export enum CardDetailsResponseStatusIdEnum {
  Enum1 = 1,
  Enum7 = 7,
  Enum8 = 8,
  Enum9 = 9,
  Enum10 = 10,
  Enum23 = 23,
  Enum31 = 31,
  Enum41 = 41,
  Enum42 = 42,
  Enum43 = 43,
  Enum101 = 101,
  Enum102 = 102,
  Enum103 = 103,
  Enum104 = 104,
  Enum105 = 105,
  Enum106 = 106,
  Enum107 = 107,
  Enum108 = 108,
}

/**
 * Schema for CardDetailsResponseStatusIdEnum
 */
export const cardDetailsResponseStatusIdEnumSchema: Schema<CardDetailsResponseStatusIdEnum> = numberEnum(
  CardDetailsResponseStatusIdEnum
);
