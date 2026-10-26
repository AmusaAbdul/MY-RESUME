import Header from "./header"
import Career from "./career"
import Education from "./education"
import Skills from "./skills"
import Projects from "./projects"
import Others from "./others"

const cv = () => {
    return (
        <div className="container">
            <Header />
            <div className="flex  itemSpan WeekSitting p-4 gap-5">
                <Career />
                <Education />
            </div>
            <Skills />
            <div className="flex  itemSpan WeekSitting">
                <Projects />
                <Others />
            </div>
            <h1 className="text-center mt-10 text-forest dark:text-gold-dark font-semibold tracking-wider font-mono">
                    Thanks for considering my application
            </h1>
        </div>
    )
}

export default cv
