import { render } from '@testing-library/react';
import React from 'react';
import { AllocationChart } from '../../../src/components/chart/allocation-chart';

test('<EntryExample/>: renders', async () => {
  render(
    <AllocationChart
      data={[
        {
          date: '2020-01-01T06:00:00.000Z',
          allocatedAmount: 2_420_000,
          freeAmount: 1_230,
        },
        {
          date: '2020-02-01T03:00:00.000Z',
          allocatedAmount: 2_220_000,
          freeAmount: 201_230,
        },
      ]}
    />
  );

  // just to have an example expect
  expect(1).toBe(1);
});
