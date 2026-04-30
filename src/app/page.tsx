"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLarge"
        background="noise"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Meet Andrew", id: "about" },
        { name: "Services", id: "services" },
        { name: "Process", id: "process" },
        { name: "Pricing", id: "pricing" },
      ]}
      brandName="Andrew Horn"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "sparkles-gradient" }}
      title="Your V"
      description="Personal, meaningful, and affordable wedding ceremonies across the Shenandoah Valley—crafted with care by a family man who understands what truly matters."
      buttons={[{ text: "Check Availability", onClick: () => window.location.href = "tel:5404212440" }]}
      imageSrc="http://img.b2bpic.net/free-photo/view-love-friendly-sun-female_1304-2661.jpg?_wi=1"
      mediaAnimation="blur-reveal"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/beautiful-couple-love-black-wear_624325-273.jpg", alt: "beautiful couple in love in black wear" },
        { src: "http://img.b2bpic.net/free-photo/back-view-couple-holding-hands-outdoors_23-2149609652.jpg", alt: "Back view couple holding hands outdoors" },
        { src: "http://img.b2bpic.net/free-photo/romantic-engagement-happiness-couple-elegance_1153-2195.jpg", alt: "romantic engagement happiness couple elegance" },
        { src: "http://img.b2bpic.net/free-photo/newlyweds-looking-sunset-posing-hill_8353-12613.jpg", alt: "Newlyweds looking at sunset posing on hill" },
        { src: "http://img.b2bpic.net/free-photo/couple-holding-hands-looking-apple-orchard_107420-12217.jpg", alt: "happy bride and groom portrait candid" }
      ]}
      marqueeItems={[
        { type: "text", text: "Shenandoah Valley Based" },
        { type: "text", text: "Fully Licensed Officiant" },
        { type: "text", text: "Custom Vows" },
        { type: "text", text: "Travel Ready" },
        { type: "text", text: "Stress-Free Booking" }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Meet Andrew"
      description="I specialize in creating a ceremony experience that is uniquely yours, removing the stress and uncertainty of wedding planning with a personalized, guided approach that puts your journey and your peace of mind first."
      bulletPoints={[
        { title: "Family-First Values", description: "Committed to the bonds that matter most." },
        { title: "Personalized Approach", description: "No cookie-cutter scripts, just your unique story." },
        { title: "Travel Friendly", description: "Proudly serving the entire Shenandoah Valley." }
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D3cyxYfyDl3PXKxSvPUyuuS3Iy/uploaded-1777515638465-ayxnkbwj.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "1", title: "Wedding Ceremonies", subtitle: "Full Ceremony", category: "Standard", value: "Custom-written and tailored to your tone." },
        { id: "2", title: "Elopements", subtitle: "Intimate Day", category: "Quick", value: "Beautiful ceremonies without the stress." },
        { id: "3", title: "Vow Renewals", subtitle: "Recommitment", category: "Heartfelt", value: "Celebrate your journey together." },
        { id: "4", title: "Travel Included", subtitle: "Valley-wide", category: "Local", value: "I’ll come to your chosen location." }
      ]}
      title="Simple, Meaningful, Stress-Free"
      description="Professional services tailored to your specific needs and vision."
    />
  </div>

  <div id="benefits" data-section="benefits">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        { id: "b1", title: "Genuine Connection", subtitle: "Care", category: "Personal", value: "You won't feel like just another booking." },
        { id: "b2", title: "Calm Professionalism", subtitle: "Presence", category: "Reliable", value: "A steady hand on your big day." },
        { id: "b3", title: "Clear Communication", subtitle: "Process", category: "Transparent", value: "Support from start to finish." },
        { id: "b4", title: "Transparent Pricing", subtitle: "Fair", category: "Value", value: "Clear costs, no hidden surprises." }
      ]}
      title="More Than Just an Officiant"
      description="This is one of the most important moments of your life—you deserve someone who treats it that way."
      containerClassName="pt-12 pb-8"
      textBoxDescriptionClassName="text-2xl font-bold leading-tight"
    />
  </div>

  <div id="process" data-section="process">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "p1", title: "Reach Out", content: "Send a message or request your date to start the conversation." },
        { id: "p2", title: "Quick Call", content: "We'll talk through your vision, tone, and specific details." },
        { id: "p3", title: "Custom Ceremony", content: "I craft a unique ceremony specifically tailored to your story." },
        { id: "p4", title: "Your Big Day", content: "You show up, relax, and let me handle the rest." }
      ]}
      sideTitle="How It Works"
      sideDescription="Clear, easy steps to ensure your ceremony is exactly as you imagined."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        { id: "std", name: "Standard Ceremony", price: "Custom Quote", features: ["Customized Script", "Pre-wedding Consult", "Travel Included"], buttons: [{ text: "Check Availability", onClick: () => window.location.href = "tel:5404212440" }] },
        { id: "elo", name: "Elopement", price: "Custom Quote", features: ["Short & Sweet", "Quick Scheduling", "Travel Included"], buttons: [{ text: "Check Availability", onClick: () => window.location.href = "tel:5404212440" }] },
        { id: "vow", name: "Vow Renewal", price: "Custom Quote", features: ["Personalized Service", "Heartfelt Ceremony", "Travel Included"], buttons: [{ text: "Check Availability", onClick: () => window.location.href = "tel:5404212440" }] }
      ]}
      title="Affordable & Transparent"
      description="Weddings shouldn’t be complicated—or overpriced. I offer fair, straightforward pricing with no hidden fees."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Home", href: "#hero" }, { label: "Services", href: "#services" }] },
        { items: [{ label: "Shenandoah Valley, VA", href: "#" }, { label: "Available for Travel", href: "#" }] },
        { items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
      ]}
      logoText="Andrew Horn"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}