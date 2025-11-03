import { educationData } from "@/dataset/education"

export const EducationSection = () => {
    return (
        <section className="sec">
            {/* Title */}
            <h2>Education</h2>
            {/* Content */}
            {educationData.map((edu, idx) => (
                <div key={idx} className={`flex ${idx % 2 === 0 ? "flex-row"  : "flex-row-reverse"} justify-between items-center gap-5 w-3xl`}>
                    <div className="w-1/2 flex items-center justify-center">
                        <img
                            src={edu.img}
                            alt="School Logo"
                            style={{
                                height: 300,
                            }}
                        />
                    </div>
                    <div className="flex flex-col items-baseline w-1/2 space-y-2" >
                        <p className="text-highlight font-bold"> {edu.school} </p>
                        {edu.body.map((item, idx) => (
                            <div key={idx} className="flex justify-between w-full">
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