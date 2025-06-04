import { LoaderFunctionArgs, redirect } from "react-router";

import { ROUTES } from "./commons/constants/routes";
import { filterPermission } from "./utils/permission";
import { SessionUser } from "./libs/localstorage";
import { PERMISSIONS } from "./commons/constants/permissions";

const mappingRoutePermissions = [
  {
    path: ROUTES.dashboard,
    permissions: [PERMISSIONS.DASHBOARD.READ_DASHBOARD],
  },
];

const mappingPublicRoutes = ["/auth/login", "/auth/oauth-callback"];

export const middleware = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const session = SessionUser.get();
  const userPermissions =
    session?.user?.roles?.map((role) => role.permissions.map((perm) => perm.name))?.flat() || [];

  const pathname = url.pathname;

  const allowedPermissions = filterPermission(
    mappingRoutePermissions,
    (route) =>
      (session && route.path === pathname && route.permissions
        ? route.permissions.some((permission) => permission ?? userPermissions?.some(permission))
        : true) || false,
  );

  if (mappingPublicRoutes.includes(pathname)) {
    return null;
  }

  if (!session) {
    return redirect(ROUTES.auth.login);
  }

  if (allowedPermissions.length === 0) {
    return redirect(ROUTES.dashboard);
  }

  return null;
};
