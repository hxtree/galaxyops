'use client';
import { useState } from 'react';
import { Chart, Button } from '@cats-cradle/design-system';

export default function DiceMonitor() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  const callApi = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        'https://nx7uv2rfy4.execute-api.us-east-2.amazonaws.com/default/v1/luck-by-dice/dice-roll',
      );
      const result = await res.json();
      const newData: any[] = data;
      result.data.forEach((value: any) => {
        newData.push([
          newData.length + 1,
          value.min,
          value.max,
          value.total,
          value.luck,
          value.bonus,
        ]);
      });
      setData(newData);
      setLoading(false);
    } catch (err) {
      const error = err as Error;
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={[['Roll', 'Min', 'Max', 'Total', 'Luck', 'Bonus'], ...data]}
        options={{
          title: 'Roll Outcome',
          curveType: 'function',
          legend: { position: 'bottom' },
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
      <Button onClick={() => callApi()}>Query</Button>
    </>
  );
}
