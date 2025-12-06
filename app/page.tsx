"use client";
import React, { useState } from 'react';

// Homevoi single-file React component (Tailwind + shadcn/ui + lucide-react)
// Usage: drop this component into a Next.js / Vite React page as the default export.
// Notes: replace image placeholders and copy as needed. Uses Tailwind classes.

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle } from 'lucide-react';

export default function HomevoiLanding() {
  const [activeService, setActiveService] = useState<'elderly' | 'property' | null>(null);
  const [showStartPlan, setShowStartPlan] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '' });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); console.log('Start plan submitted', formState); setShowStartPlan(false); alert('Thanks — we\'ll get back to you soon.'); }
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
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#how" className="hover:text-slate-900">How it Works</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <Button>Get Started</Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Trusted home & elderly care in Kerala</h2>
          <p className="mt-4 text-lg text-slate-600">Homevoi manages your property and cares for your loved ones with local teams, tech-enabled updates, and subscription plans that give you peace of mind — from anywhere in the world.</p>

          <div className="mt-6 flex gap-4">
            <Button className="px-6 py-3" onClick={() => setShowStartPlan(true)}>Start a Plan</Button>
            <Button variant="ghost" className="px-6 py-3">Book a Visit</Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-indigo-600" />
              <div>
                <div className="font-semibold">Local Care Teams</div>
                <div className="text-slate-500">Vetted & trained personnel</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-indigo-600" />
              <div>
                <div className="font-semibold">Weekly Reports</div>
                <div className="text-slate-500">Photos, receipts, and updates</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-indigo-600" />
              <div>
                <div className="font-semibold">Property Management</div>
                <div className="text-slate-500">Maintenance, rent, & checks</div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-first md:order-last">
          {/* visual mockup card */}
          <Card className="shadow-xl">
            <CardContent>
              <div className="rounded-lg overflow-hidden bg-white">
                <img src="/images/hero-placeholder.jpg" alt="Homevoi preview" className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Anna's monthly check-in</h3>
                  <p className="text-sm text-slate-500 mt-2">Weekly photo updates, grocery receipts, and a short health note — sent to you.</p>
                  <div className="mt-4 flex gap-3">
                    <Button size="sm">View Report</Button>
                    <Button variant="ghost" size="sm">Message Team</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Services</h3>
        <p className="text-slate-600 mt-2">A modular service suite — choose what you need.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {title: 'Elderly Wellbeing', text: 'Companion visits, medication reminders, tele-consult setup.'},
            {title: 'Full Property Care', text: 'Regular inspections, maintenance coordination, vendor management.'},
          ].map((s) => (
            <Card key={s.title} className="p-4">
              <CardContent>
                <h4 className="text-lg font-semibold">{s.title}</h4>
                <p className="text-slate-600 mt-2">{s.text}</p>
                <div className="mt-4">
                  <Button size="sm" onClick={() => setActiveService(s.title === 'Elderly Wellbeing' ? 'elderly' : 'property')}>Learn More</Button>
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
            <p className="mt-2 text-slate-600">Tell us about the property and care needs — pick a subscription.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="text-3xl font-bold">2</div>
            <h4 className="mt-3 font-semibold">Local team assignment</h4>
            <p className="mt-2 text-slate-600">We assign vetted personnel and share the team details with you.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="text-3xl font-bold">3</div>
            <h4 className="mt-3 font-semibold">Regular updates & support</h4>
            <p className="mt-2 text-slate-600">Photos, receipts, live calls, and 24/7 escalation for emergencies.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Plans & Pricing</h3>
        <p className="text-slate-600 mt-2">Simple, transparent pricing — scale up as needed.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl text-center">
            <div className="text-sm text-slate-500">Starter</div>
            <div className="mt-2 text-3xl font-extrabold">₹4,999 / mo</div>
            <p className="text-slate-600 mt-2">Weekly home checks, monthly report, emergency response.</p>
            <div className="mt-4">
              <Button>Choose</Button>
            </div>
          </div>

          <div className="p-6 border-2 border-indigo-200 rounded-2xl text-center bg-white shadow-lg">
            <div className="text-sm text-slate-500">Essentials</div>
            <div className="mt-2 text-3xl font-extrabold">₹9,999 / mo</div>
            <p className="text-slate-600 mt-2">Fortnightly checks, care visits, maintenance coordination.</p>
            <div className="mt-4">
              <Button>Choose</Button>
            </div>
          </div>

          <div className="p-6 border rounded-2xl text-center">
            <div className="text-sm text-slate-500">Premium</div>
            <div className="mt-2 text-3xl font-extrabold">Custom</div>
            <p className="text-slate-600 mt-2">Dedicated manager, tailored support, ad-hoc vendor handling.</p>
            <div className="mt-4">
              <Button>Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-r from-slate-50 to-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="mt-2 text-slate-600">Questions about plans, partnerships, or a custom property program? Drop us a message.</p>

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
            </div>
          </div>

          <div>
            <form className="bg-white p-6 rounded-2xl shadow">
              <div className="grid gap-3">
                <Input placeholder="Your name" />
                <Input placeholder="Email" />
                <Input placeholder="Phone" />
                <Textarea placeholder="Tell us about your needs" rows={4} />
                <div className="mt-2 flex justify-end">
                  <Button>Send Message</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      
      {/* ELDERLY WELLBEING DETAIL MODAL */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setActiveService(null)} />
          <div className="relative max-w-3xl mx-4 bg-white rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold">{activeService === 'elderly' ? 'Elderly Wellbeing' : 'Full Property Care'}</h2>
                <p className="mt-2 text-slate-600">{activeService === 'elderly' ? 'Companion visits, medication reminders, tele-consult setup, and personalised support to keep your loved ones safe and connected.' : 'Regular property inspections, maintenance coordination, vendor management, and rent-ready services to keep your asset secure and revenue-generating.'}</p>
              </div>
              <div>
                <button className="text-slate-500 hover:text-slate-700" onClick={() => setActiveService(null)}>Close ✕</button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeService === 'elderly' ? (
                <>
                  <div>
                    <h4 className="font-semibold">What we do</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>Regular companion visits for conversation and daily check-ins.</li>
                      <li>Medication reminders and basic health monitoring.</li>
                      <li>Assist with errands, groceries, and bill collection.</li>
                      <li>Set up tele-consults and coordinate with local healthcare providers.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Why families trust us</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>Vetted local caregivers trained in compassionate assistance.</li>
                      <li>Weekly photo & activity reports sent to you.</li>
                      <li>Escalation support and 24/7 emergency contact.</li>
                      <li>Transparent billing and receipts for all services.</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h4 className="font-semibold">What we do</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>Scheduled property inspections and condition reports.</li>
                      <li>Coordinate repairs and manage trusted local vendors.</li>
                      <li>Tenant coordination, rent collection support, and lease readiness.</li>
                      <li>Secure the property and perform routine preventive maintenance.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Why owners trust us</h4>
                    <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                      <li>Experienced property managers with local vendor networks.</li>
                      <li>Transparent invoicing and repair receipts.</li>
                      <li>Faster turnaround for tenant issues and emergency repairs.</li>
                      <li>Periodic walkthrough photos and maintenance logs.</li>
                    </ul>
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button onClick={() => { setShowStartPlan(true); setActiveService(null); }}>Start a Plan</Button>
              <Button variant="ghost" onClick={() => setActiveService(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}

      {/* START PLAN MODAL */}
      {showStartPlan && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowStartPlan(false)} />
          <form onSubmit={handleSubmit} className="relative max-w-xl mx-4 bg-white rounded-2xl shadow-xl p-6 w-full">
            <h3 className="text-lg font-semibold">Start a Plan</h3>
            <p className="text-slate-600 mt-1">Tell us who we\'re helping and how to contact you — we\'ll reach out to complete the details.</p>
            <div className="mt-4 grid gap-3">
              <Input placeholder="Your name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
              <Input placeholder="Email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
              <Input placeholder="Phone" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
              <select className="border rounded px-3 py-2" value={formState.service} onChange={(e) => setFormState({ ...formState, service: e.target.value })}>
                <option value="">Select service</option>
                <option value="elderly">Elderly Wellbeing</option>
                <option value="property">Full Property Care</option>
              </select>
              <div className="flex justify-end gap-3 mt-4">
                <Button type="submit">Submit</Button>
                <Button variant="ghost" type="button" onClick={() => setShowStartPlan(false)}>Cancel</Button>
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
          <div className="text-sm">© {new Date().getFullYear()} Homevoi Services Pvt Ltd— All rights reserved</div>
        </div>
      </footer>
    </div>
  );
}
