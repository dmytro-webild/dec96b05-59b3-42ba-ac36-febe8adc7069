"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

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
        { name: "Contact", id: "contact" },
      ]}
      brandName="Andrew Horn"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "sparkles-gradient" }}
      title="Your Love Story Deserves a Ceremony That Feels Like You"
      description="Personal, meaningful, and affordable wedding ceremonies across the Shenandoah Valley—crafted with care by a family man who understands what truly matters."
      buttons={[{ text: "Book Your Date", href: "#contact" }, { text: "Check Availability", href: "#contact" }]}
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
      description="Hi, I’m Andrew Horn—a father of two and wedding officiant who believes the most meaningful ceremonies are the ones that feel real. I work with you to create a ceremony that reflects your story—not a script pulled off the internet."
      bulletPoints={[
        { title: "Family-First Values", description: "Committed to the bonds that matter most." },
        { title: "Personalized Approach", description: "No cookie-cutter scripts, just your unique story." },
        { title: "Travel Friendly", description: "Proudly serving the entire Shenandoah Valley." }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-man-woman-smartly-dressed-with-bouquet-exotic-flowers-are-walking-woods-date-nature_169016-13895.jpg?_wi=1"
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
      useInvertedBackground={false}
      features={[
        { id: "b1", title: "Genuine Connection", subtitle: "Care", category: "Personal", value: "You won't feel like just another booking." },
        { id: "b2", title: "Calm Professionalism", subtitle: "Presence", category: "Reliable", value: "A steady hand on your big day." },
        { id: "b3", title: "Clear Communication", subtitle: "Process", category: "Transparent", value: "Support from start to finish." },
        { id: "b4", title: "Transparent Pricing", subtitle: "Fair", category: "Value", value: "Clear costs, no hidden surprises." }
      ]}
      title="More Than Just an Officiant"
      description="This is one of the most important moments of your life—you deserve someone who treats it that way."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Miller", date: "June 2023", title: "Bride", quote: "Andrew made our ceremony feel so personal and genuine—it was perfect.", tag: "Personal", avatarSrc: "http://img.b2bpic.net/free-photo/couple-holding-hands-looking-apple-orchard_107420-12217.jpg", imageSrc: "http://img.b2bpic.net/free-photo/view-love-friendly-sun-female_1304-2661.jpg?_wi=2", imageAlt: "happy bride and groom portrait candid" },
        { id: "2", name: "James Wilson", date: "May 2023", title: "Groom", quote: "He took all the stress out of the process and made everything easy.", tag: "Stress-free", avatarSrc: "http://img.b2bpic.net/free-photo/couple-love-kissing-nature-travel-mountains_1328-1862.jpg", imageSrc: "http://img.b2bpic.net/free-photo/young-man-woman-smartly-dressed-with-bouquet-exotic-flowers-are-walking-woods-date-nature_169016-13895.jpg?_wi=2", imageAlt: "happy bride and groom portrait candid" },
        { id: "3", name: "Emma Davis", date: "April 2023", title: "Bride", quote: "We couldn’t have asked for a better officiant for our day.", tag: "Excellent", avatarSrc: "http://img.b2bpic.net/free-photo/couple-newlyweds-smiling-groom-covering-bride-s-eyes-with-hands_176420-2253.jpg", imageSrc: "http://img.b2bpic.net/free-photo/young-couple-making-photos-forest_1303-22427.jpg", imageAlt: "happy bride and groom portrait candid" },
        { id: "4", name: "Chris Taylor", date: "March 2023", title: "Groom", quote: "Professional, kind, and incredibly helpful throughout.", tag: "Highly Recommended", avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-wedding-couple-posing-forest_1153-5968.jpg", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-picture-ginger-female-with-pure-white-skin-attractive-light-pink-gown_181624-30948.jpg?_wi=1", imageAlt: "happy bride and groom portrait candid" },
        { id: "5", name: "Jessica Lee", date: "February 2023", title: "Bride", quote: "Andrew was a dream to work with—so accommodating and warm.", tag: "Wonderful", avatarSrc: "http://img.b2bpic.net/free-photo/happy-couple-smiling_1153-105.jpg", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-couple-love-black-wear_624325-273.jpg", imageAlt: "happy bride and groom portrait candid" }
      ]}
      title="Kind Words from Couples"
      description="I'm honored to have been part of so many beautiful journeys."
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
        { id: "std", name: "Standard Ceremony", price: "Custom Quote", features: ["Customized Script", "Pre-wedding Consult", "Travel Included"], buttons: [{ text: "Get a Quote", href: "#contact" }] },
        { id: "elo", name: "Elopement", price: "Custom Quote", features: ["Short & Sweet", "Quick Scheduling", "Travel Included"], buttons: [{ text: "Get a Quote", href: "#contact" }] },
        { id: "vow", name: "Vow Renewal", price: "Custom Quote", features: ["Personalized Service", "Heartfelt Ceremony", "Travel Included"], buttons: [{ text: "Get a Quote", href: "#contact" }] }
      ]}
      title="Affordable & Transparent"
      description="Weddings shouldn’t be complicated—or overpriced. I offer fair, straightforward pricing with no hidden fees."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Let's Make It Official"
      title="Contact Andrew"
      description="Your wedding ceremony should feel effortless, meaningful, and unforgettable. Let's create something that truly represents you. Fill out the form or reach out directly."
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-picture-ginger-female-with-pure-white-skin-attractive-light-pink-gown_181624-30948.jpg?_wi=2"
      mediaPosition="left"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Home", href: "#hero" }, { label: "Services", href: "#services" }, { label: "Contact", href: "#contact" }] },
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