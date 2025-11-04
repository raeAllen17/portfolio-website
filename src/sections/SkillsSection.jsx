import { useRef, useState } from "react"
import { skillsData } from "@/dataset/skills";
import { ArrowDown } from "lucide-react";
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

    const menuBtnRef = useRef(null)
    const [pos, setPos] = useState(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const [activeTab, setActiveTab] = useState('All');

    const handleTab = (idx, type) => {
        setActiveIdx(idx)
        setActiveTab(type)
        setPos(null)
    }

    const handleOpenMenu = () => {
        if (pos) {
            return setPos(null)
        }
        const rect = menuBtnRef.current.getBoundingClientRect();
        setPos({ top: rect.bottom, left: rect.left });
    }

    return (
        <section className="sec">
            {/* Title */}
            <h2>Skills</h2>
            {/* Filter Tab Medium Screens Up*/}
            <div className="hidden md:flex justify-center gap-10 h-full border-b border-border w-3xl">
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
            {/* FILTER TAB ON SMALL SCREENS */}
            <button
                className="md:hidden text-foreground w-1/4 py-2 rounded-xl bg-background border border-border"
                ref={menuBtnRef}
                onClick={handleOpenMenu}
            >
                {activeTab}
            </button>
            {pos && (
                <div className="flex flex-col bg-background border border-border absolute z-10 mt-30 w-1/3 px-4 py-2 rounded-xl shadow-2xl space-y-2" >
                    {filters.map((filter, idx) => (
                        <p onClick={() =>handleTab(idx, filter.text)} >
                            {filter.text}
                        </p>
                    ))}
                </div>
            )}
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
            <div className={`max-w-3xl gap-5 ${activeIdx >= 1 ? "flex" : "hidden"} flex-wrap`}>
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