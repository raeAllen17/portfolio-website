import { SiGmail, SiInstagram, SiLinkedin } from "react-icons/si"
import { Switch } from "@/components/ui/switch";
import { ArrowDownToLine, SunDim, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const links = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' }
];

export const HeroSection = () => {

    // VARS FOR THEME TOGGLE
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("portfolio-theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    const handleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(prev => !prev)
            document.documentElement.classList.remove("dark");
            localStorage.removeItem("portfolio-theme")
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("portfolio-theme", "dark")
            setIsDarkMode(prev => !prev)
        }
    }

    return (
        <section className="min-h-screen flex flex-col justify-between items-center py-10" >
            {/* NAVIGATION BAR */}
            <div className="flex justify-between items-center w-full">

                {/* CONTACT ICONS */}
                <div className="flex space-x-2 items-center">
                    {/* MENU FOR SMALL SCREENS */}
                    <span className="md:hidden mr-3 cursor-pointer">
                        {isMenuOpen ?
                            (
                                <X
                                    className="text-foreground z-10"
                                    onClick={() => setIsMenuOpen(prev => !prev)}
                                />
                            )
                            :
                            (
                                <Menu
                                    className="text-foreground z-10"
                                    onClick={() => setIsMenuOpen(prev => !prev)}
                                />
                            )
                        }
                    </span>
                    <SiLinkedin className="text-foreground" />
                    <SiGmail className="text-foreground" />
                    <SiInstagram className="text-foreground" />
                </div>

                {/* PAGE LINKS ABOVE MEDIUM SCREENS */}
                <div className="hidden md:flex justify-between space-x-10">
                    {links.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* THEME TOGGLE */}
                <div className="flex space-x-2 items-center">
                    <Switch checked={isDarkMode} onCheckedChange={handleTheme} />
                    {isDarkMode ? <SunDim size={20} className="text-foreground" /> : <Moon size={20} className="text-foreground" />}
                </div>
            </div>

            {/* TITLE  */}
            <div className="text-center space-y-2.5">
                <h1>Hello, I am</h1>
                <p className="text-7xl text-highlight" >
                    RAE ALLEN RETUTA
                </p>
                <p>
                    A fullstack developer that creates clean and performant web applications.
                </p>
            </div>

            {/* SCROLL DOWN ARROW */}
            <div className="flex w-full justify-center items-center">
                <ArrowDownToLine size={20} className="text-foreground" />
            </div>

            {/* MOBILE MENU */}
            <div className={`${isMenuOpen ? "flex" : "hidden"} flex-col items-center justify-center space-y-5 fixed top-0 left-0 min-h-screen min-w-screen bg-background/50 backdrop-blur-xs `} >
                <X
                    className="text-foreground absolute top-10 left-4 "
                    onClick={() => setIsMenuOpen(prev => !prev)}
                />
                {links.map((link, idx) => (
                    <p key={idx} className="text-foreground text-shadow">
                        {link.name}
                    </p>
                ))}
            </div>
        </section>
    )
}