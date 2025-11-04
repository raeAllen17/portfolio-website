import { educationData } from "@/dataset/education"

export const EducationSection = () => {
    return (
        <section className="sec">
            {/* Title */}
            <h2>Education</h2>
            {/* Content */}
            {educationData.map((edu, idx) => (
                <div key={idx} className={`flex w-full flex-wrap ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-5 max-w-3xl mx-auto`}>
                    <div className="min-w-50 flex flex-1 items-center justify-center">
                        <img
                            src={edu.img}
                            alt="School Logo"
                            className="h-80 object-cover"
                        />
                    </div>
                    <div className="min-w-50 flex flex-1 flex-col space-y-2 text-center md:text-left " >
                        <p className="text-highlight font-bold"> {edu.school} </p>
                        {edu.body.map((item, idx) => (
                            <div key={idx} className="flex flex-1 justify-between text-left px-10 md:px-0">
                                <p>{item.text}</p>
                                <p>{item.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}