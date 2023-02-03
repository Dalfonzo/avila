import React from 'react';

const Subtitle = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    {...props}
    className={`text-xl font-bold uppercase text-primary-300 font-mont ${props.className}`}
  >
    {children}
  </h2>
);

export default Subtitle;
