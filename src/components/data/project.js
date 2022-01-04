import HomeImg from "../../../public/images/project_homehackathon.jpeg"
import DtacImg from "../../../public/images/project_dtac.png"
import SiitImg from "../../../public/images/project_siit.png"
import TutorThImg from "../../../public/images/project_tutorth.png"

const projects = [
    {title: "Home Hackathon: Property recommendation", desc: "Property recommendations based on user's web traffic history. My first project that led me to the field of recommendation system. Got Technical Excellence award.", img: HomeImg},
    {title: "Word-level Sentiment Analysis", desc: "Building Thai social media text sentiment analysis from scratch with no data. I built a facebook comment crawler, a labeling platform, a sentient analysis model, and a visualization dashboard.", img: DtacImg},
    {title: "Research Papers analytics", desc: "Gain insights into professors' area of interests solely based on their past publications.", img: SiitImg},
    {title: "TutorTH", desc: "Building a middle-man platform for tutors and students. The platform used React + Node + MongoDB", img: TutorThImg},
]


export default projects
