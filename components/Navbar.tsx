import navItems from "../data/nav.json";
import Button from "./Button";
export default function Navbar() {
    return (
        <nav className="flex-row items-center justify-center">
            <div className="w-full wrapper flex-row justify-between">
                <img src="../Logo_navbar.svg" alt="Logo" aria-label="Logo" />
                <ul className="nav-items-wrapper flex-row gap-x-8">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.link} className="nav-item">
                                <p>{item.title}</p>
                            </a>
                        </li>
                    ))}
                </ul>
                <Button text="Pedir Cotação" link="#" bgColor="var(--primary-color)" />
            </div>
        </nav>
    );
}
