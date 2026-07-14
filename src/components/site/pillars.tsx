import { Leaf, Rows3, Zap } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import Image from "next/image";

const PILLARS = [
    {
        icon: Zap,
        title: "Rápido",
        description: "Produção ágil e prazos que acompanham o ritmo do seu negócio, do protótipo à entrega.",
        img: "/pillars-rapidez.webp",
    },
    {
        icon: Leaf,
        title: "Sustentável",
        description: "Cartão de fontes naturais e renováveis, com um dos melhores índices de reciclagem entre os materiais de embalagem.",
        img: "/pillars-sustentavel.webp",
    },
    {
        icon: Rows3,
        title: "Personalizado",
        description: "Medidas, estrutura e impressão desenhadas à volta do seu produto — a caixa é a cara da sua marca.",
        img: "/pillars-personalizado.webp",
    },
] as const;

export function Pillars() {
    return (
        <section className="py-25">
            <div className="mx-auto max-w-[1200px] px-7">
                <div className="grid gap-5.5 md:grid-cols-3">
                    {PILLARS.map((p, i) => (
                        <Reveal key={p.title} delay={i as 0 | 1 | 2}>
                            <div className="group h-full rounded-[20px] border border-line bg-surface transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.25 hover:border-kraft hover:shadow-[0_30px_56px_-32px_rgba(14,44,95,.4)]">
                                <Image
                                    src={p.img}
                                    alt={p.title}
                                    width={400}
                                    height={100}
                                    className="mb-5 h-[200px] w-full object-cover rounded-t-[14px]"
                                />
                                <div className="px-5.5 pb-5.5">
                                    <div className="flex items-center gap-3.5">
                                        <span className="mb-4 flex size-8.5 items-center justify-center rounded-[10px] bg-brand text-white">
                                            <p.icon className="size-4.25" />
                                        </span>
                                        <h3 className="mb-2.25 font-heading text-[23px] font-bold tracking-[-0.01em]">{p.title}</h3>
                                    </div>
                                    <p className="text-base leading-[1.55] text-ink-2">{p.description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
