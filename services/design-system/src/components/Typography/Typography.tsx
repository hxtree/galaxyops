import './style.module.scss'

export enum TypographyVariants {
  'h1' = 'h1',
  'h2' = 'h2',
  'h3' = 'h3',
  'h4' = 'h4',
  'h5' = 'h5',
  'h6' = 'h6',
  'body' = 'body',
  'intro' = 'intro'
}

export enum TypographyAlign {
  'center' = 'center',
  'left' = 'left',
}

export type TypographyProps = {
  children: React.ReactNode;
  align?: keyof typeof TypographyAlign;
  variant?: keyof typeof TypographyVariants;
  fill?: boolean;
  border?: boolean;
};

export const Typography = (props: TypographyProps): JSX.Element => {
  const { children, variant } = props;

  const classNames = []

  if(props.fill){
    classNames.push('fill')
  }

  if(props.align){
    classNames.push(props.align)
  }

  if(props.border){
    classNames.push('border')
  }

  switch(variant){
    case 'h1':
      return (<h1 className={classNames.join(" ")}>{children}</h1>)
    case 'h2':
      return (<h2 className={classNames.join(" ")}>{children}</h2>)
    case 'h3':
      return (<h3 className={classNames.join(" ")}>{children}</h3>)
    case 'h4':
      return (<h4 className={classNames.join(" ")}>{children}</h4>)
    case 'h5':
      return (<h5 className={classNames.join(" ")}>{children}</h5>)
    case 'h6':
      return (<h6 className={classNames.join(" ")}>{children}</h6>)
    case 'intro':
      classNames.push('intro')
      return (<p  className={classNames.join(" ")}>{children}</p>)
    case 'body':
    default:
      classNames.push('body1')
      return (<p  className={classNames.join(" ")}>{children}</p>)
  }
};

export default Typography;