import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Pillars } from "@/components/site/pillars";
import { About } from "@/components/site/about";
import { MaterialDiagram } from "@/components/site/material-diagram";
import { Products } from "@/components/site/products";
import { CardTypes } from "@/components/site/card-types";
import { Environment } from "@/components/site/environment";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <About />
        <MaterialDiagram />
        <Products />
        <CardTypes />
        <Environment />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
