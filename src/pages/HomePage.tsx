import { Header } from "../components/Header";
import { ClientsSection } from "../components/ClientsSection";
import { ContactUsSection } from "../components/ContactSection";
import { LatestProjectsSection } from "../components/LatestProjectsSection";
import { ServicesSection } from "../components/ServicesSection";
import { StepsSection } from "../components/StepsSection";

export function HomePage() {

  return (
    <>
      <Header />

      <main className="main">

        <StepsSection />
        <ServicesSection />
        <ClientsSection />
        <LatestProjectsSection />
        <ContactUsSection />

      </main>

    </>
  )
}