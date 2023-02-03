import React from 'react';

const PreTitle = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...props}
    className={`text-sm text-secondary-500 font-cal ${props.className}`}
  >
    {children}
  </p>
);

export default PreTitle;
