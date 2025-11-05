import { contactsData } from "@/dataset/contacts"
import { ArrowDown } from "lucide-react"

export const ContactMeSection = () => {
    return (
        <section className="sec" id="contact">
            {/* Title */}
            <h2>Contact Me</h2>
            {/* Download CV Buttons */}
            <div className="flex space-x-2 justify-center w-full" >
                <button className="text-white px-4 py-2 rounded-xl bg-primary flex space-x-1 items-center">
                    <span>Download CV</span>
                    <ArrowDown size={20} />
                </button>
            </div>
            {/* Contacts */}
            <div className="w-full py-10 px-10 md:px-30 flex flex-col flex-wrap md:h-50  border border-border bg-card rounded-xl gap-5" >
                {contactsData.map(({ title, link, icon: Icon }, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-highlight" />
                        <a href={link} >{title}</a>
                    </div>
                ))}
            </div>
        </section>
    )
}