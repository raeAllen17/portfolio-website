import { SiGmail, SiInstagram, SiLinkedin } from "react-icons/si"
import { Switch } from "@/components/ui/switch";
import { ArrowDownToLine, SunDim, Moon } from "lucide-react";
import { useEffect, useState } from "react";
const links = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' }
];

export const HeroSection = () => {

    // VARS FOR THEME TOGGLE
    const [isDarkMode, setIsDarkMode] = useState(false);

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
                <div className="flex space-x-2">
                    <SiLinkedin className="text-foreground" />
                    <SiGmail className="text-foreground" />
                    <SiInstagram className="text-foreground" />
                </div>

                {/* PAGE LINKS */}
                <div className="flex justify-between space-x-10">
                    {links.map(link => (
                        <a
                            key={link.name}
                            href={link.href}>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* THEME TOGGLE */}
                <div className="flex space-x-2 items-center"> 
                    <Switch checked={isDarkMode} onCheckedChange={handleTheme} />
                    {isDarkMode? <SunDim size={20} className="text-foreground" /> : <Moon size={20} className="text-foreground" /> }
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
        </section>
    )
}