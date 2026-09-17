import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import ComingSoon from "@/components/ComingSoon";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import PricingOffer from "@/components/PricingOffer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <ComingSoon />
        <Pricing />
        <Testimonials />
        <PricingOffer />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
