import ExpectComponent from "./components/Dashboard/Expect";
import FAQSection from "./components/Dashboard/Faq";
import Footer from "./components/Dashboard/Footer";
import HowItWorks from "./components/Dashboard/HowItWorks";
import IntroSectionComponent from "./components/Dashboard/IntroSection";
import MarqueeSection from "./components/Dashboard/MarqueeSection";
import StatsSection from "./components/Dashboard/StartSection";
import ToolsSection from "./components/Dashboard/Tools";
import NavbarComponent from "./components/navbar";

export default function Home() {
  return (<>
    <main className="flex min-h-screen flex-col items-center pt-8 px-16 pb-12 bg-[#6981fd]">
      <NavbarComponent />
      <IntroSectionComponent />
      <StatsSection />
      <HowItWorks />
      <ExpectComponent />
      <ToolsSection />
      <FAQSection />
      <MarqueeSection />
    </main>
    <Footer />
  </>
  );
}
