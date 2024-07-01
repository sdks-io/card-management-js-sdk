/**
 * Shell Card Management APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

/** Details of the usage restrictions such as day/week/month value and volume restrictions applied on the card. */
export interface UsageRestriction {
  /**
   * Usage limit is applied on the card from this level.
   * Valid values –
   * •	Inherited
   * •	Card
   * When Card level usage restrictions are not present, the API will return the inherited restrictions.
   * Note: -This field is deprecated. Instead, use ‘Override’.
   */
  level?: string;
  /**
   * Maximum spend value (amount) allowed per day.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  dailySpend?: number;
  /** Balance spend value (amount) available for rest of the day. */
  dailySpendAccumulated?: number;
  /** Balance spend value (amount) available for rest of the day. */
  dailySpendBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  dailySpendOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   */
  dailySpendThreshold?: number;
  /**
   * Maximum spend value (amount) allowed per week.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  weeklySpend?: number;
  /** Value (amount) spent during the week. */
  weeklySpendAccumulated?: number;
  /** Balance spend value (amount) available for rest of the week. */
  weeklySpendBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  weeklySpendOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  weeklySpendThreshold?: number;
  /**
   * Maximum spend value (amount) allowed per month.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  monthlySpend?: number;
  /** Value (amount) spent during the month. */
  monthlySpendAccumulated?: number;
  /** Balance spend value (amount) available for rest of the month. */
  monthlySpendBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  monthlySpendOverride?: boolean;
  /**
   * Maximum spend value (amount) allowed per transaction.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  perTransactionSpend?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  perTransactionSpendOverride?: boolean;
  /**
   * Maximum spend value (amount) allowed per annum.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  annualSpend?: number;
  /** Value (amount) spent during the year. */
  annualSpendAccumulated?: number;
  /** Balance spend value (amount) available for rest of the year. */
  annualSpendBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  annualSpendOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  annualSpendThreshold?: number;
  /**
   * Maximum spend value (amount) allowed in card’s life time.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited
   */
  lifeTimeSpend?: number;
  /** Value (amount) spent during the card’s life time */
  lifeTimeSpendAccumulated?: number;
  /** Balance spend value (amount) available for rest of the card’s life time. */
  lifeTimeSpendBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  lifeTimeSpendOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  lifeTimeSpendThreshold?: number;
  /**
   * Maximum volume (quantity) allowed per day.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  dailyVolume?: number;
  /** Volume (quantity) bought during the day. */
  dailyVolumeAccumulated?: number;
  /** Balance volume (quantity) available for rest of the day. */
  dailyVolumeBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  dailyVolumeOverride?: number;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  dailyVolumeThreshold?: number;
  /**
   * Maximum volume (quantity) allowed per week.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  weeklyVolume?: number;
  /** Volume (quantity) bought during the week. */
  weeklyVolumeAccumulated?: number;
  /** Balance volume (quantity) available for rest of the week. */
  weeklyVolumeBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  weeklyVolumeOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  weeklyVolumeThreshold?: number;
  /**
   * Maximum volume (quantity) allowed per month.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  monthlyVolume?: number;
  /** Volume (quantity) bought during the month. */
  monthlyVolumeAccumulated?: number;
  /** Balance volume (quantity) available for rest of the month. */
  monthlyVolumeBalance?: number;
  /** Indicate if the limit is overridden or default. (False for default). */
  monthlyVolumeOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  monthlyVolumeThreshold?: number;
  /**
   * Maximum volume (quantity) allowed per transaction.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  perTransactionVolume?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  perTransactionVolumeOverride?: boolean;
  /**
   * Maximum volume (quantity) allowed per annum.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  annualVolume?: number;
  /** Volume (quantity) bought during the year. */
  annualVolumeAccumulated?: number;
  /** Balance volume (quantity) available for rest of the year. */
  annualVolumeBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  annualVolumeOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  annualVolumeThreshold?: number;
  /**
   * Maximum volume (quantity) allowed in the card’s life time.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  lifeTimeVolume?: number;
  /** Volume (quantity) bought during the card’s life time. */
  lifeTimeVolumeAccumulated?: number;
  /** Balance volume (quantity) available for rest of the card’s life time. */
  lifeTimeVolumeBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  lifeTimeVolumeOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  lifeTimeVolumeThreshold?: number;
  /**
   * Maximum number of transactions allowed per day.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited
   */
  dailyTransactionCount?: number;
  /** Number of times the card is used during the day. */
  dailyTransactionAccumulated?: number;
  /** Number of times the card could be used in rest of the day. */
  dailyTransactionBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  dailyTransactionOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  dailyTransactionThreshold?: number;
  /**
   * Maximum number of transactions allowed per week.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  weeklyTransactionCount?: number;
  /** Number of times the card is used during the week */
  weeklyTransactionAccumulated?: number;
  /** Number of times the card could be used in rest of the week. */
  weeklyTransactionBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  weeklyTransactionOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  weeklyTransactionThreshold?: number;
  /**
   * Maximum number of transactions allowed per month.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  monthlyTransactionCount?: number;
  /** Number of times the card is used during the month */
  monthlyTransactionAccumulated?: number;
  /** Number of times the card could be used in rest of the month. */
  monthlyTransactionBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  monthlyTransactionOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  monthlyTransactionThreshold?: number;
  /**
   * Maximum number of transactions allowed per annum.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   */
  annualTransactionCount?: number;
  /** Number of times the card is used during the year. */
  annualTransactionAccumulated?: number;
  /** Number of times the card could be used in rest of the year. */
  annualTransactionBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  annualTransactionOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  annualTransactionThreshold?: number;
  /**
   * Maximum number of transactions allowed in the card’s life time.
   * Card limit ‘0’ represents the value is inherited and inherited limit could be calculated by adding accumulated and balance.
   * However, Inherited limit ‘0’ represents unlimited.
   */
  lifeTimeTransactionCount?: number;
  /** Number of times the card is used during the card’s life time. */
  lifeTimeTransactionAccumulated?: number;
  /** Number of times the card could be used in rest of the card’s life time. */
  lifeTimeTransactionBalance?: number;
  /**
   * Indicate if the limit is overridden or default. (False for default).
   * Example: false
   */
  lifeTimeTransactionOverride?: boolean;
  /**
   * The limit to trigger an alert if the balance after a transaction reaches it or below. 0 indicates no alerts will be sent. Not present if not set (issuer value threshold limit applies if available). Not present for COUNT type velocity.
   * Example: 50.55
   * This is an optional output field.
   */
  lifeTimeTransactionThreshold?: number;
}

export const usageRestrictionSchema: Schema<UsageRestriction> = object({
  level: ['Level', optional(string())],
  dailySpend: ['DailySpend', optional(number())],
  dailySpendAccumulated: ['DailySpendAccumulated', optional(number())],
  dailySpendBalance: ['DailySpendBalance', optional(number())],
  dailySpendOverride: ['DailySpendOverride', optional(boolean())],
  dailySpendThreshold: ['DailySpendThreshold', optional(number())],
  weeklySpend: ['WeeklySpend', optional(number())],
  weeklySpendAccumulated: ['WeeklySpendAccumulated', optional(number())],
  weeklySpendBalance: ['WeeklySpendBalance', optional(number())],
  weeklySpendOverride: ['WeeklySpendOverride', optional(boolean())],
  weeklySpendThreshold: ['WeeklySpendThreshold', optional(number())],
  monthlySpend: ['MonthlySpend', optional(number())],
  monthlySpendAccumulated: ['MonthlySpendAccumulated', optional(number())],
  monthlySpendBalance: ['MonthlySpendBalance', optional(number())],
  monthlySpendOverride: ['MonthlySpendOverride', optional(boolean())],
  perTransactionSpend: ['PerTransactionSpend', optional(number())],
  perTransactionSpendOverride: [
    'PerTransactionSpendOverride',
    optional(boolean()),
  ],
  annualSpend: ['AnnualSpend', optional(number())],
  annualSpendAccumulated: ['AnnualSpendAccumulated', optional(number())],
  annualSpendBalance: ['AnnualSpendBalance', optional(number())],
  annualSpendOverride: ['AnnualSpendOverride', optional(boolean())],
  annualSpendThreshold: ['AnnualSpendThreshold', optional(number())],
  lifeTimeSpend: ['LifeTimeSpend', optional(number())],
  lifeTimeSpendAccumulated: ['LifeTimeSpendAccumulated', optional(number())],
  lifeTimeSpendBalance: ['LifeTimeSpendBalance', optional(number())],
  lifeTimeSpendOverride: ['LifeTimeSpendOverride', optional(boolean())],
  lifeTimeSpendThreshold: ['LifeTimeSpendThreshold', optional(number())],
  dailyVolume: ['DailyVolume', optional(number())],
  dailyVolumeAccumulated: ['DailyVolumeAccumulated', optional(number())],
  dailyVolumeBalance: ['DailyVolumeBalance', optional(number())],
  dailyVolumeOverride: ['DailyVolumeOverride', optional(number())],
  dailyVolumeThreshold: ['DailyVolumeThreshold', optional(number())],
  weeklyVolume: ['WeeklyVolume', optional(number())],
  weeklyVolumeAccumulated: ['WeeklyVolumeAccumulated', optional(number())],
  weeklyVolumeBalance: ['WeeklyVolumeBalance', optional(number())],
  weeklyVolumeOverride: ['WeeklyVolumeOverride', optional(boolean())],
  weeklyVolumeThreshold: ['WeeklyVolumeThreshold', optional(number())],
  monthlyVolume: ['MonthlyVolume', optional(number())],
  monthlyVolumeAccumulated: ['MonthlyVolumeAccumulated', optional(number())],
  monthlyVolumeBalance: ['MonthlyVolumeBalance', optional(number())],
  monthlyVolumeOverride: ['MonthlyVolumeOverride', optional(boolean())],
  monthlyVolumeThreshold: ['MonthlyVolumeThreshold', optional(number())],
  perTransactionVolume: ['PerTransactionVolume', optional(number())],
  perTransactionVolumeOverride: [
    'PerTransactionVolumeOverride',
    optional(boolean()),
  ],
  annualVolume: ['AnnualVolume', optional(number())],
  annualVolumeAccumulated: ['AnnualVolumeAccumulated', optional(number())],
  annualVolumeBalance: ['AnnualVolumeBalance', optional(number())],
  annualVolumeOverride: ['AnnualVolumeOverride', optional(boolean())],
  annualVolumeThreshold: ['AnnualVolumeThreshold', optional(number())],
  lifeTimeVolume: ['LifeTimeVolume', optional(number())],
  lifeTimeVolumeAccumulated: ['LifeTimeVolumeAccumulated', optional(number())],
  lifeTimeVolumeBalance: ['LifeTimeVolumeBalance', optional(number())],
  lifeTimeVolumeOverride: ['LifeTimeVolumeOverride', optional(boolean())],
  lifeTimeVolumeThreshold: ['LifeTimeVolumeThreshold', optional(number())],
  dailyTransactionCount: ['DailyTransactionCount', optional(number())],
  dailyTransactionAccumulated: [
    'DailyTransactionAccumulated',
    optional(number()),
  ],
  dailyTransactionBalance: ['DailyTransactionBalance', optional(number())],
  dailyTransactionOverride: ['DailyTransactionOverride', optional(boolean())],
  dailyTransactionThreshold: ['DailyTransactionThreshold', optional(number())],
  weeklyTransactionCount: ['WeeklyTransactionCount', optional(number())],
  weeklyTransactionAccumulated: [
    'WeeklyTransactionAccumulated',
    optional(number()),
  ],
  weeklyTransactionBalance: ['WeeklyTransactionBalance', optional(number())],
  weeklyTransactionOverride: ['WeeklyTransactionOverride', optional(boolean())],
  weeklyTransactionThreshold: [
    'WeeklyTransactionThreshold',
    optional(number()),
  ],
  monthlyTransactionCount: ['MonthlyTransactionCount', optional(number())],
  monthlyTransactionAccumulated: [
    'MonthlyTransactionAccumulated',
    optional(number()),
  ],
  monthlyTransactionBalance: ['MonthlyTransactionBalance', optional(number())],
  monthlyTransactionOverride: [
    'MonthlyTransactionOverride',
    optional(boolean()),
  ],
  monthlyTransactionThreshold: [
    'MonthlyTransactionThreshold',
    optional(number()),
  ],
  annualTransactionCount: ['AnnualTransactionCount', optional(number())],
  annualTransactionAccumulated: [
    'AnnualTransactionAccumulated',
    optional(number()),
  ],
  annualTransactionBalance: ['AnnualTransactionBalance', optional(number())],
  annualTransactionOverride: ['AnnualTransactionOverride', optional(boolean())],
  annualTransactionThreshold: [
    'AnnualTransactionThreshold',
    optional(number()),
  ],
  lifeTimeTransactionCount: ['LifeTimeTransactionCount', optional(number())],
  lifeTimeTransactionAccumulated: [
    'LifeTimeTransactionAccumulated',
    optional(number()),
  ],
  lifeTimeTransactionBalance: [
    'LifeTimeTransactionBalance',
    optional(number()),
  ],
  lifeTimeTransactionOverride: [
    'LifeTimeTransactionOverride',
    optional(boolean()),
  ],
  lifeTimeTransactionThreshold: [
    'LifeTimeTransactionThreshold',
    optional(number()),
  ],
});
