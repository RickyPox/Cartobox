import Link from "next/link";
import navItems from "../data/nav.json";
export default function Footer() {
    return (
        <footer className="flex-column gap-y-20 items-center justify-center">
            <div className="w-full wrapper flex lg:flex-row flex-col gap-x-32 sm:gap-y-32 gap-y-20 items-center">
                <Link href="/">
                    <img className="max-w-[200px]" src="/Logo_footer.svg" alt="Logo" aria-label="Logo" />
                </Link>
                <div className="sm:flex-row flex flex-col gap-y-10 justify-between gap-x-10 w-full">
                    <ul className="footer-nav-items-wrapper flex-column gap-y-3 items-center">
                        <h3 className="">Navegação</h3>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link} className="footer-nav-item text-center hover:scale-105 transition-all duration-200">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="footer-address-items-wrapper flex-column gap-y-3 items-center">
                        <h3 className="">Morada</h3>
                        <li>
                            <p className="text-center">
                                Rua da Forcada, <br></br>S/N, Calços <br></br> 2445-712 Martingança
                            </p>
                            <p className="text-sm! text-center">
                                <br></br>(39.68440, -8.97201)
                            </p>
                        </li>
                    </ul>
                    <ul className="footer-address-items-wrapper flex-column gap-y-3 items-center">
                        <h3 className="">Contactos</h3>
                        <li>
                            <p className="text-center">244 545 380</p>
                            <p className=" text-center">(Chamada Fixa Nacional)</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full footer-rights-wrapper md:flex-row flex flex-col justify-between gap-y-6">
                <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 footer-rights items-center sm:items-start">
                    <p>© 2024 Cartobox. Todos os direitos reservados.</p>
                    <div className="flex sm:flex-row flex-col gap-y-6 gap-x-6 items-center sm:items-start">
                        <Link href="/politica-privacidade" className="hover:scale-105 transition-all duration-200">
                            Política de Privacidade
                        </Link>
                        <Link href="/termos-e-condicoes" className="hover:scale-105 transition-all duration-200">
                            Termos de serviço
                        </Link>
                        <Link href="/politica-cookies" className="hover:scale-105 transition-all duration-200">
                            Política de cookies
                        </Link>
                    </div>
                </div>
                <div className="flex-row gap-x-3 footer-socials justify-center sm:justify-start">
                    <a
                        href="https://www.facebook.com/cartobox.pt/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="hover:scale-105 transition-all duration-200"
                    >
                        <img src="/Facebook_icon.svg" alt="Facebook" />
                    </a>
                    <a
                        href="https://www.instagram.com/cartobox.lda/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="hover:scale-105 transition-all duration-200"
                    >
                        <img src="/Instagram_icon.svg" alt="Instagram" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/cartobox-lda/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="hover:scale-105 transition-all duration-200"
                    >
                        <img src="/LinkedIn_icon.svg" alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className="footer-rights-wrapper flex sm:flex-row flex-col gap-y-6 gap-x-6 w-full items-center sm:items-start">
                <a
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/1m7jOMCcwv34XX-7DGeZ5B2gnu1Tm55kX/view?usp=sharing"
                    target="_blank"
                    className="hover:scale-105 transition-all duration-200"
                >
                    Ficha de projeto - Apoio à Produção Nacional
                </a>
                <a
                    href="https://www.livroreclamacoes.pt/Inicio/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:scale-105 transition-all duration-200"
                >
                    Livro de reclamações
                </a>
            </div>
            <div className="w-full wrapper">
                <img
                    className="max-w-200 w-full object-contain "
                    src="/Cofinanciado.webp"
                    alt="Confinanciado"
                    aria-label="Confinanciado por Centro 2020, Portugal 2020, União Europeia"
                />
            </div>
        </footer>
    );
}
