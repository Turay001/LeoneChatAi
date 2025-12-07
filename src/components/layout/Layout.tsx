import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { FloatingActionButton } from "../ui/FloatingActionButton";
import { ScrollToTop } from "../ui/ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#101010] via-[#0a0015] to-[#150029] text-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButton />
      <ScrollToTop />
    </div>
  );
}