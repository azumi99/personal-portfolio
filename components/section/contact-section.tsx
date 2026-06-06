import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="relative rounded-xl border p-10">
      <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
        <span className="text-sm font-medium text-on-primary">Contact</span>
      </div>
      <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-xl">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
        <p className="mx-auto max-w-lg text-balance text-on-surface-variant">
          Want to discuss a mobile app, dashboard, or automation project? Send me a direct message on{" "}
          <Link href={DATA.contact.social.WhatsApp.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
            WhatsApp
          </Link>{" "}
          or email me at{" "}
          <Link href={`mailto:${DATA.contact.email}`} className="text-primary underline underline-offset-4">
            {DATA.contact.email}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
