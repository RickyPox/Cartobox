import Image from "next/image";
import Link from "next/link";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z" />
        </svg>
    );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" />
        </svg>
    );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
    );
}

const NAV_LINKS = [
    { href: "#top", label: "Início" },
    { href: "#sobre", label: "Quem somos" },
    { href: "#produtos", label: "Produtos" },
    { href: "#tipos", label: "Tipos de cartão" },
    { href: "#contacto", label: "Contacto" },
];

const SOCIALS = [
    { href: "https://www.linkedin.com/company/cartobox-lda/", label: "LinkedIn", icon: LinkedinIcon },
    { href: "https://www.facebook.com/profile.php?id=100092847426863", label: "Facebook", icon: FacebookIcon },
    { href: "https://www.instagram.com/cartobox.lda/", label: "Instagram", icon: InstagramIcon },
];

export function Footer() {
    return (
        <footer className="bg-ink py-18.5 pt-18.5 pb-8 text-[#c9c4b9]">
            <div className="mx-auto max-w-[1200px] px-7">
                <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
                    <div>
                        <Link href="#top" className="mb-4 flex">
                            <Image src="/logo_white.svg" alt="Cartobox" width={200} height={200} />
                        </Link>
                        <p className="max-w-[34ch] text-[15.5px] leading-[1.6] text-[#9a958b]">Fazemos caixas que são mesmo a cara da sua empresa.</p>
                        <div className="mt-5.5 flex gap-2.5">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex size-10.5 items-center justify-center rounded-[11px] border border-white/15 text-[#c9c4b9] transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
                                >
                                    <s.icon className="size-4.75" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4.5 font-mono text-xs font-bold tracking-[.13em] text-[#8f8a80] uppercase">Navegação</h4>
                        <ul className="grid gap-2.75 text-[15px]">
                            {NAV_LINKS.map((l) => (
                                <li key={l.href}>
                                    <a href={l.href} className="transition-colors hover:text-white">
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4.5 font-mono text-xs font-bold tracking-[.13em] text-[#8f8a80] uppercase">Contactos</h4>
                        <ul className="grid gap-2.75 text-[15px]">
                            <li>
                                <a href="tel:+351244545380" className="transition-colors hover:text-white">
                                    244 545 380
                                </a>
                            </li>
                            <li className="text-[13.5px] text-[#8f8a80]">(chamada fixa nacional)</li>
                            <li>
                                <a href="tel:+351960364411" className="transition-colors hover:text-white">
                                    960 364 411
                                </a>
                            </li>
                            <li>
                                <a href="mailto:cartobox@cartobox.pt" className="transition-colors hover:text-white">
                                    cartobox@cartobox.pt
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4.5 font-mono text-xs font-bold tracking-[.13em] text-[#8f8a80] uppercase">Morada</h4>
                        <ul className="grid gap-2.75 text-[15px]">
                            <li>Rua da Forcada</li>
                            <li>S/N, Calços</li>
                            <li>2445-712 Martingança</li>
                            <li>
                                <a href="https://www.livroreclamacoes.pt/" className="text-[#8f8a80] transition-colors hover:text-white">
                                    Livro de reclamações
                                </a>
                            </li>
                        </ul>
                        <Link
                            href="https://drive.google.com/file/d/1m7jOMCcwv34XX-7DGeZ5B2gnu1Tm55kX/view?usp=sharing"
                            target="_blank"
                            className="mt-5.5 flex text-[#8f8a80] transition-colors hover:text-white"
                        >
                            Ficha de projeto — Apoio à Produção Nacional · Portugal 2020
                        </Link>
                    </div>
                </div>

                <div className="mt-13 flex flex-wrap items-center justify-between gap-3.5 border-t border-white/10 pt-6 text-[13.5px] text-[#8f8a80]">
                    <span>© 2026 Cartobox, Lda. Todos os direitos reservados.</span>
                    <span className="flex flex-wrap gap-5.5">
                        <a href="/termos-e-condicoes" className="hover:text-white">
                            Termos e condições
                        </a>
                        <a href="/politica-de-privacidade" className="hover:text-white">
                            Política de privacidade
                        </a>
                        <a href="/politica-de-cookies" className="hover:text-white">
                            Política de cookies
                        </a>
                    </span>
                </div>
                <Image src="/footer-img.webp" alt="Confinanciado pelo Portugal 2020" width={3500} height={500} className="mt-6 " />
            </div>
        </footer>
    );
}
