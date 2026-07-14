import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { Eyebrow } from "@/components/site/eyebrow";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section id="top" className="relative overflow-hidden pt-[130px] pb-17">
            <div className="mx-auto max-w-[1200px] px-7">
                <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr]">
                    <Reveal>
                        <Eyebrow>Caixas de cartão canelado à medida</Eyebrow>
                        <h1 className="mt-5 mb-[22px] font-heading text-[clamp(40px,6.1vw,74px)] font-black leading-[1.02] tracking-[-0.03em]">
                            Embalagens à medida do seu negócio
                        </h1>
                        <p className="max-w-[58ch] text-[19px] leading-[1.6] text-ink-2">
                            Na Cartobox respondemos às necessidades individuais de cada empresa, personalizando a impressão, a dimensão e a estrutura
                            de cada embalagem.
                        </p>
                        <div className="my-8 flex flex-wrap gap-3.5">
                            <a
                                href="#produtos"
                                className={cn(
                                    buttonVariants({ size: "lg" }),
                                    "group/cta gap-2.5 rounded-[13px]  text-base transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1.25 hover:shadow-[0_30px_56px_-32px_rgba(14,44,95,.4)] hover:bg-brand-dark",
                                )}
                            >
                                Encontre a embalagem perfeita
                                <ArrowRight className="size-4.5 transition-transform group-hover/cta:translate-x-1" />
                            </a>
                            <a
                                href="#contacto"
                                className={cn(
                                    buttonVariants({ variant: "outline", size: "lg" }),
                                    "rounded-[13px] border-line  text-base transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1.25 hover:border-kraft hover:bg-surface hover:shadow-[0_30px_56px_-32px_rgba(14,44,95,.4)]",
                                )}
                            >
                                Pedir orçamento
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                            {["Produção nacional", "100% reciclável", "Impressão personalizada"].map((t) => (
                                <span
                                    key={t}
                                    className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.75 py-2.25 text-[13.5px] font-medium text-ink-2"
                                >
                                    <span className="size-1.75 shrink-0 rounded-full bg-brand-green" />
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={1} className="relative h-full">
                        <div className="relative h-full">
                            <Image
                                src="/hero-photo.jpg"
                                alt="[ foto — produção de cartão / instalações ] "
                                width={600}
                                height={600}
                                className="h-full w-full object-cover rounded-[22px]"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
