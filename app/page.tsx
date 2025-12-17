import Link from 'next/link';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[90vh] px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur mb-8">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-slate-300">Automate your social media growth</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-6 leading-tight">
            Social Sync Hub
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed">
            The ultimate tool to sync your content across platforms securely.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-slate-50 font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              View Privacy Policy
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-slate-600 text-slate-50 font-semibold hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
            >
              Terms of Service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm text-slate-300">Secure & Private</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
              <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-sm text-slate-300">Lightning Fast</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
