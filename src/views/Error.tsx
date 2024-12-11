import { useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError() as {
    status: number;
    message: string;
  };
  return (
    <div className="content">
      <h1>{error?.status}</h1>
      <p>{error?.message}</p>
    </div>
  );
};

export default ErrorPage;
