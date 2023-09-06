import CTA from "./components/CTA";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Services from "./components/home/Services";
import Features from "./components/home/Features";
import HowItWorks from "./components/home/HowItWorks";
import Faqs from "./components/Faqs";
export const metadata = {
  title: "E-Website Provider",
  description: " E-Website Provider Private Limited (EWP PVT. LTD.)",
};
export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <About />
        <Services />
        <CTA />
        <Features />
        <HowItWorks />
        <CTA variant="light" />
        <Faqs faqs={faqs} />
      </main>
    </div>
  );
}

const faqs = [
  {
    question: "What is the purpose of this website?",
    answer:
      "The purpose of this website is to provide information about our products and services.",
  },
  {
    question: "How do I create an account?",
    answer:
      "To create an account, click on the 'Sign Up' button and follow the on-screen instructions.",
  },
  {
    question: "Can I change my password?",
    answer:
      "Yes, you can change your password by going to your account settings and selecting the 'Change Password' option.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, debit cards, and PayPal for payment.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team by emailing support@example.com or calling our toll-free number at 1-800-123-4567.",
  },
];
