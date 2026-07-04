import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, MessageCircle, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  CONTACT_CHANNELS,
  CONTACT_META,
  SOCIAL_LINKS,
  WEB3FORMS_ACCESS_KEY,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// react-icons stands in for the brand marks here — lucide-react dropped
// Github/Linkedin/X in v1, same substitution used in the About section.
const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
} as const;

type Status = "idle" | "submitting" | "success" | "error";

const emptyForm = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isComplete =
    form.name.trim() && form.email.trim() && form.subject.trim() && form.message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete || status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setForm(emptyForm);
        // Revert the button back to normal after the confirmation has had
        // a moment to register, so it doesn't say "Message Sent!" forever.
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        // Web3Forms still returns a real JSON body on 400 — surface the
        // actual reason (e.g. "Please verify your email") instead of just
        // "something went wrong", since that's what actually tells you
        // what to fix.
        setStatus("error");
        setErrorMessage(result.message || "Submission was rejected.");
        console.error("Web3Forms rejected the submission:", result);
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error — check your connection and try again.");
      console.error("Web3Forms request failed:", err);
    }
  };

  const buttonLabel =
    status === "submitting"
      ? "Sending..."
      : status === "success"
        ? "Message Sent!"
        : status === "error"
          ? "Retry"
          : "Send message";

  return (
    <section id="contact" className="scroll-mt-24 py-28 md:scroll-mt-28 md:py-36">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-6 md:px-10"
      >
        <motion.p
          variants={item}
          className="mb-4 font-mono text-xs tracking-widest text-accent"
        >
          {CONTACT_META.eyebrow}
        </motion.p>

        <motion.h2
          variants={item}
          className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl md:text-5xl"
        >
          {CONTACT_META.heading}
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-body md:text-lg"
        >
          {CONTACT_META.intro}
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact form */}
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-mono text-xs text-body">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border-b border-hairline bg-transparent py-2 text-heading placeholder:text-body/40 focus:border-accent focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-mono text-xs text-body">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border-b border-hairline bg-transparent py-2 text-heading placeholder:text-body/40 focus:border-accent focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="font-mono text-xs text-body">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="border-b border-hairline bg-transparent py-2 text-heading placeholder:text-body/40 focus:border-accent focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-mono text-xs text-body">
                Message
              </label>
              <textarea
                id="message"
                rows={2}
                placeholder="What are you building?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-none border-b border-hairline bg-transparent py-2 text-heading placeholder:text-body/40 focus:border-accent focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={!isComplete || status === "submitting"}
              className={cn(
                "mt-2 inline-flex w-fit items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                status === "success"
                  ? "bg-emerald-500 text-white"
                  : "bg-heading text-bg hover:bg-heading/90",
                status === "submitting" && "cursor-wait opacity-75"
              )}
            >
              {buttonLabel}
              {status !== "submitting" && status !== "success" && (
                <Send size={15} />
              )}
            </button>

            {status === "error" && errorMessage && (
              <p className="-mt-4 text-xs text-red-400">{errorMessage}</p>
            )}
          </motion.form>

          {/* Direct Channels */}
          <motion.div
            variants={item}
            className="rounded-2xl border border-hairline bg-surface/60 p-8 backdrop-blur-md"
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm text-heading">
                {CONTACT_CHANNELS.availability}
              </span>
            </div>

            <p className="mt-6 font-mono text-xs tracking-wide text-body">
              {CONTACT_CHANNELS.locationLabel}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={CONTACT_CHANNELS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-hairline px-5 py-3 text-sm font-medium text-heading transition-colors hover:border-accent/60 hover:text-accent"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <a
                href={CONTACT_CHANNELS.calendly}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-hairline px-5 py-3 text-sm font-medium text-heading transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Calendar size={16} /> Schedule an Appointment
              </a>
              <a
                href={`mailto:${CONTACT_CHANNELS.directEmail}`}
                className="flex items-center justify-center gap-2 rounded-full border border-hairline px-5 py-3 text-sm font-medium text-heading transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Mail size={16} /> Send an Email
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 border-t border-hairline pt-6">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="text-body transition-colors hover:text-heading"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}