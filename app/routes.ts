import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  {
    path: "/services",
    file: "routes/services.tsx",
  },
  {
    path: "/about",
    file: "routes/about.tsx",
  },
  {
    path: "/login",
    file: "routes/login.tsx",
  },
  {
    path: "/register",
    file: "routes/register.tsx",
  },
  {
    path: "/research",
    file: "routes/research.tsx",
  },
  {
    path: "/team",
    file: "routes/team.tsx",
  },
] satisfies RouteConfig;
