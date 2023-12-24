export type SpinnerProps = {
  color:'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'
  size?: 'small'
}

export const Spinner = (props: SpinnerProps): JSX.Element => {
  const { color, size } = props;

  const classNames = [];

  if(size === 'small'){
    classNames.push(`spinner-border-sm`)
  }

  classNames.push(`spinner-border`);
  classNames.push(`text-${color}`);

  return (
    <div className={classNames.join(' ')} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default Spinner;