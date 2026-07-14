import { Check } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Eyebrow } from "@/components/site/eyebrow";
import { PlaceholderPhoto } from "@/components/site/placeholder-photo";
import Image from "next/image";

const FEATURES = [
    {
        title: "Solução à medida",
        description: "Personalizamos impressão, dimensão e estrutura de cada embalagem.",
    },
    {
        title: "Proteção e transporte",
        description: "Vários graus de flexibilidade e resistência, do micro ao canelado duplo.",
    },
    {
        title: "Compromisso ambiental",
        description: "Um aliado contra a devastação florestal, com excelente índice de recuperação.",
    },
];

export function About() {
    return (
        <section id="sobre" className="pt-5 pb-25">
            <div className="mx-auto max-w-[1200px] px-7">
                <div className="grid items-center gap-14.5 lg:grid-cols-[.92fr_1.08fr]">
                    <Reveal className="relative">
                        <Image
                            src="/hero-about-photo.webp"
                            alt="[ foto — produção de cartão / instalações ]"
                            width={600}
                            height={600}
                            className="rounded-[22px] object-cover object-top border border-line shadow-[0_40px_80px_-46px_rgba(14,44,95,.45)]"
                        />
                    </Reveal>
                    <Reveal delay={1}>
                        <Eyebrow>Quem somos</Eyebrow>
                        <h2 className="mt-4 font-heading text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
                            Especialistas em cartão canelado
                        </h2>
                        <p className="mt-4.5 max-w-[58ch] text-[19px] leading-[1.6] text-ink-2">
                            Produzimos embalagens que são mesmo a cara do seu negócio — com as suas medidas e a sua impressão. Do desenho estrutural à
                            produção, acompanhamos cada projeto de perto.
                        </p>
                        <div className="mt-7.5 grid gap-4.5">
                            {FEATURES.map((f) => (
                                <div key={f.title} className="flex items-start gap-3.75">
                                    <span className="mt-0.5 flex size-7.5 shrink-0 items-center justify-center rounded-[9px] bg-kraft-light text-kraft-dark">
                                        <Check className="size-4.25" strokeWidth={2.4} />
                                    </span>
                                    <div>
                                        <b className="font-heading text-[16.5px] font-bold">{f.title}</b>
                                        <p className="mt-0.75 text-[15.5px] leading-[1.5] text-ink-2">{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
