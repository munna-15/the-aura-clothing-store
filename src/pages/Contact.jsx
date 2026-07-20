import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import StoreExperience from "../components/Contact/StoreExperience";
import ContactCTA from "../components/Contact/ContactCTA";

const Contact = () => {
  return (
    <main className="overflow-hidden bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <StoreExperience />
      <ContactCTA/>
      
      
    </main>
  );
};

export default Contact;