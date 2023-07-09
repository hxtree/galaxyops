'use client';
import { useState } from 'react';
import {
  Stack,
  Grid,
  Box,
  Chart,
  TextField,
  Button,
  LoadingButton,
} from '@cats-cradle/design-system';

export default function DiceAnalyzer() {
  const [iterations, setIterations] = useState<number>(100);
  const [notation, setNotation] = useState<string>('1d6');
  const [data, setData] = useState<any[]>([]);
  const [average, setAverage] = useState<number>(0);
  const [runningTotal, setRunningTotal] = useState<number>(0);
  const [luck, setLuck] = useState<any>(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  const clear = async () => {
    setData([]);
    setRunningTotal(0);
    setAverage(0);
  };

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
      let newTotal = 0;

      result.data.forEach((value: any) => {
        newData.push([
          newData.length + 1,
          value.min,
          value.max,
          value.total,
          value.luck,
          value.bonus,
        ]);
        newTotal += value.total;
        setLuck(value.luck);
      });

      setAverage((runningTotal + newTotal) / newData.length);
      setRunningTotal(runningTotal + newTotal);
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
      <Grid container spacing={2}>
        <Grid item>
          <Stack>
            <Box component="form" noValidate autoComplete="off">
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
                sx={{ width: '5ch', ml: 1 }}
              />
              <TextField
                label="Luck"
                value={luck}
                onChange={e => setLuck(e.target.value)}
                variant="standard"
                sx={{ width: '5ch', ml: 1 }}
              />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => clear()} data-testid={`dice-analyzer-clear`}>
              Clear
            </Button>
            <LoadingButton
              variant="contained"
              loading={isLoading}
              onClick={() => callApi()}
              data-testid={`dice-analyzer-roll`}
            >
              Roll
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>

      {data.length > 0 && (
        <>
          <Chart
            chartType="LineChart"
            height="500px"
            width="100%"
            data={[['Roll', 'Min', 'Max', 'Total', 'Luck', 'Bonus'], ...data]}
            options={{
              title: `Average ${average}`,
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
        </>
      )}
    </>
  );
}
