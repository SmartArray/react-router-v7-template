import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/welcome.tsx"),
  route("howto", "routes/howto.tsx")
] satisfies RouteConfig;
