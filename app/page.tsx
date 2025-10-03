import Hero from "../components/Hero";
import { loadPage, type HomeContent } from "../lib/content";
import AboutOrca from "../components/AboutOrca";
import SolutionAndAudience from "../components/SolutionAndAudience";
import Overcharged from "../components/Overcharged";
import Testimonial from "../components/Testimonial";
import Articles from "../components/Articles";
import FAQ from "../components/FAQ";
import IntroOverlay from "../components/IntroOverlay";
import ServicesGrid from "../components/ServicesGrid";
import SavingsCalculator from "../components/SavingsCalculator";

export default function Home() {
  const home = loadPage<HomeContent>("home");
  return (
    <main id="main">
      <IntroOverlay />
      <Hero content={home?.hero} />
      <AboutOrca />
      <SolutionAndAudience />
      <Overcharged />
      <Testimonial />
      <Articles />
      <ServicesGrid />
      <SavingsCalculator />
      <FAQ />
      <div id="contact">
        {/* Contact section rendered via layout Footer CTA; optional dedicated component present as well */}
      </div>
    </main>
  );
}
