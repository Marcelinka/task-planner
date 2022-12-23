import type { TEpic } from '@/db/scheme';
import { describe, expect, test } from 'vitest';
import epicAdapter from './epicAdapter';

function createTestEpic(estimate: number): TEpic {
  return {
    id: 1,
    title: '',
    estimate,
  };
}

describe('Unit: epicAdapter', () => {
  describe('estimate', () => {
    test.each([
      { est: 0, res: '0h' },
      { est: 4, res: '4h' },
      { est: 8, res: '1d' },
      { est: 10, res: '1d 2h' },
      { est: 44, res: '1w 4h' },
      { est: 56, res: '1w 2d' },
      { est: 58, res: '1w 2d 2h' },
    ])(
      'Если estimate = $est, то estimate должен стать $res',
      ({ est, res }) => {
        const testEpic = createTestEpic(est);
        const adaptedEpic = epicAdapter(testEpic);
        expect(adaptedEpic.estimate).toBe(res);
      }
    );
  });
});
