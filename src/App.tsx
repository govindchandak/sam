import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AuditDefensePage from "./pages/AuditDefensePage";
import ManagedServicesPage from "./pages/ManagedServicesPage";
import LicenseOptimizationPage from "./pages/LicenseOptimizationPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Service Pages */}
          
          <Route path="/contact" element={<Contact />} />

          <Route path="/services/audit-defense" element={<AuditDefensePage />} />
          <Route path="/services/managed-services" element={<ManagedServicesPage />} />
          <Route path="/services/license-optimization" element={<LicenseOptimizationPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;