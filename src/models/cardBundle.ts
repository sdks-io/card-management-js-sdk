/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface CardBundle {
  /** Unique identifier for the Card Bundle */
  bundleId?: string;
  /** External system allocated Card Bundle identifier for Card Bundle. */
  externalBundleId?: string;
  /** DescriptionCard Bundle Description. */
  description?: string;
  /** No of Card PAN added to the card bundle. */
  totalCards?: number;
}

export const cardBundleSchema: Schema<CardBundle> = object({
  bundleId: ['BundleId', optional(string())],
  externalBundleId: ['ExternalBundleId', optional(string())],
  description: ['Description', optional(string())],
  totalCards: ['TotalCards', optional(number())],
});
