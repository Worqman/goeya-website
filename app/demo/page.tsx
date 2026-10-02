import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoBooking from "@/components/DemoBooking";

export const metadata = {
  title: "Book a Demo — eya",
  description:
    "Grab 20 minutes with the team, walk through live outreach and AI replies, and get your questions answered.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <DemoBooking />
      </main>
      <Footer />
    </div>
  );
}
