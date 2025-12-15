import Navbar from "@/app/components/Navbar";
import IT from "@/app/components/IT";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Enterprise IT & Infrastructure Services | Beam & Clover",
  description:
    "Secure cloud infrastructure, cybersecurity, and enterprise IT integration services. Leading IT consulting firm for digital transformation in government and public sectors in Nigeria.",
};

export default function Page() {

  return (
    <div>
      <Navbar />
      <IT/>
      <Footer/>
    </div>
  );
}