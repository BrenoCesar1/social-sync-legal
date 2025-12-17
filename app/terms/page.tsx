import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-50 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Content */}
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-slate-50 mb-4">Terms of Service</h1>

          <div className="space-y-6 text-slate-300">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Social Sync Hub, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-50 mb-3">2. Description of Service</h2>
              <p>
                Social Sync Hub is an automation tool designed to help users upload their own content to TikTok. You are responsible for all content you post.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-50 mb-3">3. User Conduct</h2>
              <p>
                You agree not to use the service to post content that violates TikTok's Community Guidelines, including hate speech, violence, or illegal acts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-50 mb-3">4. Termination</h2>
              <p>
                We reserve the right to terminate access to the service without notice if these terms are violated.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
