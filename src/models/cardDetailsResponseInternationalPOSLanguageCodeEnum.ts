/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardDetailsResponseInternationalPOSLanguageCodeEnum
 */
export enum CardDetailsResponseInternationalPOSLanguageCodeEnum {
  Deu = 'deu',
  Fra = 'fra',
  Bul = 'bul',
  Hrv = 'hrv',
  Ces = 'ces',
  Dan = 'dan',
  Fin = 'fin',
  Eng = 'eng',
  Ell = 'ell',
  Zho = 'zho',
  Hun = 'hun',
  Ita = 'ita',
  Ltz = 'ltz',
  Msa = 'msa',
  Nld = 'nld',
  Nob = 'nob',
  Urd = 'urd',
  Pol = 'pol',
  Por = 'por',
  Ron = 'ron',
  Rus = 'rus',
  Slk = 'slk',
  Slv = 'slv',
  Spa = 'spa',
  Swe = 'swe',
  Tur = 'tur',
  Tha = 'tha',
  Fil = 'fil',
  Est = 'est',
  Lav = 'lav',
  Lit = 'lit',
}

/**
 * Schema for CardDetailsResponseInternationalPOSLanguageCodeEnum
 */
export const  cardDetailsResponseInternationalPOSLanguageCodeEnumSchema: Schema<CardDetailsResponseInternationalPOSLanguageCodeEnum> = stringEnum(CardDetailsResponseInternationalPOSLanguageCodeEnum);
