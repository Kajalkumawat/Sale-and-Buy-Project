import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppStateProvider } from "./context/AppState";
import { currentUser, buyerPlans, sellerPlans, agentPlans } from "./data/mockData";

import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import BuyProperties from "./pages/BuyProperties";
import RentProperties from "./pages/RentProperties";
import PropertyDetails from "./pages/PropertyDetails";
import SellProperty from "./pages/SellProperty";
import NearbyMap from "./pages/NearbyMap";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import Shortlist from "./pages/buyer/Shortlist";
import Compare from "./pages/buyer/Compare";
import Enquiries from "./pages/buyer/Enquiries";
import SiteVisits from "./pages/buyer/SiteVisits";
import Payments from "./pages/buyer/Payments";

import SellerDashboard from "./pages/seller/SellerDashboard";
import Boost from "./pages/seller/Boost";
import ChatPage from "./pages/dashboard/ChatPage";

import AgentDashboard from "./pages/agent/AgentDashboard";
import Clients from "./pages/agent/Clients";

import ListingsPage from "./pages/dashboard/ListingsPage";
import AddPropertyPage from "./pages/dashboard/AddPropertyPage";
import LeadsPage from "./pages/dashboard/LeadsPage";
import SubscriptionPage from "./pages/dashboard/SubscriptionPage";

import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import PropertyManagement from "./pages/admin/PropertyManagement";
import KycVerification from "./pages/admin/KycVerification";
import PaymentsSubscriptions from "./pages/admin/PaymentsSubscriptions";
import CouponsOffers from "./pages/admin/CouponsOffers";
import FeaturedListings from "./pages/admin/FeaturedListings";
import Complaints from "./pages/admin/Complaints";
import Cms from "./pages/admin/Cms";

function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<BuyProperties />} />
            <Route path="/rent" element={<RentProperties />} />
            <Route path="/sell" element={<SellProperty />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/nearby" element={<NearbyMap />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/buyer" element={<DashboardLayout role="buyer" userName={currentUser.buyer.name} />}>
            <Route path="dashboard" element={<BuyerDashboard />} />
            <Route path="shortlist" element={<Shortlist />} />
            <Route path="compare" element={<Compare />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="site-visits" element={<SiteVisits />} />
            <Route path="payments" element={<Payments />} />
            <Route path="subscription" element={<SubscriptionPage role="buyer" plans={buyerPlans} currentPlan={currentUser.buyer.plan} />} />
          </Route>

          <Route path="/seller" element={<DashboardLayout role="seller" userName={currentUser.seller.name} />}>
            <Route path="dashboard" element={<SellerDashboard />} />
            <Route path="listings" element={<ListingsPage role="seller" />} />
            <Route path="add-property" element={<AddPropertyPage role="seller" />} />
            <Route path="leads" element={<LeadsPage role="seller" />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="boost" element={<Boost />} />
            <Route path="subscription" element={<SubscriptionPage role="seller" plans={sellerPlans} currentPlan={currentUser.seller.plan} />} />
          </Route>

          <Route path="/agent" element={<DashboardLayout role="agent" userName={currentUser.agent.name} />}>
            <Route path="dashboard" element={<AgentDashboard />} />
            <Route path="listings" element={<ListingsPage role="agent" />} />
            <Route path="add-property" element={<AddPropertyPage role="agent" />} />
            <Route path="clients" element={<Clients />} />
            <Route path="leads" element={<LeadsPage role="agent" />} />
            <Route path="subscription" element={<SubscriptionPage role="agent" plans={agentPlans} currentPlan={currentUser.agent.plan} />} />
          </Route>

          <Route path="/admin" element={<DashboardLayout role="admin" userName={currentUser.admin.name} />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="properties" element={<PropertyManagement />} />
            <Route path="kyc" element={<KycVerification />} />
            <Route path="payments" element={<PaymentsSubscriptions />} />
            <Route path="coupons" element={<CouponsOffers />} />
            <Route path="featured" element={<FeaturedListings />} />
            <Route path="complaints" element={<Complaints />} />
            <Route path="cms" element={<Cms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppStateProvider>
  );
}

export default App;
