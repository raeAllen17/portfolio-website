import { badgesData } from "@/dataset/badges"
import { ArrowUpRight } from "lucide-react"
export const BadgeSection = () => {
    return (
        <section className="sec">
            <h2>Badges</h2>
            <a href="https://www.credly.com/users/rae-allen-retuta" className="flex - items-center space-x-2 bg-primary text-white px-4 py-2 rounded cursor-pointer">
                <span>Visit Credly</span>
                <ArrowUpRight />
            </a>
            <div className="flex w-3xl gap-20 flex-wrap" >
                {badgesData.map((badge, idx) => (
                    <span key={idx} className="flex flex-col flex-1 items-center justify-between min-w-40 gap-2">
                        <img src={badge.img} alt="Badge Logo" className="h-50" />
                        <span className="text-center flex flex-col items-center h-20">
                            <p>{badge.title}</p>
                            <p className="text-highlight" >{badge.provider}</p>
                            <p>{badge.date}</p>
                        </span>
                    </span>
                ))}
            </div>
        </section>
    )
}