import React, { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden select-none selection:bg-blue-600/10 selection:text-blue-600 text-foreground">
      {/* Elegant light slate gridlines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.012)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0" />

      <Header />
      <main className="flex-grow pt-32 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};
