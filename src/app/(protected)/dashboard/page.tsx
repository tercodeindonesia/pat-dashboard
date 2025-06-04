import { FC, ReactElement } from "react";

import { useSession } from "@/app/_components/providers/session";

const Component: FC = (): ReactElement => {
  const { signout } = useSession();

  const handleLogout = () => {
    signout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Component;
