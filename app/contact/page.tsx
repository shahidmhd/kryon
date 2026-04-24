import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact — Talk to KRYON',
  description:
    'Reach the KRYON team for orders, press, collabs or styling help. WhatsApp, Instagram DM or email — pick your vibe.',
};

export default function ContactPage() {
  return <ContactContent />;
}
