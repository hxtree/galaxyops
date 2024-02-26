import './style.module.scss';

export type BasicCardProps = {
  title?: string;
  body?: string;
  url?: string;
  cta?: string;
  children?: React.ReactNode;
};

// TODO finish fleshing in basic card props
export const BasicCard = (props: BasicCardProps): JSX.Element => {
  const { cta, body, title, children } = props;
  const defaultCta = 'Learn More';

  const callOut = "Save 10% Off";
  const callOutColor = "primary";

  return (
    <div className="card">
      <div className='card-thumbnail'>
        <div className='card-call-out px-4'>{callOut}</div>
        <svg className="bd-placeholder-img card-img-top"
          width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img"
          aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice"
          focusable="false"><title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Sample Image</text>
        </svg>
      </div>
      <div className="card-body">
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