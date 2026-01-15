/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import faq from "../data/faq.json";
import Button from "./Button";

export default function Faq() {
    const [openItems, setOpenItems] = useState<number[]>([]);
    const answerRefs = useRef<Array<HTMLDivElement | null>>([]);

    function handleToggle(index: number) {
        const el = answerRefs.current[index];
        if (!el) return;

        const isOpen = openItems.includes(index);

        if (isOpen) {
            setOpenItems((prev) => prev.filter((i) => i !== index));

            gsap.to(el, {
                height: 0,
                opacity: 0,
                duration: 0.35,
                ease: "power2.inOut",
            });
        } else {
            setOpenItems((prev) => [...prev, index]);
            gsap.to(el, {
                height: "auto",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            });
        }
    }

    return (
        <section className="flex justify-center" style={{ backgroundColor: "var(--off-white)" }}>
            <div className="container flex-column justify-center items-center gap-y-20">
                <div className="wrapper flex-column gap-y-6 justify-center items-center title-wrapper">
                    <h2>Perguntas</h2>
                    <p>Encontre respostas sobre nossos materiais, processos e serviços de personalização.</p>
                </div>

                <div className="faq-wrapper flex-column gap-y-4">
                    {faq.map((item, i) => {
                        const isOpen = openItems.includes(i);

                        return (
                            <div key={i} className="faq-accordion ">
                                <div
                                    className="question-wrapper flex-row justify-between py-5 px-6 gap-x-6 cursor-pointer"
                                    onClick={() => handleToggle(i)}
                                >
                                    <p className="font-bold!">{item.question}</p>

                                    <img
                                        className="faq-icon"
                                        src="/faq_icon.svg"
                                        alt="Icon Abrir/Fechar"
                                        style={{
                                            transform: isOpen ? "rotate(225deg)" : undefined,
                                            transition: "transform 0.3s ease",
                                        }}
                                    />
                                </div>

                                <div
                                    ref={(el) => {
                                        answerRefs.current[i] = el;
                                    }}
                                    className="answer-wrapper"
                                    style={{ paddingBottom: isOpen ? "24px" : "0px" }}
                                    data-open={isOpen}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="wrapper flex-column gap-y-6 justify-center items-center mt-30 title-wrapper">
                    <h2>Ainda tem dúvidas?</h2>
                    <p>Entre em contacto connosco para assistência personalizada.</p>
                    <Button text="Contacte-nos" link="/contactos" />
                </div>
            </div>
        </section>
    );
}
