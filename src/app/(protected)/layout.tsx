import type { FC, ReactElement } from "react";
import { Link, Outlet } from "react-router";

const ProtectedLayout: FC = (): ReactElement => {
  return (
    <div>
      <ul>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
