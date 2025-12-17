import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Social Sync Hub - Automate your Growth',
  description: 'The ultimate tool to sync your content across platforms securely.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-900 text-slate-50 flex flex-col min-h-screen`}>
        <main className="flex-1">
          {children}
        </main>
        
        <footer className="border-t border-slate-800 bg-slate-950 py-8 px-4 mt-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-4">Social Sync Hub</h3>
                <p className="text-slate-400 text-sm">
                  Automate your growth and sync your content across platforms securely.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-slate-100 mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy" className="text-slate-400 hover:text-slate-50 text-sm transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-slate-400 hover:text-slate-50 text-sm transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-100 mb-4">Contact</h4>
                <a 
                  href="mailto:xxbeatlexx.bc@gmail.com" 
                  className="text-slate-400 hover:text-slate-50 text-sm transition-colors"
                >
                  xxbeatlexx.bc@gmail.com
                </a>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-500 text-sm text-center">
                © {currentYear} Social Sync Hub. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
