"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { Eyebrow } from "@/components/site/eyebrow";
import { PlaceholderPhoto } from "@/components/site/placeholder-photo";
import { cn } from "@/lib/utils";
import { categories, products, type ProductCategory } from "@/lib/data";

const ALL = "Todas" as const;
type Filter = typeof ALL | ProductCategory;

export function Products() {
    const [filter, setFilter] = useState<Filter>(ALL);

    const filtered = useMemo(() => (filter === ALL ? products : products.filter((p) => p.category === filter)), [filter]);

    return (
        <section id="produtos" className="bg-paper-2 pt-20 pb-25">
            <div className="mx-auto max-w-[1200px] px-7">
                <Reveal className="mb-11 max-w-[640px]">
                    <Eyebrow>Produtos</Eyebrow>
                    <h2 className="mt-4 font-heading text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
                        Conheça alguns dos nossos produtos
                    </h2>
                </Reveal>

                <Reveal delay={1} className="mb-8.5 flex flex-wrap gap-2.5">
                    {[ALL, ...categories].map((f) => (
                        <button
                            key={f}
                            type="button"
                            onClick={() => setFilter(f)}
                            data-on={f === filter}
                            className="rounded-full border-[1.5px] border-line bg-surface px-4.25 py-2.5 font-mono text-[12.5px] font-bold tracking-[.06em] text-ink-2 uppercase transition-colors hover:border-kraft hover:text-ink data-[on=true]:border-ink data-[on=true]:bg-ink data-[on=true]:text-paper"
                        >
                            {f}
                        </button>
                    ))}
                </Reveal>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {filtered.map((p) => (
                        <article
                            key={p.name}
                            className="overflow-hidden rounded-[18px] border border-line bg-surface transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-kraft hover:shadow-[0_32px_60px_-34px_rgba(14,44,95,.45)]"
                        >
                            {/* <PlaceholderPhoto className="aspect-4/3" /> */}
                            <div className="px-4.75 pt-4.5 pb-5.25">
                                <span className="mb-2.25 block font-mono text-[11px] font-bold tracking-[.13em] text-kraft-dark uppercase">
                                    {p.category}
                                </span>
                                <h3 className="mb-1.5 font-heading text-lg font-bold tracking-[-0.01em]">{p.name}</h3>
                                <p className="text-[14.5px] leading-[1.5] text-ink-2">{p.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-11 flex justify-center">
                    <a
                        href="#produtos"
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "group/cta gap-2.5 rounded-[13px]  text-base transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1.25 hover:shadow-[0_30px_56px_-32px_rgba(14,44,95,.4)] hover:bg-brand-dark",
                        )}
                    >
                        Obtenha uma solução à sua medida
                        <ArrowRight className="size-4.5 transition-transform group-hover/cta:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}
