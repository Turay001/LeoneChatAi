import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home";
import { ReportingHub } from "../pages/ReportingHub";
import { ThreatDashboard } from "../pages/ThreatDashboard";
import { HowItWorks } from "../pages/HowItWorks";
import { Layout } from "../components/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "reporting-hub", Component: ReportingHub },
      { path: "threat-dashboard", Component: ThreatDashboard },
      { path: "how-it-works", Component: HowItWorks },
    ],
  },
], {
  basename: "/LeoneChat",
});
