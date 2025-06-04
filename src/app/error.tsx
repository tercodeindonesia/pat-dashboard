import type { FC, ReactElement } from "react";
import { useRouteError, useNavigate } from "react-router";

const AppError: FC = (): ReactElement => {
  const error = useRouteError() as Response;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {error.status === 403 ? (
        <div>
          <h1>403 Forbidden</h1>
          <p>Anda tidak memiliki akses untuk halaman ini.</p>
        </div>
      ) : (
        <div>
          <h1>{error.status} Error</h1>
          <p>{error.statusText || "Terjadi kesalahan."}</p>
          <button onClick={handleGoBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default AppError;
