import { AboutMeSection } from "@/sections/AboutMeSection"
import { HeroSection } from "@/sections/HeroSection"
import { EducationSection } from "@/sections/EducationSection"
import { SkillsSection } from "@/sections/SkillsSection"
import { BadgeSection } from "@/sections/BadgeSection"
import { SeminarSection } from "@/sections/SeminarSection"
import { ProjectSection } from "@/sections/ProjectSection"
import { ContactMeSection } from "@/sections/ContactMeSection"

export const MainPage = () => {
    return (
        <div className="min-h-screen flex flex-col box-border container mx-auto px-4">
            {/* Hero */}
                <HeroSection /> 
            {/* About Me */}
                <AboutMeSection />
            {/* Education */}
                <EducationSection />
            {/* Skills */}
                <SkillsSection />
            {/* Badges */}
                <BadgeSection />
            {/* Seminars */}
                {/* <SeminarSection /> */}
            {/* Projects */}
                <ProjectSection />
            {/* Contact Me */}
                <ContactMeSection />
        </div>
    )
}