import { ContactForm } from '@/components/contact-form';
import { ContactInfo } from '@/components/contact-info';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground">
            Any questions or remarks? Just write us a message!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}