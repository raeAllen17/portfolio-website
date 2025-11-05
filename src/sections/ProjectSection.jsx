import { projectsData } from "@/dataset/projects"

export const ProjectSection = () => {
    return (
        <section className="sec" id="projects">
            {/* Title */}
            <h2>Projects</h2>
            {/* Subtitle */}
            <p>
                All the projects listed here are currently college and personal projects only.
            </p>
            {/* Heading Content */}
            <div className="flex flex-col items-center max-w-3xl space-y-5">
                <img src={projectsData[0].thumbnail} alt="" className="rounded-xl" />
                <div className="flex flex-col items-center text-center" >
                    <p className="font-semibold" >{projectsData[0].title}</p>
                    <p>{projectsData[0].desc}</p>
                    <p className="text-foreground/70">{projectsData[0].tech}</p>
                    <p className="text-highlight">{projectsData[0].project}</p>
                </div>
            </div>
            {/* Other projects */}
            <div className="flex flex-wrap max-w-2xl justify-center gap-5">
                {projectsData.slice(1).map((proj, i) => (
                    <div key={i} className="flex flex-col items-center text-center w-80 space-y-5">
                        <img src={proj.thumbnail} alt="" className="rounded-xl h-30 md:h-50 w-80 object-cover" />
                        <div>
                            <p className="font-semibold">{proj.title}</p>
                            <p>{proj.desc}</p>
                            <p className="text-foreground/70">{proj.tech}</p>
                            <p className="text-highlight">{proj.project}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}