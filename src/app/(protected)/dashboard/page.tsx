import { FC, ReactElement } from "react";

import { useSession } from "@/app/_components/providers/session";
import { Page } from "@/app/_components/ui";

const Component: FC = (): ReactElement => {
  const { signout } = useSession();

  const handleLogout = () => {
    signout();
  };

  return (
    <Page>
      <button onClick={handleLogout}>Logout</button>
    </Page>
  );
};

export default Component;
