"use client";
import React, { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

export default function HomevoiLanding() {
  // Google Apps Script endpoints
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

  // "Book a Visit" (Start Plan) modal submit -> START_PLAN_SCRIPT_URL
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
      // Use no-cors so the browser doesn't block the response because of CORS.
      // We don't need to read the response body, we just want the request to reach Apps Script.
      await fetch(START_PLAN_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload,
      });

      console.log("Start plan submitted", formState);
      setShowStartPlan(false);
      setFormState({ name: "", email: "", phone: "", service: "" });
      alert("Thanks — we'll get back to you soon.");
    } catch (error) {
      console.error("Network or server error (start plan)", error);
      alert(
        "We couldn't confirm the booking due to a network error, but if this keeps happening please email guardian@homevoi.in.",
      );
    }
  };

  // Contact form submit -> CONTACT_SCRIPT_URL
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Capture the form before any await
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
      // Same pattern: use no-cors, don't try to read the response.
      await fetch(CONTACT_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload,
      });

      formEl.reset();
      alert("Thanks — your message has been sent.");
    } catch (error) {
      console.error("Network or server error (contact form)", error);
      alert(
        "We couldn't confirm sending your message due to a network error. If this continues, please email guardian@homevoi.in.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* NAV */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Homevoi Logo" className="h-12 w-auto" />
          <div>
            <h1 className="text-lg font-semibold">Homevoi</h1>
            <p className="text-xs text-slate-500">Your trusted presence back home</p>
          </div>
        </div>
        <nav className="hidden sm:flex gap-6 items-center text-sm text-slate-700">
          <a href="#services" className="hover:text-slate-900">
            Services
          </a>
          <a href="#how" className="hover:text-slate-900">
            How it Works
          </a>
          <a href="#pricing" className="hover:text-slate-900">
            Pricing
          </a>
          <a href="#contact" className="hover:text-slate-900">
            Contact
          </a>
          <Button onClick={() => setShowStartPlan(true)}>Book a Visit</Button>
        </nav>
      </header>

      {/* HERO - Full-width banner with illustration on the right */}
      <section className="w-full bg-[#E5F0FB] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: Copy & CTA */}
          <div className="max-w-3xl md:flex-1">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Trusted Home Maintenance & Elderly Wellbeing Solutions
            </h2>

            <p className="mt-6 text-lg md:text-xl text-slate-700">
              Homevoi manages your property and cares for your loved ones with local teams,
              scheduled visits, and real-time updates — giving you peace of mind from anywhere
              in the world.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="px-8 py-4 text-base" onClick={() => setShowStartPlan(true)}>
                Book a Visit
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
                <div>
                  <div className="font-semibold text-slate-900">Local Care Teams</div>
                  <div className="text-slate-600">Vetted & trained personnel</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
                <div>
                  <div className="font-semibold text-slate-900">Weekly Reports</div>
                  <div className="text-slate-600">Photos, receipts, and updates</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
                <div>
                  <div className="font-semibold text-slate-900">Property Management</div>
                  <div className="text-slate-600">Maintenance, rent, & checks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Family / home-style illustration */}
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
        <h3 className="text-2xl font-bold">Services</h3>
        <p className="text-slate-600 mt-2">A modular service suite — choose what you need.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Elderly Wellbeing",
              text: "Companion visits, medication reminders, tele-consult setup.",
            },
            {
              title: "Full Property Care",
              text: "Regular inspections, maintenance coordination, vendor management.",
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
                      setActiveService(s.title === "Elderly Wellbeing" ? "elderly" : "property")
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
        <h3 className="text-2xl font-bold">How it works</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="text-3xl font-bold">1</div>
            <h4 className="mt-3 font-semibold">Sign up & choose a plan</h4>
            <p className="mt-2 text-slate-600">
              Tell us about the property and care needs — pick a subscription.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="text-3xl font-bold">2</div>
            <h4 className="mt-3 font-semibold">Local team assignment</h4>
            <p className="mt-2 text-slate-600">
              We assign vetted personnel and share the team details with you.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="text-3xl font-bold">3</div>
            <h4 className="mt-3 font-semibold">Regular updates & support</h4>
            <p className="mt-2 text-slate-600">
              Photos, receipts, live calls, and 24/7 escalation for emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Plans & Pricing</h3>
        <p className="text-slate-600 mt-2">Simple, transparent pricing — scale up as needed.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border-2 border-indigo-200 rounded-2xl text-center bg-white shadow-lg">
            <div className="text-sm text-slate-500">Starter</div>
            <div className="mt-2 text-3xl font-extrabold">₹4,999 / mo</div>
            <p className="text-slate-600 mt-2">
              Weekly home checks, monthly report, emergency response.
            </p>
          </div>

          <div className="p-6 border-2 border-indigo-200 rounded-2xl text-center bg-white shadow-lg">
            <div className="text-sm text-slate-500">Essentials</div>
            <div className="mt-2 text-3xl font-extrabold">₹9,999 / mo</div>
            <p className="text-slate-600 mt-2">
              Fortnightly checks, care visits, maintenance coordination.
            </p>
          </div>

          <div className="p-6 border-2 border-indigo-200 rounded-2xl text-center bg-white shadow-lg">
            <div className="text-sm text-slate-500">Premium</div>
            <div className="mt-2 text-3xl font-extrabold">Custom</div>
            <p className="text-slate-600 mt-2">
              Dedicated manager, tailored support, ad-hoc vendor handling.
            </p>
          </div>
        </div>
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
              Questions about plans, partnerships, or a custom property program? Drop us a
              message.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <div className="text-sm font-semibold">Email</div>
                <div className="text-slate-600">guardian@homevoi.in</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Phone (India)</div>
                <div className="text-slate-600">+91 81234 56789</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Operating Hours</div>
                <div className="text-slate-600">Mon–Sat, 9:00 AM — 6:00 PM IST</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Address</div>
                <div className="text-slate-600">Homevoi Services Pvt Ltd, R2, Centerspace,
XIII/284 A, Annankunnu Road, Nagampadom, Kottayam, PIN:686001</div>
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
                  placeholder="Tell us about your needs"
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

      {/* MODALS */}
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
                    ? "Companion visits, medication reminders, tele-consult setup, and personalised support."
                    : "Inspections, maintenance coordination, vendor management, and rent-ready services."}
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
                    <h4 className="font-semibold">What we do</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>Regular companion visits and check-ins.</li>
                      <li>Medication reminders and basic health monitoring.</li>
                      <li>Errands, groceries, and bill collection.</li>
                      <li>Tele-consult setup and healthcare coordination.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Why families trust us</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>Vetted caregivers trained in compassionate care.</li>
                      <li>Weekly photo & activity reports.</li>
                      <li>24/7 escalation support.</li>
                      <li>Transparent billing & receipts.</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h4 className="font-semibold">What we do</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>Scheduled inspections & condition reports.</li>
                      <li>Repairs and vendor coordination.</li>
                      <li>Tenant coordination & rent support.</li>
                      <li>Preventive maintenance & security checks.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Why owners trust us</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>Experienced property managers.</li>
                      <li>Transparency with invoicing.</li>
                      <li>Fast tenant issue resolution.</li>
                      <li>Walkthrough photos & logs.</li>
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
              Tell us who we're helping and how to contact you — we'll reach out to complete
              the details.
            </p>
            <div className="mt-4 grid gap-3">
              <Input
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
              <Input
                placeholder="Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
              <Input
                placeholder="Phone"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              />
              <select
                className="border rounded px-3 py-2"
                value={formState.service}
                onChange={(e) => setFormState({ ...formState, service: e.target.value })}
              >
                <option value="">Select service</option>
                <option value="elderly">Elderly Wellbeing</option>
                <option value="property">Full Property Care</option>
              </select>
              <div className="flex justify-end gap-3 mt-4">
                <Button type="submit">Submit</Button>
                <Button
                  variant="ghost"
                  type="button"
                  onClick={() => setShowStartPlan(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}

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
