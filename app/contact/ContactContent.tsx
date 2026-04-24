'use client';
import { useState } from 'react';
import Section from '@/components/Section';
import { Instagram, Mail, MessageCircle, Phone, Send, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/assets';

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General', message: '' });
  const [sent, setSent] = useState(false);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hey KRYON — I'd love to chat!"
  )}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static export: route submissions through WhatsApp for immediacy.
    const msg = `Name: ${form.name}%0AEmail: ${form.email}%0ATopic: ${form.subject}%0A%0A${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSent(true);
  };

  return (
    <>
      <Section
        className="!pt-12 md:!pt-20"
        eyebrow="Say hi"
        title="Talk to KRYON."
        subtitle="Orders, press, collabs or just styling help — the quickest way to us is WhatsApp or Instagram."
      >
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8">
          <div className="relative overflow-hidden rounded-[32px] glass-strong p-8 md:p-10">
            <div
              aria-hidden
              className="absolute -inset-32 -z-10 opacity-70 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle at 30% 20%, rgba(30,127,255,0.35), transparent 60%), radial-gradient(circle at 80% 90%, rgba(255,59,212,0.25), transparent 60%)',
              }}
            />
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Your name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-kryon-electric/60 focus:bg-white/[0.07] transition-colors"
                    placeholder="Alex River"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-kryon-electric/60 focus:bg-white/[0.07] transition-colors"
                    placeholder="you@drip.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Topic
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['General', 'Order', 'Press', 'Collab'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, subject: t }))}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                        form.subject === t
                          ? 'bg-neon-gradient text-white shadow-neon-sm'
                          : 'glass text-white/70 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-kryon-electric/60 focus:bg-white/[0.07] transition-colors resize-none"
                  placeholder="Tell us what's up…"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button type="submit" className="btn-neon" data-cursor="hover">
                  <Send size={16} />
                  Send via WhatsApp
                </button>
                <a
                  href="mailto:hi@kryon.style"
                  className="btn-ghost"
                  data-cursor="hover"
                >
                  <Mail size={16} />
                  Or email instead
                </a>
              </div>

              {sent && (
                <div className="text-sm text-kryon-glow">
                  WhatsApp opened in a new tab — we&apos;ll reply in under an hour.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="group block relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-[#128c7e] via-[#25d366] to-[#075e54] shadow-neon transition-transform hover:-translate-y-0.5"
            >
              <div
                aria-hidden
                className="absolute -right-10 -bottom-10 w-56 h-56 bg-white/10 rounded-full blur-3xl"
              />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-md">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/80">
                    Fastest
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold">
                    WhatsApp us
                  </div>
                  <div className="text-white/85 text-sm mt-1">
                    Usually replies in under 10 min, 9am–9pm GMT.
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="group block relative overflow-hidden rounded-3xl p-6 glass-strong transition-transform hover:-translate-y-0.5"
            >
              <div
                aria-hidden
                className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full blur-3xl opacity-60"
                style={{
                  background:
                    'linear-gradient(135deg, #ff3bd4, #7a5cff, #1e7fff)',
                }}
              />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-gradient flex items-center justify-center shadow-neon-sm">
                  <Instagram size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                    DM us
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold">
                    @kryon.style
                  </div>
                  <div className="text-white/70 text-sm mt-1">
                    Follow for new drops · 120K+ drip crew.
                  </div>
                </div>
              </div>
            </a>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-5">
                <Mail size={16} className="text-kryon-glow" />
                <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/55">
                  Email
                </div>
                <a
                  href="mailto:hi@kryon.style"
                  className="block mt-1 font-semibold hover:text-kryon-glow"
                >
                  hi@kryon.style
                </a>
              </div>
              <div className="glass rounded-2xl p-5">
                <Phone size={16} className="text-kryon-glow" />
                <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/55">
                  Phone
                </div>
                <div className="mt-1 font-semibold">+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <MapPin size={16} className="text-kryon-glow" />
              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/55">
                Studio
              </div>
              <div className="mt-1 font-semibold">Lisbon · NYC · Seoul</div>
              <div className="text-sm text-white/60 mt-1">
                Appointments by DM only.
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
