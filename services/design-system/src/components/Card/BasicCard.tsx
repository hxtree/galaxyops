import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export type BasicCardProps = {
  title?: string;
  body?: string;
  url?: string;
  cta?: string;
};

// TODO finish fleshing in basic card props

export const BasicCard = (props: BasicCardProps): JSX.Element => {
  const { cta, title } = props;
  const defaultCta = 'Learn More';

  return (
    <Card sx={{ minWidth: 275, borderRadius: 6 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          Lorem ipsum
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{cta || defaultCta}</Button>
      </CardActions>
    </Card>
  );
}