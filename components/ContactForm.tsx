"use client";

import { FormEvent, useCallback, useState } from "react";
import { Recaptcha } from "@/components/Recaptcha";

export function ContactForm() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const onToken = useCallback((value: string) => setToken(value), []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setWhatsAppUrl("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        website: formData.get("website"),
        recaptchaToken: token
      })
    });
    if (response.ok) {
      const note = `Hello Priscilla Prints.\n\nFrom: ${formData.get("name")}\nEmail: ${formData.get("email")}\nSubject: ${formData.get("subject")}\n\n${formData.get("message")}`;
      setWhatsAppUrl(`https://wa.me/254112272061?text=${encodeURIComponent(note)}`);
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="form-box" onSubmit={submit}>
      <div className="form-title"><h2>Get in touch</h2><p>Questions about the directory, not print quotes.</p></div>
      <div className="form-content">
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="name" type="text" required autoComplete="name" />
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" required autoComplete="email" />
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" type="text" required />
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required rows={5} />
        <div className="honeypot" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <Recaptcha onToken={onToken} />
        <button className="btn-default" type="submit" disabled={!token || status === "sending"}>{status === "sending" ? "Checking…" : "Check message"}</button>
        <p className="form-status" aria-live="polite">
          {status === "success" && "Spam check complete. Continue to WhatsApp to send your message."}
          {status === "error" && "We could not check that message. Review the form and try again."}
        </p>
        {whatsAppUrl && <a className="btn-secondary form-next-action" href={whatsAppUrl} target="_blank" rel="noreferrer">Continue in WhatsApp</a>}
      </div>
    </form>
  );
}
