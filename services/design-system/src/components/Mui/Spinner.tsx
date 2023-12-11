import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Spinner = () => (
  <Box
    sx={{
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <h2>Loading ...</h2>
    <CircularProgress
      size={80}
      thickness={4}
      sx={{
        mt: 4,
      }}
    />
  </Box>
);

export default Spinner;