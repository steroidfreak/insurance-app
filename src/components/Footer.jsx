export default function Footer() {
    return (
        <footer className="mt-20 border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3">
                <div>
                    <div className="font-semibold text-slate-900 mb-2">SG General Insurance</div>
                    <p className="text-sm text-slate-600">Licensed in Singapore. Coverage for home, travel, health, and more.</p>
                </div>
                <div>
                    <div className="font-semibold text-slate-900 mb-2">Contact</div>
                    <p className="text-sm text-slate-600">
                        1 Raffles Place, Singapore 048616<br />+65 6123 4567<br />support@sg-general.com
                    </p>
                </div>
                <div>
                    <div className="font-semibold text-slate-900 mb-2">Compliance</div>
                    <p className="text-sm text-slate-600">
                        PDPA compliant • MAS guidelines • Secure payments
                    </p>
                </div>
            </div>
            <div className="py-4 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} SG General Insurance. All rights reserved.
            </div>
        </footer>
    );
}
