import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-slate-50 mb-4">Privacy Policy</h1>
          
          <div className="text-slate-400 text-sm mb-8">
            Last updated: December 16, 2025
          </div>

          <div className="space-y-6 text-slate-300">
            <div>
              <p>
                This Privacy Policy describes how Social Sync Hub Bot ("we", "us", or "our") handles your information when you use our automated video posting service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-50 mb-3">1. Information Collection</h2>
              <p>
                We do not collect personal data from users. We only access the content (videos) you explicitly provide for the purpose of uploading to TikTok via their API.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-50 mb-3">2. How We Use Information</h2>
              <p>
                The videos and metadata (titles, hashtags) are used solely to execute the "post to TikTok" command requested by the user. We do not store, share, or sell this data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-50 mb-3">3. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a
                  href="mailto:xxbeatlexx.bc@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  xxbeatlexx.bc@gmail.com
                </a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
