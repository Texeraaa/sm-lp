import AboutSection from "@/components/About";
import FleetSection from "@/components/Fleet";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <FleetSection />
      <AboutSection />
    </div>
  );
}
