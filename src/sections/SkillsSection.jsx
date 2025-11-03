import { useState } from "react"
import { skillsData } from "@/dataset/skills";
export const SkillsSection = () => {

    const filters = [
        { text: "All" },
        { text: "Web" },
        { text: "Desktop" },
        { text: "Library" },
        { text: "Framework" },
        { text: "Database" },
        { text: "Tools" }
    ]

    const [activeIdx, setActiveIdx] = useState(0);
    const [activeTab, setActiveTab] = useState('');

    const handleTab = (idx, type) => {
        setActiveIdx(idx)
        setActiveTab(type)
    }

    return (
        <section className="sec">
            {/* Title */}
            <h2>Skills</h2>
            {/* Filter Tab */}
            <div className="flex justify-center gap-10 h-full border-b border-border w-3xl">
                {filters.map((filter, idx) => (
                    <div key={idx} className={`min-h-10 text-center flex-1 ${activeIdx === idx ?
                        "border-b border-highlight"
                        : ""}`} >
                        <p
                            className={`cursor-pointer ${activeIdx === idx ?
                                "text-highlight"
                                : "text-foreground hover:text-highlight"}`}
                            onClick={() => handleTab(idx, filter.text)}
                        >
                            {filter.text}
                        </p>
                    </div>
                ))}
            </div>
            {/* ACTIVE TAB ALL */}
            {/* THIS BLOCK IS SEPARATED BECAUSE OF ITS UNIQUE SCROLL ANIMATION */}
            <div className={`overflow-x-auto w-full scrollbar-hide ${activeIdx === 0 ? "flex" : "hidden"}`}>
                <div className="flex items-center justify-center gap-5 animate-spin-scroll pr-5">
                    {skillsData.map((skill, idx) => (
                        <span key={idx} className="flex-none basis-20 p-5 bg-card rounded-xl border border-border">
                            <img src={skill.img} alt="Skill Logo" />
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-5 animate-spin-scroll pr-5">
                    {skillsData.map((skill, idx) => (
                        <span key={idx} className="flex-none basis-20 p-5 bg-card rounded-xl border border-border">
                            <img src={skill.img} alt="" />
                        </span>
                    ))}
                </div>
            </div>
            {/* SELECTED SKILL TAB */}
            <div className={`w-3xl gap-5 ${activeIdx >= 1 ? "flex" : "hidden"}`}>
                {/* DISPLAY FILTERED DATA TAB HERE */}
                {skillsData.filter(skill => skill.type === activeTab).map((skill, idx) => (
                    <span className="flex-none basis-20 p-5 bg-card rounded-xl border border-border" >
                        <img src={skill.img} alt="Skill Logo" />
                    </span>
                ))}
            </div>
        </section>
    )
}