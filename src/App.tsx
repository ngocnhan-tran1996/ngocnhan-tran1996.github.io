import { SectionFragment } from './Fragment'
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

      <SectionFragment title="INFORMATION" divideClassName="border border-primary border-3 opacity-50" properties={informationData} />

      <SectionFragment title="WORK EXPERIENCE" divideClassName="border border-black border-3 opacity-75" properties={workExperienceData} />

      <SectionFragment title="SKILLS" divideClassName="border border-secondary border-3 opacity-75" properties={skillsData} />

      <SectionFragment title="CERTIFICATIONS" divideClassName="border border-info border-3 opacity-75" properties={certificationData} />

      <SectionFragment title="EDUCATION" divideClassName="border border-dark-subtle border-3 opacity-50" properties={educationData} />
    </div>
  )

}