import { SiGmail, SiInstagram, SiLinkedin } from "react-icons/si"
import { Switch } from "@/components/ui/switch";
const links = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' }
];

export const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col justify-between items-center py-10" >

            {/* NAVIGATION BAR */}
            <div className="flex justify-between items-center w-full">
                {/* CONTACT ICONS */}
                <div className="flex space-x-2">
                    <SiLinkedin />
                    <SiGmail />
                    <SiInstagram />
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
                <div>
                    <Switch defaultChecked />
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
            <div>

            </div>
        </section>
    )
}