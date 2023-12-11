import { Typography as MuiTypography, TypographyProps } from '@mui/material';
import { styled } from '@mui/system';

export const Typography: any = styled(MuiTypography)<TypographyProps>(() => ({
  '&.center': {
    textAlign: 'center',
  },
  '&.MuiTypography-h1': {
    fontFamily: '"Eczar", serif',
    fontWeight: '800',
    fontSize: '2rem',
    color: 'var(--primary)',
    padding: '12px 0',
    '&.fill': {
      borderRadius: '5px',
      padding: '13px',
      color: 'var(--primary)',
    },
    '&.border': {
      fontSize: '4rem',
      width: '100%',
      position: 'relative',
      padding: { xs: '5px 0', sm: '10px 0' },
      paddingLeft: '15px',
      fontWeight: '600',
      verticalAlign: 'center',
      borderBottom: 'none',
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '2px',
        height: '100%',
        top: 0,
        bottom: 0,
        left: '0',
        margin: 'auto',
        background: 'linear-gradient(180deg, #31aaff  0%, #2cd0ff 100%)',
        borderRadius: '3px',
      },
    },
  },
  '&.MuiTypography-h2': {
    fontSize: '2rem',
    color: 'var(--primary)',
    fontWeight: 'bold',
    padding: '12px 0',
    '&.border': {
      fontSize: '1.4rem',
      width: '100%',
      position: 'relative',
      padding: { xs: '5px 0', sm: '10px 0' },
      paddingLeft: '15px',
      fontWeight: '600',
      verticalAlign: 'center',
      borderBottom: 'none',
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '2px',
        height: '100%',
        top: 0,
        bottom: 0,
        left: '0',
        margin: 'auto',
        background: 'linear-gradient(180deg, #31aaff  0%, #2cd0ff 100%)',
        borderRadius: '3px',
      },
    },
    '&.fill': {
      borderRadius: '5px',
      padding: '20px 13px',
      color: 'var(--primary)',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      borderBottom: 'none',
    },
  },
  '&.MuiTypography-h3': {
    fontFamily: 'Helvetica,Arial,sans-serif',
    fontWeight: '400',
    fontSize: '1.05rem',
  },
  '&.MuiTypography-h4': {
    fontFamily: 'Helvetica,Arial,sans-serif',
    fontWeight: '400',
    fontSize: '1rem',
  },
  '&.MuiTypography-h5': {
    fontFamily: 'Helvetica,Arial,sans-serif',
    fontWeight: '400',
    fontSize: '1rem',
  },
  '&.MuiTypography-h6': {
    fontFamily: 'Helvetica,Arial,sans-serif',
    fontWeight: '400',
    fontSize: '1rem',
  },
  '&.MuiTypography-body1': {
    fontFamily: 'Helvetica,Arial,sans-serif',
    fontWeight: '400',
    fontSize: '1rem',
  },
}));

export default Typography;