import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import InsuranceScene from "../components/InsuranceScene.jsx";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
            <Navbar />

            {/* HERO */}
            <section className="pt-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-xs font-medium ring-1 ring-brand-100">
                            Singapore • PDPA & MAS aligned
                        </span>
                        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight">
                            Protect what matters—home, health, and every journey.
                        </h1>
                        <p className="mt-4 text-slate-600">
                            Smart coverage designed for families in Singapore. Transparent pricing, fast claims, and real human support.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a href="#plans" className="inline-flex items-center rounded-full bg-brand-500 px-5 py-3 text-white hover:bg-brand-600 transition">
                                View Plans
                            </a>
                            <Link to="/insurance/owner/health" className="inline-flex items-center rounded-full px-5 py-3 ring-1 ring-slate-300 text-slate-800 hover:bg-slate-100 transition">
                                Get Quote
                            </Link>
                        </div>
                        {/* Trust row */}
                        <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
                            <span>✔ PDPA Compliant</span>
                            <span>✔ MAS Guidelines</span>
                            <span>✔ 24/7 Claims Portal</span>
                        </div>
                    </div>

                    {/* Interactive scene */}
                    <div className="flex justify-center">
                        <div className="rounded-xl2 bg-white shadow-card p-6">
                            <InsuranceScene />
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section id="why" className="mt-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold text-slate-900">Why choose us</h2>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { t: "Fast Claims", d: "Average approval in 48 hours with digital submissions." },
                            { t: "Transparent Pricing", d: "No hidden fees. Clear, upfront premiums." },
                            { t: "Tailored Coverage", d: "Plans built around Singapore family needs." },
                            { t: "Secure & Private", d: "Bank-grade encryption. PDPA compliant." },
                            { t: "24/7 Support", d: "Chat, WhatsApp, or call—anytime." },
                            { t: "Trusted Network", d: "Hospitals, clinics, and repair partners islandwide." },
                        ].map((f) => (
                            <div key={f.t} className="rounded-xl2 bg-white shadow-card p-5">
                                <div className="text-brand-600 font-semibold">{f.t}</div>
                                <div className="mt-2 text-sm text-slate-600">{f.d}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PLANS */}
            <section id="plans" className="mt-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold text-slate-900">Popular plans</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        {[
                            { name: "Home Essential", price: "from $12/mo", items: ["Fire & theft", "Water damage", "Contents cover"] },
                            { name: "Health Family", price: "from $45/mo", items: ["Hospitalisation", "Specialists", "Dental add-on"] },
                            { name: "Travel Smart", price: "from $5/trip", items: ["Medical overseas", "Delays & baggage", "Adventures add-on"] },
                        ].map((p) => (
                            <div key={p.name} className="rounded-xl2 bg-white shadow-card p-6 flex flex-col">
                                <div className="text-lg font-semibold text-slate-900">{p.name}</div>
                                <div className="mt-1 text-brand-600 text-sm">{p.price}</div>
                                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                                    {p.items.map((i) => <li key={i}>• {i}</li>)}
                                </ul>
                                <div className="mt-6">
                                    <a href="#contact" className="inline-flex items-center rounded-full bg-brand-500 px-4 py-2 text-white hover:bg-brand-600 transition">
                                        Get Quote
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="mt-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-xl2 bg-white shadow-card p-6 grid lg:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900">Speak to us</h3>
                            <p className="mt-2 text-sm text-slate-600">Get personalised advice for your family and budget.</p>
                            <div className="mt-4 text-sm text-slate-700">
                                <div>📞 +65 6123 4567</div>
                                <div>✉ support@sg-general.com</div>
                                <div>📍 1 Raffles Place, Singapore 048616</div>
                            </div>
                        </div>
                        <form className="grid gap-4">
                            <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Full name" />
                            <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Email" />
                            <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Phone" />
                            <textarea className="rounded-lg border border-slate-300 px-3 py-2" rows="3" placeholder="How can we help?" />
                            <button className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-white hover:bg-brand-600 transition">
                                Request Callback
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
