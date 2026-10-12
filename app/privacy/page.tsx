import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/content/legal/privacy";

export const metadata = {
  title: "Privacy Policy — eya",
  description:
    "How Eya collects and processes personal information across the website, user accounts, lead data and AI processing.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <LegalPage document={privacy} />
      </main>
      <Footer />
    </div>
  );
}
