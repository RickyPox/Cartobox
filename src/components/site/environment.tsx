import Image from "next/image";
import { Reveal } from "@/components/site/reveal";
import { Eyebrow } from "@/components/site/eyebrow";

// TODO: substituir "#" pelo link real de cada selo/certificação.
const BADGES = [
    {
        href: "https://drive.google.com/file/d/1By_tXPZn5Z8-zI0I6bV1RoWZAKjTgOes/view?pli=1",
        img: "/FSC.webp",
        title: "Certificação FSC®",
    },
    {
        href: "https://drive.google.com/file/d/1fkWGf6nxLpBxj3_p6R42-iu7kyYedbOH/view",
        img: "/Ponto_verde.webp",
        title: "Sociedade Ponto Verde",
    },
    {
        href: "https://drive.google.com/file/d/1By_tXPZn5Z8-zI0I6bV1RoWZAKjTgOes/view",
        img: "/Pegada.webp",
        title: "Pegada de Carbono",
    },
] as const;

export function Environment() {
    return (
        <section id="ambiente" className="border-y border-line bg-surface py-25">
            <div className="mx-auto max-w-[1200px] px-7">
                <Reveal className="mx-auto max-w-[74ch] text-center">
                    <Eyebrow className="justify-center">Ambiente</Eyebrow>
                    <h2 className="mt-4 font-heading text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
                        O nosso compromisso com o ambiente
                    </h2>
                </Reveal>

                <Reveal delay={1} className="mx-auto mt-8 grid max-w-[900px] gap-4.5 sm:grid-cols-3">
                    {BADGES.map((b) => (
                        <a
                            key={b.title}
                            href={b.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col items-center gap-3.5 rounded-[18px] border border-line bg-white px-5.5 py-7 text-center transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-kraft hover:shadow-[0_30px_56px_-32px_rgba(14,44,95,.4)]"
                        >
                            <Image src={b.img} alt={b.title} width={160} height={160} className="h-60 w-auto object-contain" />
                            <div>
                                <b className="font-heading text-[15.5px] font-bold">{b.title}</b>
                            </div>
                        </a>
                    ))}
                </Reveal>

                <Reveal delay={2} className="mx-auto mt-13 grid max-w-[78ch] gap-4.5 text-[17px] leading-[1.62] text-ink-2">
                    <p>
                        A Cartobox tem o compromisso em implementar e manter a Gestão da Cadeia de Responsabilidade de acordo com os requisitos das
                        normas do FSC®, através da escolha e utilização de produtos certificados FSC na produção de alguns dos produtos que
                        comercializa. Consulte-nos para obter o vosso produto FSC.
                    </p>
                    <p>
                        Estamos comprometidos em promover a sustentabilidade e a responsabilidade ambiental. Utilizamos materiais recicláveis e
                        biodegradáveis nos nossos processos de produção, procurando minimizar o nosso impacto no meio ambiente. As nossas soluções de
                        embalagem são projetadas para otimizar o uso de recursos, reduzir desperdícios e promover práticas de embalagem mais
                        ecológicas.
                    </p>
                    <p>
                        Além disso, promovemos a consciência ambiental entre os nossos colaboradores, incentivando práticas de conservação de recursos
                        e separação adequada de resíduos. Também colaboramos com fornecedores comprometidos com práticas sustentáveis, em busca de
                        estabelecer parcerias que promovem a responsabilidade ambiental em toda a cadeia produtiva.
                    </p>
                    <p>
                        Acreditamos que a sustentabilidade vai além da escolha de materiais e processos eco-friendly. Para isso, trabalhamos em
                        conjunto com os nossos clientes para desenvolver embalagens personalizadas que atendam aos requisitos de proteção do produto,
                        ao mesmo tempo em que priorizam a sustentabilidade.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
