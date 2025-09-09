import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import FleetSection from "@/components/Fleet";
import Hero from "@/components/Hero";
import InstagramSection from "@/components/InstagramSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <FleetSection />
      <AboutSection />
      <InstagramSection />
      <ContactSection />
    </div>
  );
}
