import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

import { useSession } from "@/app/_components/providers/session";

// import { usePostLogin } from "./_hooks/use-post-login";

const Component: React.FC = () => {
  const session = useSession();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (session.status === "authenticated") {
      navigate(searchParams.get("callbackUrl") || "/dashboard");
    }
  }, [session.status, navigate, searchParams]);

  // const { mutate, isPending: loading } = usePostLogin();
  //
  // const handleCredentialLogin = async (values: { email: string; password: string }) =>
  //   mutate(values);

  return (
    <div>
      <h1>Register Page</h1>
    </div>
  );
};

export default Component;
