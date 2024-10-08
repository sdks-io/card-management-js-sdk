/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { CardDetail, cardDetailSchema } from './cardDetail';

export interface CardManagementV1OrdercardRequest {
  /** List of CardOrder entity. The fields in this entity are described below. */
  cardDetails?: CardDetail[];
}

export const cardManagementV1OrdercardRequestSchema: Schema<CardManagementV1OrdercardRequest> = object(
  {
    cardDetails: ['CardDetails', optional(array(lazy(() => cardDetailSchema)))],
  }
);
