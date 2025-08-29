import { useParams, Link } from "react-router-dom";

export default function InsuranceDetail() {
    const { entity, type } = useParams();
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
                <Link to="/" className="text-brand-600 hover:underline">← Back</Link>
                <h1 className="mt-4 text-3xl font-semibold text-slate-900 capitalize">
                    {entity} — {type} Insurance
                </h1>
                <p className="mt-2 text-slate-600">
                    Render detailed content here (benefits, table of coverage, exclusions, FAQ, buy/quote CTA).
                </p>
                {/* Example details block */}
                <div className="mt-6 rounded-xl2 bg-white shadow-card p-6">
                    <h2 className="text-lg font-semibold text-slate-900">Key Benefits</h2>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        <li>• Comprehensive coverage suited for Singapore families</li>
                        <li>• Cashless network partners islandwide</li>
                        <li>• 24/7 claims support via portal/WhatsApp</li>
                    </ul>
                    <button className="mt-6 inline-flex items-center rounded-full bg-brand-500 px-5 py-3 text-white hover:bg-brand-600 transition">
                        Get a Quote
                    </button>
                </div>
            </div>
        </div>
    );
}
