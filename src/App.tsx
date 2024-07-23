import Section from './Section'
import { informationData, workExperienceData, skillsData, certificationData, educationData } from './data'

export default function App() {

  return (
    <div className="container">

      <figure>
        <blockquote className="blockquote">
          <h1 className="text-body-secondary">Tran Ngoc Nhan</h1>
        </blockquote>

        <figcaption className="blockquote-footer fs-5 fw-bold">
          Java Developer
        </figcaption>
      </figure>

      <Section title="INFORMATION" divideClassName="border border-primary border-3 opacity-50" properties={informationData} />

      <Section title="WORK EXPERIENCE" divideClassName="border border-black border-3 opacity-75" properties={workExperienceData} />

      <Section title="SKILLS" divideClassName="border border-secondary border-3 opacity-75" properties={skillsData} />

      <Section title="CERTIFICATIONS" divideClassName="border border-info border-3 opacity-75" properties={certificationData} />

      <Section title="EDUCATION" divideClassName="border border-dark-subtle border-3 opacity-50" properties={educationData} />
    </div>
  )

}