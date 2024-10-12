import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import { useDeviceStatus } from "./utils/deviceStatus";
import LowStatusPopup from "./components/LowStatusPopup";
import React from "react";

const queryClient = new QueryClient();

const App = () => {
  const { isLowBattery, isLowNetwork } = useDeviceStatus();
  const [showPopup, setShowPopup] = React.useState(false);

  React.useEffect(() => {
    setShowPopup(isLowBattery || isLowNetwork);
  }, [isLowBattery, isLowNetwork]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className={`${showPopup ? 'bg-purple-100 text-purple-900' : ''}`}>
          <BrowserRouter>
            <Routes>
              {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
              ))}
            </Routes>
          </BrowserRouter>
          {showPopup && <LowStatusPopup isLowBattery={isLowBattery} isLowNetwork={isLowNetwork} />}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;