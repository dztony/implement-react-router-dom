import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <div>
      <h3>
        Unhandled Client error
      </h3>
      <div>
        {error.message}
      </div>
    </div>
  );
}

export default ErrorPage;
