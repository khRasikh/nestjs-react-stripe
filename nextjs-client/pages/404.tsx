import Link from "next/link";
import Footer from "./components/layout/footer";
import Header from "./components/Shared/navbar";

export default function ErorrPage404() {
  return (
    <div>
      <Header />
      <div className="w-full text-center justify-center text-xl my-3">
        <h3 className="font-extrabold text-red-700 my-6">Page Not Found!!</h3>
        <p>
          Go back to home{" "}
          <Link
            href="/"
            className="text-blue-700 underline hover:text-green-700"
          >
            page
          </Link>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
