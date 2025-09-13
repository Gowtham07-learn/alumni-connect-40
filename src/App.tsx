import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Feed from "./pages/Feed";
import Jobs from "./pages/Jobs";
import Networking from "./pages/Networking";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Profile from "./pages/Profile";
import Layout from "./components/Layout/Layout";
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
          <Route path="/dashboard" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          <Route path="/feed" element={
            <Layout>
              <Feed />
            </Layout>
          } />
          <Route path="/jobs" element={
            <Layout>
              <Jobs />
            </Layout>
          } />
          <Route path="/networking" element={
            <Layout>
              <Networking />
            </Layout>
          } />
          <Route path="/events" element={
            <Layout>
              <Events />
            </Layout>
          } />
          <Route path="/donate" element={
            <Layout>
              <Donate />
            </Layout>
          } />
          <Route path="/profile" element={
            <Layout>
              <Profile />
            </Layout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
