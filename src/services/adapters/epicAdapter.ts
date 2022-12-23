import type { TEpic } from '@/db/scheme';
import type { Overwrite } from '@/services/base/types';

export type TEpicClient = Overwrite<TEpic, { estimate: string }>;

const HOURS_IN_DAY = 8;
const DAYS_IN_WEEK = 5;

export default function epicAdapter(epic: TEpic): TEpicClient {
  const estimate = epic.estimate;

  let hours: number = 0;
  let days: number = 0;
  let weeks: number = 0;

  if (estimate > HOURS_IN_DAY) {
    days = Math.floor(estimate / HOURS_IN_DAY);
    hours = estimate % HOURS_IN_DAY;
  } else {
    hours = estimate;
  }

  if (days && days > DAYS_IN_WEEK) {
    weeks = Math.floor(days / DAYS_IN_WEEK);
    days = days % DAYS_IN_WEEK;
  }

  let estimateStr = `${hours}h`;
  days && (estimateStr = `${days}d ${estimateStr}`);
  weeks && (estimateStr = `${weeks}w ${estimateStr}`);

  return {
    ...epic,
    estimate: estimateStr,
  };
}
