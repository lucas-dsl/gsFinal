import { useState } from "react";
import { Link } from "react-router-dom";
import X from "../assets/icons/close.png"
import Menu from "../assets/icons/menu.png"
import { Sparkles } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="bg-pink-100 border-b border-black/20 inset-x-0 top-0 z-10 py-4">
            <nav className="flex items-center justify-evenly py-1" aria-label="Main navigation">
                <div className="flex flex-row justify-between items-center gap-2">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center px-2">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                    </Link>
                        <span className="text-xl font-bold text-black">
                            LashOrganiza
                        </span>
                </div>

                <ul className="hidden md:flex w-5/7 justify-evenly">
                    <li><Link to="/" className="text-lg font-semibold text-black">Início</Link></li>
                    <li><Link to="/members" className="text-lg font-semibold text-black">Integrantes</Link></li>
                    <li><Link to="/faq" className="text-lg font-semibold text-black">FAQ</Link></li>
                    <li><Link to="/contact" className="text-lg font-semibold text-black">Contato</Link></li>
                    <li><Link to="/solution" className="text-lg font-semibold text-black">Solução</Link></li>
                </ul>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isOpen ? <img src={X} alt="Icone para Fechar Menu" /> : <img src={Menu} alt="Icone para Abrir Menu" />}
                </button>
            </nav>

            {isOpen && (
                <ul
                    className="md:hidden bg-pink-100 flex flex-col items-center py-5 space-y-4"
                    role="menu"
                >
                    <li><Link to="/" className="text-lg font-semibold text-black" role="menuitem" onClick={handleLinkClick}>Início</Link></li>
                    <li><Link to="/members" className="text-lg font-semibold text-black" role="menuitem" onClick={handleLinkClick}>Integrantes</Link></li>
                    <li><Link to="/sobre" className="text-lg font-semibold text-black" role="menuitem" onClick={handleLinkClick}>Sobre</Link></li>
                    <li><Link to="/faq" className="text-lg font-semibold text-black" role="menuitem" onClick={handleLinkClick}>FAQ</Link></li>
                    <li><Link to="/contact" className="text-lg font-semibold text-black" role="menuitem" onClick={handleLinkClick}>Contato</Link></li>
                    <li><Link to="/solution" className="text-lg font-semibold text-black" role="menuitem" onClick={handleLinkClick}>Solução</Link></li>
                </ul>
            )}
        </header>
    );
};

export default Header;
