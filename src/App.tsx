import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
// import Home from "./pages/Dashboard/Home";
import DesaHome from "./pages/desa";
import Products from "./pages/desa/products";
import MarketPlace from "./pages/desa/marketPlace";
import ProductDetail from "./pages/desa/ProductDetail";
import Talent from "./pages/desa/talent";
import TalentDetail from "./pages/desa/talent_detail";
import Desa from "./pages/desa/desa";
import Sentiment from "./pages/desa/setiment";
import SentimentDetail from "./pages/desa/sentimentDetail";
import SpreadDashboard from "./pages/desa/spread";
import SpreadDetail from "./pages/desa/spreadDetail";
import IconPreview from "./pages/icons";
import MarketPlaceForm from "./pages/desa/marketplaceForm";
import TalentForm from "./pages/desa/talentForm";
// import TalentTable from "./pages/desa/talentData";
import DesaProfiling from "./pages/desa/desaProfiling";
import AppLayout2 from "./layout/AppLayout2";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            {/* <Route index path="/" element={<Home />} /> */}

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />

            {/* <Route path="/" element={<DesaHome />} /> */}
           
            <Route path="/products" element={<Products />} />

            {/* <Route path="/desa" element={<Desa />} /> */}
            {/* <Route path="/talent" element={<Talent />} /> */}
            <Route path="/talent/add" element={<TalentForm />} />
            {/* <Route path="/talent" element={<TalentTable />} /> */}
            {/* <Route path="/talent/:id" element={<TalentDetail />} /> */}
            <Route path="/art" element={<DesaHome />} />
            {/* <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/marketplace/:id" element={<ProductDetail />} /> */}
            <Route path="/marketplace-form" element={<MarketPlaceForm />} />
            {/* <Route path="/sentiment" element={<Sentiment />} />
            <Route path="/sentiment/:id" element={<SentimentDetail />} /> */}
            {/* <Route path="/spread" element={<SpreadDashboard />} />
            <Route path="/spread/:id" element={<SpreadDetail />} /> */}
            <Route path="/icons" element={<IconPreview />} />
          </Route>

          {/* <Route element={<AppLayout2 />}> */}
          <Route >
            <Route path="/desa-dashboard" element={<DesaProfiling />} />
            <Route path="/" element={<Desa />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/marketplace/:id" element={<ProductDetail />} />
            <Route path="/sentiment" element={<Sentiment />} />
            <Route path="/sentiment/:id" element={<SentimentDetail />} />
            <Route path="/spread" element={<SpreadDashboard />} />
            <Route path="/spread/:id" element={<SpreadDetail />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/talent/:id" element={<TalentDetail />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
