import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/house.png" alt="Logo" className="h-8 w-8 rounded-full" />
                    <span className="font-semibold text-slate-900">SG General Insurance</span>
                </Link>
                <nav className="ml-auto flex items-center gap-6">
                    <NavLink to="/" className="text-slate-700 hover:text-slate-900">Home</NavLink>
                    <a href="#plans" className="text-slate-700 hover:text-slate-900">Plans</a>
                    <a href="#why" className="text-slate-700 hover:text-slate-900">Why Us</a>
                    <a href="#contact" className="inline-flex items-center rounded-full bg-brand-500 px-4 py-2 text-white hover:bg-brand-600 transition">
                        Get Quote
                    </a>
                </nav>
            </div>
        </header>
    );
}
