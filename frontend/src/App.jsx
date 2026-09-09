import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Prediction from "./pages/Prediction";
import Analytics from "./pages/Analytics";
import History from "./pages/History";


export default function App() {

  const [activePage, setActivePage] =
    useState("dashboard");

  const [mobileOpen, setMobileOpen] =
    useState(false);


  const renderPage = () => {

    switch (activePage) {

      case "prediction":
        return <Prediction />;

      case "analytics":
        return <Analytics />;

      case "history":
        return <History />;

      case "dashboard":
      default:
        return (
          <Dashboard
            setActivePage={setActivePage}
          />
        );

    }

  };


  return (
    <div className="
      min-h-screen
      bg-[#080b12]
      text-gray-100
    ">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />


      <div className="
        lg:pl-72
      ">

        <Header
          setMobileOpen={setMobileOpen}
        />

        <main className="
          mx-auto
          max-w-[1600px]
          p-4 sm:p-6
          lg:p-8
        ">

          {renderPage()}

        </main>

      </div>

    </div>
  );
}