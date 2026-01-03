"use client";
import React, { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

export default function HomevoiLanding() {
  // Google Apps Script endpoints (keep as-is)
  const START_PLAN_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz5vyQ55nBM9yAAUixpAFd6OUutU0ZEtXWO9JXRv6bt7XkzEGYxfbsFy2TM-NXDLNJjnw/exec";
  const CONTACT_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzW1b7ztABVxH01uuFdUcMzLHqXGIMowDcn4gkH6oDSbUbM3iofPFosk5L13_9pW3dFxg/exec";

  const [activeService, setActiveService] = useState<"elderly" | "property" | null>(null);
  const [showStartPlan, setShowStartPlan] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  // "Start Plan" submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = new URLSearchParams({
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      service: formState.service,
      source: "start_plan_modal",
    }).toString();

    try {
      await fetch(START_PLAN_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload,
      });

      setShowStartPlan(false);
      setFormState({ name: "", email: "", phone: "", service: "" });
      alert("Thank you — our team will contact you within 24 hours to confirm details.");
    } catch (error) {
      console.error("Network or server error (start plan)", error);
      alert(
        "We couldn't confirm the request due to a network issue. Please email guardian@homevoi.in if this persists.",
      );
    }
  };

  // Contact form submit
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const payload = new URLSearchParams({
      name: String(formData.get("contact_name") || ""),
      email: String(formData.get("contact_email") || ""),
      phone: String(formData.get("contact_phone") || ""),
      message: String(formData.get("contact_message") || ""),
      source: "contact_form",
    }).toString();

    try {
      await fetch(CONTACT_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload,
      });

      formEl.reset();
      alert("Thanks — we've received your message and will respond shortly.");
    } catch (error) {
      console.error("Network or server error (contact form)", error);
      alert(
        "We couldn't send your message due to a network issue. Please email guardian@homevoi.in if this continues.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* NAV – gold gradient ribbon */}
      <header className="bg-gradient-to-r from-[#D4AF37] via-[#C89A1B] to-[#B38414] border-b border-[#8F6C10] shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <div className="bg-white/10 rounded-2xl px-2 py-1 flex items-center">
              <img
                src="/logo.png"
                alt="Homevoi Logo"
                className="h-10 w-auto md:h-12 drop-shadow-md"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">Homevoi</h1>
              <p className="text-xs text-yellow-50/90">Your trusted presence back home</p>
            </div>
          </div>
          <nav className="hidden sm:flex gap-6 items-center text-sm text-white font-medium">
            <a
              href="#services"
              className="hover:text-[#FFF4CC] transition-colors"
            >
              Services
            </a>
            <a
              href="#how"
              className="hover:text-[#FFF4CC] transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="hover:text-[#FFF4CC] transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-[#FFF4CC] transition-colors"
            >
              Contact
            </a>
            <Button
              className="bg-white text-slate-900 hover:bg-[#FFF4CC] hover:text-slate-900 transition-colors"
              onClick={() => setShowStartPlan(true)}
            >
              Subscribe / Book
            </Button>
          </nav>
        </div>
      </header>

      {/* HERO – narrower blue band */}
      <section className="w-full bg-[#E7F3FF] py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Left: Copy & CTA */}
          <div className="max-w-3xl md:flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
              When you are away, Homevoi stays.
            </h2>

            <p className="mt-4 text-base md:text-lg text-slate-700">
              Living far away while your home and parents are still here? Homevoi has you covered. 
              We stay present on your behalf—visiting, checking, caring, and sharing clear, honest updates 
              so you always know everything is taken care of.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button className="px-8 py-3 text-sm md:text-base" onClick={() => setShowStartPlan(true)}>
                Subscribe to Guardian Plan
              </Button>
              <Button
                variant="ghost"
                className="px-8 py-3 text-sm md:text-base"
                onClick={() => alert("Call us at +917012069145")}
              >
                Talk to Sales
              </Button>
            </div>

            {/* benefits – kept but slightly tighter spacing */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="font-semibold text-slate-900">Vetted local teams</div>
                  <div className="text-slate-600">
                    Background checks, training & uniformed identity
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="font-semibold text-slate-900">Clear, photo-based reports</div>
                  <div className="text-slate-600">
                    See exactly what we saw — photos, notes, receipts
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="font-semibold text-slate-900">One flat subscription</div>
                  <div className="text-slate-600">
                    Set-and-forget peace of mind — no hidden fees
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="md:flex-1 flex justify-center">
            <img
              src="/images/hero-parents-home-illustration.png"
              alt="Family at home illustration"
              className="w-full max-w-md md:max-w-lg h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Our Services</h3>
        <p className="text-slate-600 mt-2">
          Living far away doesn’t mean being disconnected.
With Homevoi, your home and your parents are never unattended.
We stay present — so you can live peacefully, wherever you are.
        </p>

<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
  {[
    {
      title: "Elderly Wellbeing",
      text:
        `Our elderly wellbeing visits focus on safety, comfort, and everyday support. We are not medical providers — but we ensure timely escalation and clear communication whenever attention is needed.

You stay informed.
Your parents feel supported.
Nothing gets overlooked.`,
      key: "elderly",
    },
    {
      title: "Full Property Care",
      text:
        "An unattended home slowly develops problems — often unnoticed until they become expensive.\n\nWe conduct regular inspections, identify early issues, and coordinate repairs only after your approval. Whether your home is occupied or locked, it stays secure, maintained, and ready.",
      key: "property",
    },
  ].map((s) => (
            <Card key={s.title} className="p-4">
              <CardContent>
                <h4 className="text-lg font-semibold">{s.title}</h4>
                <p className="text-slate-600 mt-2">{s.text}</p>
                <div className="mt-4">
                  <Button
                    size="sm"
                    onClick={() =>
                      setActiveService(s.key === "elderly" ? "elderly" : "property")
                    }
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="max-w-7xl mx-auto px-6 py-12 bg-slate-50">
        <h3 className="text-2xl font-bold">How Homevoi Works</h3>
        <p className="text-slate-600 mt-2">
          Living far away doesn’t mean being disconnected.
With Homevoi, your home and your parents are never unattended.
We stay present — so you can live peacefully, wherever you are.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="text-3xl font-bold">1</div>
            <h4 className="mt-3 font-semibold">Subscribe & tell us about the home</h4>
            <p className="mt-2 text-slate-600">
              Provide property details, occupant info and any priority concerns. We take security
              seriously — all data is handled privately.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="text-3xl font-bold">2</div>
            <h4 className="mt-3 font-semibold">Guardian assignment</h4>
            <p className="mt-2 text-slate-600">
              A vetted, local Guardian is assigned to your property.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="text-3xl font-bold">3</div>
            <h4 className="mt-3 font-semibold">Regular visits & instant updates</h4>
            <p className="mt-2 text-slate-600">
              After each visit you get a verified report with photos, notes, and recommended actions.
              Actions are executed only after your approval.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Plans & Pricing</h3>
        <p className="text-slate-600 mt-2">
          Simple subscription options — pick the level of care you need. All plans include a
          dedicated Guardian, verified reporting, and emergency escalation.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border-2 border-indigo-100 rounded-2xl text-center bg-white shadow-lg">
            <div className="text-sm text-slate-500">Starter</div>
            <div className="mt-2 text-3xl font-extrabold">₹2,999 / mo</div>
            <p className="text-slate-600 mt-2">
              Monthly inspection, photo report, and escalation support. Ideal for regular oversight.
            </p>
            <div className="mt-4">
              <Button onClick={() => setShowStartPlan(true)}>Choose Starter</Button>
            </div>
          </div>

          <div className="p-6 border-2 border-indigo-200 rounded-2xl text-center bg-white shadow-lg">
            <div className="text-sm text-slate-500">Essentials</div>
            <div className="mt-2 text-3xl font-extrabold">₹4,999 / mo</div>
            <p className="text-slate-600 mt-2">
              Fortnightly visits, wellbeing check-ins, on-demand visits and endor coordination.
            </p>
            <div className="mt-4">
              <Button onClick={() => setShowStartPlan(true)}>Choose Essentials</Button>
            </div>
          </div>

          <div className="p-6 border-2 border-indigo-100 rounded-2xl text-center bg-white shadow-lg">
            <div className="text-sm text-slate-500">Premium</div>
            <div className="mt-2 text-3xl font-extrabold">Custom</div>
            <p className="text-slate-600 mt-2">
              Tailored programs with a dedicated relationship manager, scheduled vendor deliverables and
              priority response.
            </p>
            <div className="mt-4">
              <Button onClick={() => setShowStartPlan(true)}>Contact Sales</Button>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-6">
          Add-ons: deep cleaning, pest control, and repair management available at transparent
          prices. All work begins after customer approval.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-r from-slate-50 to-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="mt-2 text-slate-600">
              Questions about plans, partnerships, or a custom property program? Send a message — we
              respond within one business day.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <div className="text-sm font-semibold">Email</div>
                <div className="text-slate-600">guardian@homevoi.in</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Phone (India)</div>
                <div className="text-slate-600">+919495254399</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Operating Hours</div>
                <div className="text-slate-600">Mon–Sat, 9:00 AM — 6:00 PM IST</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Office</div>
                <div className="text-slate-600">
                  Homevoi Services Pvt Ltd, R2, Centerspace Coworking, Annankunnu Road, Kottayam, Kerala - 686001
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white p-6 rounded-2xl shadow" onSubmit={handleContactSubmit}>
              <div className="grid gap-3">
                <Input placeholder="Your name" name="contact_name" />
                <Input placeholder="Email" name="contact_email" />
                <Input placeholder="Phone" name="contact_phone" />
                <Textarea
                  placeholder="Tell us about your needs (property address, concerns, best time to call)"
                  rows={4}
                  name="contact_message"
                />
                <div className="mt-2 flex justify-end">
                  <Button type="submit">Send Message</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS MODAL */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setActiveService(null)}
          />
          <div className="relative max-w-3xl mx-4 bg-white rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold">
                  {activeService === "elderly" ? "Elderly Wellbeing" : "Full Property Care"}
                </h2>
                <p className="mt-2 text-slate-600">
                  {activeService === "elderly"
                    ? "Compassionate monthly visits focused on safety, routine and companionship. We never provide medical treatment — instead we escalate and coordinate with local healthcare partners when required."
                    : "Comprehensive property oversight: inspections, preventive maintenance, and vendor-managed repairs with transparent approvals."}
                </p>
              </div>
              <button
                className="text-slate-500 hover:text-slate-700"
                onClick={() => setActiveService(null)}
              >
                Close ✕
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeService === "elderly" ? (
                <>
                  <div>
                    <h4 className="font-semibold">Included in visits</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>Safety check and environment walkthrough</li>
                      <li>Medication reminders and adherence notes</li>
                      <li>Companionship and social interaction</li>
                      <li>Report with 5–8 photos and a short wellbeing summary</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Safety & trust</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>Background-checked, uniformed Guardians</li>
                      <li>Visit timestamps and GPS verification</li>
                      <li>Escalation to family & local services on emergencies</li>
                      <li>Privacy-respecting photography (consent-based)</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h4 className="font-semibold">Included in inspections</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>12-point home condition checklist</li>
                      <li>15+ photographs documenting key areas</li>
                      <li>Notes on minor fixes and preventive suggestions</li>
                      <li>Monthly downloadable report (PDF)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Repairs & approvals</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>Vetted vendor network and transparent quotes</li>
                      <li>Work begins only after customer approval</li>
                      <li>Photos & receipts provided after completion</li>
                      <li>Optional payment handling as a concierge service</li>
                    </ul>
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button
                onClick={() => {
                  setShowStartPlan(true);
                  setActiveService(null);
                }}
              >
                Start a Plan
              </Button>
              <Button variant="ghost" onClick={() => setActiveService(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* START PLAN MODAL */}
      {showStartPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowStartPlan(false)}
          />
          <form
            onSubmit={handleSubmit}
            className="relative max-w-xl mx-4 bg-white rounded-2xl shadow-xl p-6 w-full"
          >
            <h3 className="text-lg font-semibold">Start a Plan</h3>
            <p className="text-slate-600 mt-1">
              Provide basic details and we will schedule a call to confirm scope, access and start
              date. You will receive a written service agreement before the first visit.
            </p>
            <div className="mt-4 grid gap-3">
              <Input
                placeholder="Full name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
              <Input
                placeholder="Email address"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
              <Input
                placeholder="Phone (with country code)"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              />
              <select
                className="border rounded px-3 py-2"
                value={formState.service}
                onChange={(e) => setFormState({ ...formState, service: e.target.value })}
              >
                <option value="">Select service</option>
                <option value="elderly">Elderly Wellbeing (add-on)</option>
                <option value="property">Full Property Care (core plan)</option>
              </select>
              <div className="flex justify-end gap-3 mt-4">
                <Button type="submit">Request a Call</Button>
                <Button variant="ghost" type="button" onClick={() => setShowStartPlan(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-8 text-slate-600">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Homevoi Logo" className="h-10 w-auto" />
            <div>
              <div className="font-semibold">Homevoi</div>
              <div className="text-xs">Trusted presence back home</div>
            </div>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Homevoi Services Pvt Ltd — All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
