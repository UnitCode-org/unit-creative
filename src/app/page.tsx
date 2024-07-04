import Layout from "@/components/layouts/Layout";

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Services from "./components/Services";
import UnitNetwork from "./components/UnitNetwork";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Services />
      <ContactUs />
      <UnitNetwork />
    </Layout>
  );
}
