import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href="https://wa.me/201016966999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group fixed bottom-6 left-6 z-50 flex items-center gap-2"
      >
        <span className="pointer-events-none hidden rounded-full bg-[#25D366] px-3 py-1.5 text-sm font-bold text-white shadow-md group-hover:block sm:block">
          تواصل معنا
        </span>
        <span className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60" />
          <MessageCircle className="relative h-8 w-8" />
        </span>
      </a>
    </div>
  );
}