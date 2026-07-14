"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
    { href: "/", label: "Início" },
    { href: "#sobre", label: "Quem somos" },
    { href: "#produtos", label: "Produtos" },
    { href: "#tipos", label: "Tipos de cartão" },
    { href: "#contacto", label: "Contacto" },
];

function Brand() {
    return (
        <Link href="#top" className="flex items-center gap-[11px] font-heading text-[23px] font-extrabold tracking-[-0.03em]">
            <Image src="/logo.svg" alt="Cartobox" width={200} height={200} />
        </Link>
    );
}

export function Navbar() {
    const [solid, setSolid] = useState(false);

    useEffect(() => {
        const onScroll = () => setSolid(window.scrollY > 18);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-[60] border-b border-transparent transition-[background,box-shadow,border-color] duration-300",
                solid && "border-line bg-paper/82 shadow-[0_6px_24px_-16px_rgba(0,0,0,.4)] backdrop-blur-md",
            )}
        >
            <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-7">
                <Brand />
                <nav className="hidden gap-8 text-[15.5px] font-medium md:flex">
                    {NAV_LINKS.map((l) => (
                        <a key={l.href} href={l.href} className="text-ink-2 transition-colors hover:text-ink">
                            {l.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <a
                        href="#contacto"
                        className={cn(buttonVariants({ size: "lg" }), "hidden rounded-[13px] px-6.5 py-3.75 text-base md:inline-flex")}
                    >
                        Pedir orçamento
                    </a>
                    <Sheet>
                        <SheetTrigger
                            render={<Button variant="outline" size="icon-lg" className="rounded-[11px] border-line md:hidden" aria-label="Menu" />}
                        >
                            <Menu className="size-5.5" />
                        </SheetTrigger>
                        <SheetContent side="right" className="flex w-[min(82vw,340px)] flex-col gap-1 bg-surface p-6">
                            <SheetHeader className="p-0">
                                <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
                            </SheetHeader>
                            {NAV_LINKS.map((l) => (
                                <SheetClose
                                    key={l.href}
                                    nativeButton={false}
                                    render={<a href={l.href} className="border-b border-line py-3.75 text-lg font-semibold" />}
                                >
                                    {l.label}
                                </SheetClose>
                            ))}
                            <SheetClose
                                nativeButton={false}
                                render={
                                    <a
                                        href="#contacto"
                                        className={cn(buttonVariants({ size: "lg" }), "mt-5 justify-center rounded-[13px] py-3.75 text-base")}
                                    />
                                }
                            >
                                Pedir orçamento
                            </SheetClose>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
