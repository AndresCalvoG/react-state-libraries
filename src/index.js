import { registerApplication, start } from "single-spa";

registerApplication({
  name: "root",
  app: () => import("./root-app.js"),
  activeWhen: "/",
});

registerApplication({
  name: "app",
  app: () =>
    import(/* webpackIgnore: true */ "http://localhost:5173/src/main.js"),
  activeWhen: "/orders",
});

start({
  urlRerouteOnly: true,
});
