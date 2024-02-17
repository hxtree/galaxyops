import './style.module.scss'

export type PaperProps = {
  children: React.ReactNode;
  elevation: string;
};

export const Paper = (props: PaperProps): JSX.Element => {
  const { elevation, children } = props;

  return (<div className={`paper paper-elevation-${elevation}`}>{children}</div>)
};

export default Paper;