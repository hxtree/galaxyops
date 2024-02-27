import './style.module.scss';

export type BasicCardProps = {
  title?: string;
  body?: string;
  url?: string;
  imageSrc?: string;
  ribbonText?: string;
  ribbonColor?: string;
  children?: React.ReactNode;
};

// TODO finish fleshing in basic card props
export const BasicCard = (props: BasicCardProps): JSX.Element => {
  const { ribbonText, body, title, imageSrc, children } = props;

  return (
    <div className="card h-100 border-radius-4">
      <div className='card-thumbnail'>
        <div className="card-img-top-wrapper">
          <div className="card-img-top" style={{background: `url(${imageSrc})`}}/>
        </div>
        {ribbonText && <div className='card-call-out px-4'>{ribbonText}</div>}
      </div>
      <div className="card-body p-4">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {body}
        </p>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}