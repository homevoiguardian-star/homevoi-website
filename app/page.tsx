/*
Homevoi - Next.js Homepage (App Router)
Place this file at:  /app/page.jsx

Assumptions & quick setup:
1) You created a Next.js app with the App Router and Tailwind enabled.
   (e.g. `npx create-next-app@latest --experimental-app --tailwind homevoi-website`)
2) This file uses Tailwind classes. Tailwind must be configured (default setup from the starter works).
3) Optional libraries you can install for icons/components:
   - lucide-react for icons: `npm i lucide-react`
   - shadcn/ui components (optional)

How to use:
- Replace the default /app/page.jsx with this file's contents.
- Start dev server: `npm run dev` and open http://localhost:3000

What this file contains:
- A complete, responsive homepage for Homevoi (hero, services, features, pricing, testimonials, contact CTA, footer)
- Tailwind-first styling
- Clear places marked with TODO to swap real copy, images, links
*/

'use client';

import React from 'react';
// Optional icon imports (install lucide-react to use)
// import { Phone, MapPin, Home, Heart } from 'lucide-react';

const ServiceCard = ({ title, desc, icon }) => (
  <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm">
    <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center mb-4">
      {icon || <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M7 10l5 5 5-5" /></svg>}
    </div>
    <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{desc}</p>
  </div>
);

const Testimonial = ({ name, role, text }) => (
  <div className="bg-white/90 border border-gray-100 p-5 rounded-xl shadow-sm">
    <p className="text-slate-700">“{text}”</p>
    <div className="mt-4 flex items-center">
      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">{name[0]}</div>
      <div className="ml-3">
        <div className="text-sm font-medium text-slate-800">{name}</div>
        <div className="text-xs text-slate-500">{role}</div>
      </div>
    </div>
  </div>
);

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 backdrop-blur-sm bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">HV</div>
            <div>
              <div className="font-semibold">Homevoi</div>
              <div className="text-xs text-slate-500 -mt-0.5">Trusted presence back home</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#how" className="hover:text-indigo-600">How it works</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#contact" className="text-white bg-indigo-600 px-4 py-2 rounded-lg">Get Started</a>
          </nav>

          <div className="md:hidden">
            <button className="p-2 rounded-md bg-slate-100">Menu</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Homevoi — Trusted property & elderly care for NRIs in Kerala</h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">We look after your home and ageing parents with local, verified caretakers and tech-enabled check-ins — so you can have peace of mind from anywhere in the world.</p>

          <div className="mt-8 flex gap-4 items-center">
            <a href="#contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium">Get started — Book a free consult</a>
            <a href="#services" className="inline-block text-indigo-600 px-4 py-2 rounded-lg border border-indigo-100">See services</a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <div className="text-indigo-600 font-semibold">24/7</div>
              <div>Local team & emergency support</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-indigo-600 font-semibold">Verified</div>
              <div>Background-checked caretakers</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            {/* Placeholder image area - replace with real image or Next/Image */}
            <div className="w-full h-72 md:h-96 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">Hero image / property carousel (replace)</div>
          </div>

          <div className="absolute -bottom-6 left-6 p-4 bg-white rounded-2xl border border-gray-100 shadow-lg w-64">
            <div className="text-xs text-slate-500">Recent check-in</div>
            <div className="text-sm font-medium">Villa in Alappuzha — Weekly care</div>
            <div className="text-xs text-slate-400 mt-2">Caretaker: Sreedevi · Last visit: 2 hours ago</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <p className="mt-2 text-slate-600">Comprehensive care packages designed for NRIs — flexible subscriptions, verified local teams.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard title="Property Management" desc="Regular inspections, bill payments, vendor management and repair coordination." />
          <ServiceCard title="Elderly Wellbeing" desc="Daily check-ins, medicine reminders, doctor appointments and companionship programs." />
          <ServiceCard title="Emergency Support" desc="Rapid on-ground response, 24/7 helpline and escalation for urgent situations." />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-semibold">How Homevoi Works</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <div className="text-lg font-semibold">1. Choose a plan</div>
              <p className="mt-2 text-sm text-slate-600">Pick the subscription that matches your property & family needs.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <div className="text-lg font-semibold">2. We assign a local guardian</div>
              <p className="mt-2 text-sm text-slate-600">A verified caretaker and supervisor are assigned and introduced to you.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <div className="text-lg font-semibold">3. Tech-enabled updates</div>
              <p className="mt-2 text-sm text-slate-600">Regular reports, photos, and a live dashboard so you always know what's happening.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Simple pricing — no hidden fees</h3>
          <p className="mt-2 text-slate-600">Choose a plan that fits your property and care needs. We also offer custom enterprise plans for larger properties.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="text-sm text-slate-500">Starter</div>
            <div className="text-3xl font-bold mt-2">₹4,999<span className="text-sm font-medium">/mo</span></div>
            <p className="mt-4 text-sm text-slate-600">Weekly inspections, monthly reports, basic vendor coordination.</p>
            <a href="#contact" className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg">Choose</a>
          </div>

          <div className="p-6 rounded-2xl border-2 border-indigo-600 bg-white shadow-lg">
            <div className="text-sm text-slate-500">Recommended</div>
            <div className="text-3xl font-bold mt-2">₹9,999<span className="text-sm font-medium">/mo</span></div>
            <p className="mt-4 text-sm text-slate-600">Bi-weekly visits, medicine reminders, bill payments, periodic housekeeping.</p>
            <a href="#contact" className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg">Choose</a>
          </div>

          <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="text-sm text-slate-500">Premium</div>
            <div className="text-3xl font-bold mt-2">₹19,999<span className="text-sm font-medium">/mo</span></div>
            <p className="mt-4 text-sm text-slate-600">Dedicated caretaker, daily check-ins, priority emergency response and healthcare coordination.</p>
            <a href="#contact" className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg">Choose</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold">What NRIs say about Homevoi</h3>
            <p className="text-slate-600 mt-2">Trusted by families across Kerala and the Gulf.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Testimonial name="Asha Menon" role="NRI — UAE" text="Homevoi gave me real peace of mind. Their weekly reports and quick response helped when our house needed urgent repairs." />
            <Testimonial name="Ravi K" role="NRI — UK" text="The caretakers are caring and punctual. We love the dashboard updates — it's like being there." />
            <Testimonial name="Leena P" role="NRI — Canada" text="Excellent service and very responsive local team. Recommended for anyone living abroad." />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm md:flex md:items-center md:justify-between">
          <div>
            <h4 className="text-xl font-semibold">Ready to protect your home & loved ones?</h4>
            <p className="text-slate-600 mt-2">Book a free consultation and we'll recommend the perfect plan for your property and family.</p>
          </div>

          <div className="mt-6 md:mt-0">
            <a href="mailto:hello@homevoi.com" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg">Book a free consult</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-semibold">Homevoi</div>
            <div className="text-sm text-slate-500 mt-1">Your trusted presence back home</div>
          </div>

          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Homevoi — All rights reserved</div>

          <div className="flex gap-4">
            <a className="text-sm text-slate-500">Privacy</a>
            <a className="text-sm text-slate-500">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
