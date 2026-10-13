import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WorkTabs from "./sections/WorkTabs";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <ShowcaseSection />
    <WorkTabs />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Education />
    <Certifications />
    <Contact />
    <Footer />
  </>
);

export default App;
