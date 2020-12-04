import { areaStep, bb } from 'billboard.js';
import 'billboard.js/dist/billboard.css';
import React, { FC, useEffect, useRef } from 'react';

type DataItem = {
  date: string;
  allocatedAmount: number;
  freeAmount: number;
};

type AllocationChartProps = {
  data: DataItem[];
};

export const AllocationChart: FC<AllocationChartProps> = ({ data }) => {
  const date = data.map((item) => new Date(item.date));
  const allocatedAmount = data.map((item) => item.allocatedAmount);
  const freeAmount = data.map((item) => item.freeAmount);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    bb.generate({
      bindto: ref.current,
      data: {
        x: 'date',
        columns: [
          ['date', ...date],
          ['allocatedAmount', ...allocatedAmount],
          ['freeAmount', ...freeAmount],
        ],
        types: {
          allocatedAmount: areaStep(),
          freeAmount: areaStep(),
        },
      },
    });
  }, []);

  return <div ref={ref} />;
};
