"use client";
import { useEffect, useRef, useState } from "react";
import navItems from "../data/nav.json";
import Button from "./Button";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const menuRef = useRef<HTMLDivElement | null>(null);
    const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

    const enterMenu = () => {
        gsap.to(".menu-2", {
            scaleX: 0.5,
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(".menu-3", {
            scaleX: 0.25,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const leaveMenu = () => {
        gsap.to(".menu-2", {
            scaleX: 1,
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(".menu-3", {
            scaleX: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const closeMenu = () => {
        if (!menuRef.current) return;

        gsap.to(itemsRef.current, {
            opacity: 0,
            y: -10,
            stagger: 0.05,
            duration: 0.2,
            ease: "power2.in",
        });

        gsap.to(menuRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                setIsOpen(false);
                setIsVisible(false);
            },
        });
    };

    useEffect(() => {
        if (isOpen && menuRef.current) {
            gsap.fromTo(
                menuRef.current,
                {
                    opacity: 0,
                    y: -20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                }
            );

            gsap.fromTo(
                itemsRef.current,
                {
                    opacity: 0,
                    y: -10,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: 0.08,
                    delay: 0.1,
                    ease: "power2.out",
                }
            );
        }
    }, [isOpen]);

    return (
        <nav className="w-full lg:flex lg:flex-row items-center justify-center">
            <div className="w-full wrapper flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <img src="../Logo_navbar.svg" alt="Logo" aria-label="Logo" className="h-8" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex nav-items-wrapper gap-x-8 items-center">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link} className="nav-item transition-all duration-200 hover:font-bold">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    <Button text="Pedir Cotação" link="/contactos" bgColor="var(--primary-color)" />
                </div>

                {/* Hamburger Button (Mobile) */}
                <button
                    className="lg:hidden flex flex-col gap-1 cursor-pointer"
                    aria-label="Abrir menu"
                    onClick={() => {
                        if (isOpen) {
                            closeMenu();
                        } else {
                            setIsVisible(true);
                            setIsOpen(true);
                        }
                    }}
                    onMouseEnter={enterMenu}
                    onMouseLeave={leaveMenu}
                >
                    <span className="w-6 h-0.5 bg-black menu-1"></span>
                    <span className="w-6 h-0.5 bg-black menu-2 origin-right"></span>
                    <span className="w-6 h-0.5 bg-black menu-3 origin-right"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isVisible && (
                <div ref={menuRef} className="lg:hidden w-full bg-white shadow mt-8">
                    <ul className="flex flex-col items-center gap-6 py-6">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                ref={(el) => {
                                    itemsRef.current[index] = el;
                                }}
                            >
                                <Link href={item.link} className="nav-item" onClick={closeMenu}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <Button text="Pedir Cotação" link="/contactos" bgColor="var(--primary-color)" />
                    </ul>
                </div>
            )}
        </nav>
    );
}
