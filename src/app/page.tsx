import ContactSection from "@/components/contentPage/ContactSection";
import Call2ActionMain from "@/components/contentPage/CTASection/";
import ProjectsSection from "@/components/contentPage/ProjectsSection";
import ServicesSection from "@/components/contentPage/ServicesSection";
import TestimonySection from "@/components/contentPage/TestimonySection";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <ChakraProvider>
      <main className="flex min-h-screen flex-col">
        <Call2ActionMain />
        <ServicesSection />
        <ProjectsSection />
        <TestimonySection />
        <ContactSection />
      </main>
    </ChakraProvider>
  );
}
