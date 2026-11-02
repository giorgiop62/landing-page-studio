import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Building2, FileText, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tamburrini — Amministrazione e gestione condomini a Napoli" },
      { name: "description", content: "Studio Tamburrini: amministrazione e gestione condomini. Vico Acitillo 160, 80127 Napoli. Tel. +39 351 797 36 57." },
      { property: "og:title", content: "Tamburrini — Amministrazione e gestione condomini" },
      { property: "og:description", content: "Amministrazione e gestione condomini a Napoli. Studio in Vico Acitillo 160." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+39 351 797 36 57";
const PHONE_HREF = "tel:+393517973657";
const EMAIL = "amministrazione@condominitamburrini.it";

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-dashed border-primary/50 bg-secondary px-2 py-0.5 text-sm text-secondary-foreground">
      {children}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">
        Vai al contenuto
      </a>

      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#" aria-label="Tamburrini, home" className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}android-chrome-192x192.png`} alt="" className="h-10 w-10 rounded-md object-contain" />
            <span className="font-display text-2xl tracking-wide">TAMBURRINI</span>
          </a>
          <nav aria-label="Principale" className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#servizi" className="hover:text-primary">Servizi</a>
            <a href="#condomini" className="hover:text-primary">Condomini</a>
            <a href="#studio" className="hover:text-primary">Lo studio</a>
            <a href="#contatti" className="hover:text-primary">Contatti</a>
          </nav>
          <a href={PHONE_HREF} className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Chiama
          </a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-24">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-primary">Napoli · Studio professionale</p>
          <h1 className="font-display text-5xl uppercase leading-[0.95] sm:text-7xl md:text-8xl">
            Amministrazione<br />
            <span className="text-primary">e gestione</span><br />
            condomini
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Un riferimento unico per il tuo condominio, con studio in Vico Acitillo 160 a Napoli.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90">
              <Phone className="h-4 w-4" aria-hidden /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-3 font-medium transition hover:bg-foreground hover:text-background">
              <Mail className="h-4 w-4" aria-hidden /> Scrivi una email
            </a>
          </div>
        </section>

        {/* Servizi */}
        <section id="servizi" className="border-y border-border bg-card py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-4xl uppercase md:text-5xl">Servizi</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { icon: Building2, t: "Amministrazione condominiale" },
                { icon: FileText, t: "Gestione condomini" },
                { icon: ShieldCheck, t: "Servizi da commercialista" },
              ].map(({ icon: Icon, t }) => (
                <article key={t} className="rounded-[var(--radius)] border border-border bg-background p-6">
                  <Icon className="h-8 w-8 text-primary" aria-hidden />
                  <h3 className="mt-4 text-xl font-bold">{t}</h3>
                  <p className="mt-3"><Placeholder>[Descrizione del servizio da inserire]</Placeholder></p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Condomini */}
        <section id="condomini" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-4xl uppercase md:text-5xl">Condomini amministrati</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[var(--radius)] border-4 border-primary bg-card p-10 text-center">
              <p className="font-display text-3xl uppercase">Condominio</p>
              <p className="font-display text-4xl uppercase text-primary md:text-5xl">Via Kerbaker, 55</p>
            </div>
            <div className="flex items-center justify-center rounded-[var(--radius)] border-2 border-dashed border-border p-10 text-center text-muted-foreground">
              [Altri condomini da inserire]
            </div>
          </div>
        </section>

        {/* Studio */}
        <section id="studio" className="bg-ink py-20 text-ink-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl uppercase md:text-5xl">Lo studio</h2>
              <p className="mt-6 text-lg opacity-80">
                Titolare: <strong className="opacity-100">Antonio Tamburrini</strong>. Attività avviata il 1° luglio 2023.
              </p>
              <p className="mt-4"><span className="rounded-md border border-dashed border-primary px-2 py-0.5 text-sm">[Presentazione e storia dello studio da inserire]</span></p>
            </div>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["Partita IVA", "10325751211"],
                ["Forma", "Ditta individuale"],
                ["Inizio attività", "01/07/2023"],
                ["Sede", "Napoli (NA)"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-[var(--radius)] border border-ink-foreground/15 p-5">
                  <dt className="text-xs uppercase tracking-widest text-primary">{k}</dt>
                  <dd className="mt-2 text-xl font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contatti */}
        <section id="contatti" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-4xl uppercase md:text-5xl">Contatti</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <a href="https://maps.google.com/?q=Vico+Acitillo+160+80127+Napoli" target="_blank" rel="noreferrer" className="rounded-[var(--radius)] border border-border bg-card p-6 transition hover:border-primary">
              <MapPin className="h-6 w-6 text-primary" aria-hidden />
              <p className="mt-3 text-sm font-bold uppercase tracking-widest text-primary">Studio</p>
              <p className="mt-1 text-lg">Vico Acitillo, 160<br />80127 Napoli</p>
            </a>
            <a href={PHONE_HREF} className="rounded-[var(--radius)] border border-border bg-card p-6 transition hover:border-primary">
              <Phone className="h-6 w-6 text-primary" aria-hidden />
              <p className="mt-3 text-sm font-bold uppercase tracking-widest text-primary">Info</p>
              <p className="mt-1 text-lg">{PHONE}</p>
            </a>
            <a href={`mailto:${EMAIL}`} className="rounded-[var(--radius)] border border-border bg-card p-6 transition hover:border-primary">
              <Mail className="h-6 w-6 text-primary" aria-hidden />
              <p className="mt-3 text-sm font-bold uppercase tracking-widest text-primary">Email</p>
              <p className="mt-1 break-all text-lg">{EMAIL}</p>
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Orari di ricevimento: [da inserire]</p>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}android-chrome-192x192.png`} alt="" className="h-12 w-12 rounded-md object-contain" />
            <span className="font-display text-xl tracking-wide">TAMBURRINI</span>
          </div>
          <p className="text-sm text-muted-foreground">© Tamburrini Antonio · P.IVA 10325751211 · Vico Acitillo 160, 80127 Napoli</p>
        </div>
      </footer>
    </div>
  );
}
