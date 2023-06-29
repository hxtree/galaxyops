'use client';
import { useState } from 'react';
import {
  Box,
  Chart,
  TextField,
  LoadingButton,
} from '@cats-cradle/design-system';

export default function DiceMonitor() {
  const [iterations, setIterations] = useState<number>(100);
  const [notation, setNotation] = useState<string>('1d6');
  const [data, setData] = useState<any[]>([]);
  const [luck, setLuck] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  const callApi = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        'https://nx7uv2rfy4.execute-api.us-east-2.amazonaws.com/default/v1/luck-by-dice/dice-roll',
        {
          body: JSON.stringify({
            notation: notation,
            luck: luck,
            iterations: iterations,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        },
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
        setLuck(value.luck);
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
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Dice Notation"
          value={notation}
          onChange={e => setNotation(e.target.value)}
          helperText="Example 1d6*2+2"
          variant="standard"
        />
        <TextField
          label="Iterations"
          value={iterations}
          onChange={e => setIterations(Number(e.target.value))}
          variant="standard"
        />
        <TextField
          label="Luck"
          value={luck}
          onChange={e => setLuck(Number(e.target.value))}
          variant="standard"
        />
        <LoadingButton
          variant="contained"
          size="large"
          loading={isLoading}
          onClick={() => callApi()}
        >
          Roll
        </LoadingButton>
      </Box>
      {data.length > 0 && (
        <Chart
          chartType="LineChart"
          height="500px"
          width="100%"
          data={[['Roll', 'Min', 'Max', 'Total', 'Luck', 'Bonus'], ...data]}
          options={{
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
      )}
    </>
  );
}
