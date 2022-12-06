import Footer from "./components/layout/footer";
import Hero from "./components/Shared/hero";
import Header from "./components/Shared/navbar";
import { ContactUs } from "./components/contact/contact";

export default function Contact() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-gray-100 p-12">
        <div className="m-12">{ContactUs}</div>
      </div>
      <Footer />
    </>
  );
}
