import { useState } from 'react';
import {
  Analytics,
  Alert,
  Stack,
  Grid,
  Box,
  Chart,
  TextField,
  Button,
  Paper,
  AlertSeverity,
} from '@galaxyops/design-system/dist/main';
import axios from 'axios';

export type DiceAnalyzerProps = {
  notation?: string;
  luck?: number;
  iterations?: number;
};

export const DiceAnalyzer = (props: DiceAnalyzerProps) => {
  const [iterations, setIterations] = useState<number>(props.iterations ?? 100);
  const [notation, setNotation] = useState<string>(props.notation ?? '1d6');
  const [luck, setLuck] = useState<number | string>(props.luck ?? 0);
  const [data, setData] = useState<any[]>([]);
  const [average, setAverage] = useState<number>(0);
  const [runningTotal, setRunningTotal] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>();

  const analytics = new Analytics('DiceAnalyzer');

  const parentDomainName =
    import.meta.env.VITE_PARENT_DOMAIN_NAME ?? 'sandbox.nekosgate.com';

  const clear = async () => {
    setData([]);
    setRunningTotal(0);
    setAverage(0);
    setErrorMsg(undefined);
  };

  const callApi = async () => {
    try {
      setErrorMsg(undefined);
      setLoading(true);

      // Make a request for a user with a given ID
      const res = await axios.post(
        `https://api.${parentDomainName}/dice/dice-roll`,
        {
          notation: notation,
          luck: luck,
          iterations: iterations,
          headers: {
            'Content-Type': 'application/json',
          },
          setTimeout: 1,
        },
      );
      console.log(res);

      const result = res.data;
      const newData: any[] = data;
      let newTotal = 0;

      result.data.forEach((value: any) => {
        newData.push([
          newData.length + 1,
          value.min,
          value.average,
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
    } catch (err) {
      const error = err as Error;
      console.error(error.message);
      setErrorMsg('Failed to process request please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {errorMsg && errorMsg?.length > 0 && (
        <Alert severity={AlertSeverity.DANGER}>{errorMsg}</Alert>
      )}

      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <Paper elevation="1" className="p-4">
            <Grid container spacing={2}>
              <Grid item>
                <Stack>
                  <Box component="form">
                    <TextField
                      label="Dice Notation"
                      value={notation}
                      onChange={(e: any) => setNotation(e.target.value)}
                      helpBlock="Example 1d6*2+2"
                      variant="standard"
                    />
                    <TextField
                      label="Iterations"
                      value={iterations}
                      onChange={(e: any) =>
                        setIterations(Number(e.target.value))
                      }
                      variant="standard"
                    />
                    <TextField
                      label="Luck"
                      value={luck}
                      onChange={(e: any) => setLuck(e.target.value)}
                      variant="standard"
                    />
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            <Button
              color="primary"
              loading={isLoading}
              onClick={() => callApi()}
              testId={`dice-analyzer-roll`}
              ref={(ref: any) => analytics.set(ref, 'Roll')}
            >
              Roll
            </Button>
            <Button
              color="secondary"
              onClick={() => clear()}
              disabled={data.length < 1}
              testId={`dice-analyzer-clear`}
              ref={(ref: any) => analytics.set(ref, 'Clear')}
            >
              Clear
            </Button>
          </Paper>
        </div>
        <div className="col-lg-9 col-md-12 col-sm-12">
          {data.length > 0 && (
            <div role="figure" aria-labelledby="caption">
              <Chart
                chartType="LineChart"
                height="500px"
                width="100%"
                data={[
                  ['Roll', 'Min', 'Average', 'Max', 'Total', 'Luck', 'Bonus'],
                  ...data,
                ]}
                options={{
                  title: `Average ${average}`,
                  curveType: 'function', // 'none',
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};
