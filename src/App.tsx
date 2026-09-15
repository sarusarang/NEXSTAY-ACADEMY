import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SmoothScroll } from "@/components/common/SmoothScroll";

// Lazy loaded pages
const Home = lazy(() => import("@/page/Index"));
const About = lazy(() => import("@/page/About"));
const Programs = lazy(() => import("@/page/Programs"));
const Admission = lazy(() => import("@/page/Admission"));
const Placement = lazy(() => import("@/page/Placement"));
const Contact = lazy(() => import("@/page/Contact"));
const EarnWhileYouLearn = lazy(() => import("@/page/EarnWhileYouLearn"));
const TermsAndConditions = lazy(() => import("@/page/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("@/page/PrivacyPolicy"));

// Luxury Page Loading Skeleton
function LoadingFallback() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#040914]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <img
            src="/LOGO-01.webp"
            alt="Loading Nexstay Academy"
            className="w-16 h-16 object-contain animate-pulse"
          />
          <div className="absolute -inset-2 rounded-full border-2 border-[#c59b27] border-t-transparent animate-spin" />
        </div>
        <span className="font-['Outfit'] font-bold text-xs uppercase tracking-widest text-white">
          Nexstay Academy
        </span>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* React Router Outlet Layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/placement" element={<Placement />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/earn-while-you-learn" element={<EarnWhileYouLearn />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </SmoothScroll>
    </Router>
  );
}

export default App;
