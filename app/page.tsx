'use client';
import React from 'react';

interface ServiceCardProps {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc, icon }) => (
  <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm">
    <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center mb-4">
      {icon || (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M7 10l5 5 5-5" />
        </svg>
      )}
    </div>
    <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{desc}</p>
  </div>
);

interface TestimonialProps {
  name: string;
  role: string;
  text: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, text }) => (
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

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
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
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Homevoi — Trusted property & elderly care for NRIs in Kerala</h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">We look after your home and ageing parents with local, verified caretakers and tech-enabled check-ins — so you can have peace of mind from anywhere in the world.</p>

          <div className="mt-8 flex gap-4 items-center">
            <a href="#contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium">Get started — Book a free consult</a>
            <a href="#services" className="inline-block text-indigo-600 px-4 py-2 rounded-lg border border-indigo-100">See services</a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <div className="w-full h-72 md:h-96 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">Hero image / property carousel (replace)</div>
          </div>
        </div>
      </section>

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

      <section id="pricing" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Simple pricing — no hidden fees</h3>
          <p className="mt-2 text-slate-600">Choose a plan that fits your property and care needs.</p>
        </div>
      </section>

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
