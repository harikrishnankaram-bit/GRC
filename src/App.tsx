import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "@/pages/Index";
import IndustryDetailPage from "@/pages/IndustryDetailPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import ResourceHubPage from "@/pages/ResourceHubPage";
import ContactPage from "@/pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/industries/:industryId" element={<IndustryDetailPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/resources" element={<ResourceHubPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
