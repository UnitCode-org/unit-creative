import Layout from "@/components/layouts/Layout";

import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
    </Layout>
  );
}
