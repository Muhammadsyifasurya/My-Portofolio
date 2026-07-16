import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import {
  EmailSidebar,
  MobileSocialBar,
  SocialSidebar,
} from "@/components/SocialSidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <EmailSidebar />

      <main className="relative lg:px-12">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <MobileSocialBar />
      </main>

      <Footer />
    </>
  );
}
