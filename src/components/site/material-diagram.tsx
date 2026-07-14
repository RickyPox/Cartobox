import { Reveal } from "@/components/site/reveal";
import { Eyebrow } from "@/components/site/eyebrow";

function buildFlutePath() {
    let d = "M20,85";
    let up = true;
    for (let x = 40; x <= 500; x += 20) {
        d += ` Q${x - 10},${up ? 52 : 118} ${x},85`;
        up = !up;
    }
    return d;
}

const LEGEND = [
    { color: "var(--kraft)", label: "Face exterior (liner)" },
    { color: "var(--brand-blue)", label: "Miolo · canelura" },
    { color: "var(--kraft-dark)", label: "Face interior (liner)" },
];

export function MaterialDiagram() {
    const fluteD = buildFlutePath();

    return (
        <section className="border-y border-line bg-surface py-25">
            <div className="mx-auto max-w-300 px-7">
                <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
                    <Reveal>
                        <Eyebrow>O material</Eyebrow>
                        <h2 className="mt-4 font-heading text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
                            O que precisa de saber sobre o cartão canelado
                        </h2>
                        <p className="mt-4.5 text-[17px] leading-[1.62] text-ink-2">
                            O cartão canelado resulta da junção de folhas de papel planas com folhas de papel ondulado — as caneluras, colocadas no
                            interior. Em cartão simples ou duplo, as várias combinações de papel dão origem a diferentes graus de flexibilidade e
                            resistência.
                        </p>
                        <p className="mt-4 text-[17px] leading-[1.62] text-ink-2">
                            É por isso o material de eleição quando o objetivo é proteger, transportar ou promover produtos. Feito a partir de fontes
                            naturais e renováveis, tem um dos melhores índices de recuperação e reciclagem de todos os materiais de embalagem.
                        </p>
                    </Reveal>
                    <Reveal
                        delay={1}
                        className="rounded-[22px] border border-line bg-surface p-7.5 pt-7.5 pb-6.5 shadow-[0_30px_60px_-40px_rgba(14,44,95,.35)]"
                    >
                        <svg viewBox="0 0 520 176" role="img" aria-label="Constituição do cartão canelado" className="block h-auto w-full">
                            <rect x="14" y="36" width="492" height="15" rx="4" fill="var(--kraft)" />
                            <path d={fluteD} fill="none" stroke="var(--brand-blue)" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="14" y="120" width="492" height="15" rx="4" fill="var(--kraft-dark)" />
                        </svg>
                        <div className="mt-4.5 flex flex-wrap gap-4 border-t border-line pt-4.5">
                            {LEGEND.map((l) => (
                                <span
                                    key={l.label}
                                    className="flex items-center gap-2 font-mono text-[11.5px] font-bold tracking-[.05em] text-ink-2 uppercase"
                                >
                                    <i className="inline-block size-3 rounded-[3px]" style={{ background: l.color }} />
                                    {l.label}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
