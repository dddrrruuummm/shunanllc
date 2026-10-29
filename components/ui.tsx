import Link from "next/link";
export function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" /></svg>;
}
export function Mark() { return <svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="3.8"><path d="M12 49V30a20 20 0 0 1 40 0v19"/><path d="M23 49V31a9 9 0 0 1 18 0v18"/><path d="M12 49h11m18 0h11"/></g><path d="m32 32 4 7-4 7-4-7z" fill="currentColor"/></svg>; }
export function TextLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) { return <Link className={`text-link${light ? " on-dark" : ""}`} href={href}>{children}<Arrow /></Link>; }
export function ButtonLink({ href, children, pale = false }: { href: string; children: React.ReactNode; pale?: boolean }) { return <Link href={href} className={`button${pale ? " pale" : ""}`}>{children}<Arrow /></Link>; }
export function PageIntro({ title, text, children }: { title: string; text: string; children?: React.ReactNode }) { return <section className="page-intro wrap"><h1>{title}</h1><div><p className="lead">{text}</p>{children}</div></section>; }
export function ContactBand() { return <section className="contact-band"><div className="wrap"><h2>Your occasion.<br/>Our attention.</h2><div><p>Tell us the impression you want to make. Let’s consider every vehicle, every guest and every arrival.</p><ButtonLink href="/contact/">Request a private proposal</ButtonLink></div></div></section>; }
