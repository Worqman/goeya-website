import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";
import { terms } from "@/content/legal/terms";

export const metadata = {
  title: "Terms of Service — eya",
  description:
    "The terms that govern your use of the Eya website and application, including lifetime and subscription plans.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <LegalPage document={terms} />
      </main>
      <Footer />
    </div>
  );
}
