import React from 'react';

function Wrapper({ children, className }) {
  const classes = 'container mx-auto py-4 px-2 max-w-7xl ' + className;

  return <div className={classes}>{children}</div>;
}

export default Wrapper;
