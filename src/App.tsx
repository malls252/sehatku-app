import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import JadwalPage from "./pages/JadwalPage";
import ChatPage from "./pages/ChatPage";
import LayananPage from "./pages/LayananPage";
import DokterListPage from "./pages/DokterListPage";
import DokterDetailPage from "./pages/DokterDetailPage";
import ProfilPage from "./pages/ProfilPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jadwal" element={<JadwalPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/dokter" element={<DokterListPage />} />
          <Route path="/dokter/:id" element={<DokterDetailPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
