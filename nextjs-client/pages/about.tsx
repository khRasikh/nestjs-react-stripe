import { AboutUs } from "./components/About/about";
import Footer from "./components/layout/footer";
import Hero from "./components/Shared/hero";
import Header from "./components/Shared/navbar";

export default function About() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-gray-100 p-12">
      <div className="m-12">
        {AboutUs}
      </div>
      </div>
      <Footer />
    </>
  );
}
