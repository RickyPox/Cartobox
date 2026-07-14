"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Eyebrow } from "@/components/site/eyebrow";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        id: 1,
        question: "Qual é a diferença entre cartão simples e duplo?",
        answer: "O cartão canelado simples é ideal para produtos leves e embalagens padrão, oferecendo boa proteção a um custo eficiente. O cartão duplo fornece resistência superior para cargas pesadas e transporte de longa distância, com maior durabilidade estrutural.",
    },
    {
        id: 2,
        question: "Quanto tempo leva para entregar uma encomenda?",
        answer: "Os prazos dependem da complexidade do projeto e volume. Projetos simples podem ser entregues em 5 a 7 dias úteis. Volumes maiores ou designs complexos podem exigir mais tempo. Discutiremos o cronograma específico durante a cotação.",
    },
    {
        id: 3,
        question: "Posso personalizar completamente minha embalagem?",
        answer: "Sim. Oferecemos personalização total em dimensões, impressão, cores e acabamentos. A nossa equipa trabalha com você desde o design até a produção final para garantir que a embalagem reflita sua marca.",
    },
    {
        id: 4,
        question: "Vocês usam materiais sustentáveis?",
        answer: "Todos os nossos cartões são 100% recicláveis e produzidos com responsabilidade ambiental. Utilizamos processos que minimizam desperdício e priorizamos fornecedores com práticas sustentáveis.",
    },
    {
        id: 5,
        question: "Qual é o volume mínimo para um pedido?",
        answer: "Trabalhamos com projetos de qualquer tamanho, desde pequenas quantidades até grandes volumes. Não há um mínimo obrigatório. Contacte-nos para discutir as opções mais adequadas ao seu negócio.",
    },
] as const;

export function Faq() {
    const [openId, setOpenId] = useState<number | null>(FAQS[0].id);

    return (
        <section id="faq" className="py-25">
            <div className="mx-auto max-w-[840px] px-7">
                <Reveal className="mb-11 text-center">
                    <Eyebrow className="justify-center">Perguntas frequentes</Eyebrow>
                    <h2 className="mt-4 font-heading text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.05] tracking-[-0.025em] text-ink">
                        Ainda tem dúvidas?
                    </h2>
                </Reveal>

                <Reveal className="flex flex-col gap-3.5">
                    {FAQS.map((f) => {
                        const isOpen = openId === f.id;
                        return (
                            <div
                                key={f.id}
                                className={cn(
                                    "overflow-hidden rounded-[16px] border border-line bg-surface transition-colors duration-300 ",
                                    isOpen && "border-kraft",
                                )}
                            >
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    onClick={() => setOpenId(isOpen ? null : f.id)}
                                    className="flex w-full items-center justify-between gap-4 px-5.5 py-5 text-left cursor-pointer"
                                >
                                    <span className="font-heading text-[17px] font-bold tracking-[-0.01em] text-ink ">{f.question}</span>
                                    <ChevronDown
                                        className={cn("size-5 shrink-0 text-kraft-dark transition-transform duration-300", isOpen && "rotate-180")}
                                    />
                                </button>
                                <div
                                    className={cn(
                                        "grid transition-[grid-template-rows] duration-300 ease-out",
                                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5.5 pb-5 text-base leading-[1.55] text-ink-2">{f.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Reveal>
            </div>
        </section>
    );
}
