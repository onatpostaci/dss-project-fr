import {
  Dashboard,
  Discover,
  Footer,
  Hero,
  Navbar,
  FreqAskQuest,
  SubscriptionPanel,
  PaymentOptions,
  PaymentPlan,
  PaymentMethod,
  CardDetails,
  CheckoutPage,
  LogoCarousel,
} from "@/components";
import Image from "next/image";
import { LogoItem } from "@/types";

const logos = [
  { src: "/pandas-logo.png", alt: "Logo 1", width: 150, height: 75 },
  { src: "/nextjs.png", alt: "Logo 2", width: 150, height: 75 },
  { src: "/chat-gpt-logo-png.png", alt: "Logo 3", width: 150, height: 75 },
  { src: "/UE_Logo.png", alt: "Logo 4", width: 150, height: 75 },
  { src: "/Python_logo.png", alt: "Logo 5", width: 150, height: 75 },
  // Add more logos as needed
];

export default function Home() {
  return (
    <>
      <Navbar action="landing" />
      <main className="flex flex-col overflow-hidden">
        <Hero />
        <div>
          <SubscriptionPanel />
        </div>
        <div className="padding-x padding-y max-width mb-[150px]" id="discover">
          <LogoCarousel logos={logos} />
        </div>
        <div className="padding-x padding-y max-width">
          <FreqAskQuest />
        </div>
      </main>
      <Footer />
    </>
  );
}
