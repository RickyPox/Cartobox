import navItems from "../data/nav.json";
export default function Footer() {
    return (
        <footer className="flex-column gap-y-20 items-center justify-center">
            <div className="w-full wrapper flex-row gap-x-32">
                <img src="/Logo_footer.svg" alt="Logo" aria-label="Logo" />
                <ul className="footer-nav-items-wrapper flex-column gap-y-3 items-center">
                    <h3 className="">Navegação</h3>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.link} className="footer-nav-item">
                                <p>{item.title}</p>
                            </a>
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
            <div className="w-full footer-rights-wrapper flex-row justify-between ">
                <div className="flex-row gap-x-6 footer-rights">
                    <p>© 2024 Cartobox. Todos os direitos reservados.</p>
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Termos de serviço</a>
                    <a href="#">Configurações cookies</a>
                </div>
                <div className="flex-row gap-x-3 footer-socials">
                    <a href="#">
                        <img src="/Facebook_icon.svg" alt="Facebook" />
                    </a>
                    <a href="#">
                        <img src="/Instagram_icon.svg" alt="Instagram" />
                    </a>
                    <a href="#">
                        <img src="/LinkedIn_icon.svg" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
