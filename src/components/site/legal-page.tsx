import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";

export interface LegalSection {
    heading: string;
    paragraphs: string[];
    list?: string[];
}

interface LegalPageProps {
    eyebrow: string;
    title: string;
    updated: string;
    sections: LegalSection[];
}

export function LegalPage({ eyebrow, title, updated, sections }: LegalPageProps) {
    return (
        <>
            <Navbar />
            <main>
                <section className="pt-[150px] pb-24">
                    <div className="mx-auto max-w-[760px] px-7">
                        <Reveal>
                            <Eyebrow>{eyebrow}</Eyebrow>
                            <h1 className="mt-4 font-heading text-[clamp(32px,4.6vw,50px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
                                {title}
                            </h1>
                            <p className="mt-3.5 font-mono text-[12.5px] tracking-[.08em] text-ink-2 uppercase">
                                Última atualização: {updated}
                            </p>
                            <div className="mt-10 grid gap-9">
                                {sections.map((s) => (
                                    <div key={s.heading}>
                                        <h2 className="font-heading text-[20px] font-bold text-ink">{s.heading}</h2>
                                        <div className="mt-2.75 grid gap-3.5">
                                            {s.paragraphs.map((p, i) => (
                                                <p key={i} className="text-[16.5px] leading-[1.75] text-ink-2">
                                                    {p}
                                                </p>
                                            ))}
                                            {s.list && (
                                                <ul className="grid list-disc gap-2 pl-5 text-[16.5px] leading-[1.7] text-ink-2">
                                                    {s.list.map((li, i) => (
                                                        <li key={i}>{li}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
