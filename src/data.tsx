import { BadgeFragment, SectionProperty } from "./Fragment";

export const informationData: SectionProperty[] = [
  {
    title: "Date of Birth",
    children: "Oct 20, 1996"
  },
  {
    title: "Gender",
    children: "Male"
  },
  {
    title: "Phone",
    children: "0946849209"
  },
  {
    title: "Email",
    children: <a href="mailto:ngocnhan.tran1996@gmail.com" title="Nhan's Mail">ngocnhan.tran1996@gmail.com</a>
  },
  {
    title: "Address",
    children: "Ho Chi Minh, Viet Nam"
  },
  {
    title: "GitHub",
    children: <a href="https://github.com/ngocnhan-tran1996" title="Nhan's GitHub">https://github.com/ngocnhan-tran1996</a>
  }
];

export const workExperienceData: SectionProperty[] = [
  {
    title: "05/2022 - NOW",
    children: (
      <figure>
        <blockquote className="blockquote fw-bold">Asia Commercial Joint Stock Bank</blockquote>
        <figcaption className="blockquote-footer"> Java Developer</figcaption>
        <ul className="list-unstyled">
          <li>Responsibilities:
            <ul>
              <li>Build API about query transaction information, create credit card, listen/receive
                message queue, send mail...</li>
              <li>Build library for wrapping API by document</li>
              <li>Unit test</li>
            </ul>
          </li>
        </ul>
      </figure>
    )
  },
  {
    title: "08/2020 - 04/2022",
    children: (
      <figure>
        <blockquote className="blockquote fw-bold">CITYNOW TECHNOLOGY SOLUTIONS</blockquote>
        <figcaption className="blockquote-footer"> Java Developer</figcaption>
        <ul className="list-unstyled">
          <li>Responsibilities:
            <ul>
              <li>Build API customer's reserve deletion, assigned room, payment infodisplay,
                payment process, check-in/check-out, export monthly report, listcustomer's
                reserve infomation repor</li>
              <li>Fix bug and maintain API transfer room, insert file xml, display allcustomer's
                reserve information, CRUD customer's reserve.
              </li>
              <li>Unit test for query and services layer</li>
            </ul>
          </li>
        </ul>
      </figure>
    )
  },
  {
    title: "08/2018 - 07/2020",
    children: (
      <figure>
        <blockquote className="blockquote fw-bold">URBAN VIETNAM</blockquote>
        <figcaption className="blockquote-footer"> Java Developer</figcaption>
        <ul className="list-unstyled">
          <li>Responsibilities:
            <ul>
              <li>Maintain comestic website</li>
              <li>Build export report with excel format for timekeeping website</li>
              <li>Build API edit checking-time for timekeeping website</li>
            </ul>
          </li>
        </ul>
      </figure>
    )
  }
];

const languages = ["English", "Vietnamese"].map(value => <BadgeFragment value={value} />)
const programmingLanguages = ["Java", "Javascript"].map(value => <BadgeFragment value={value} />)
const frameworks = ["Spring Framework", "Spring Security", "Spring Boot", "Spring JPA", "Spring AMQP", "Spring Mail", "Thymeleaf", "Hibernate", "Boostrap", "ReactJS"].map(value => <BadgeFragment value={value} />)
const databases = ["MySQL", "PostgreSQL", "Oracle"].map(value => <BadgeFragment value={value} />)
const tools = ["Github", "Github", "Gitlab", "Eclipse", "VS Code", "IntelliJ"].map(value => <BadgeFragment value={value} />)
const knowledge = ["OOP", "Design Pattern", "SOLID Principles", "Dependency Injection", "RestfulAPI", "Microservices", "RabbitMQ", "ActiveMQ"].map(value => <BadgeFragment value={value} />)
const anotherTools = ["Word", "Excel"].map(value => <BadgeFragment value={value} />)

export const skillsData: SectionProperty[] = [
  {
    title: "Languages",
    children: <>{languages} </>
  },
  {
    title: "Programming Languages",
    children: <>{programmingLanguages}</>
  },
  {
    title: "Frameworks & Platforms",
    children: <>{frameworks}</>
  },
  {
    title: "Databases",
    children: <>{databases}</>
  },
  {
    title: "Version Control & IDE",
    children: <>{tools}</>
  },
  {
    title: "Knowledge",
    children: <>{knowledge}</>
  },
  {
    title: "Computer",
    children: <>{anotherTools}</>
  }
]

export const certificationData: SectionProperty[] = [
  {
    title: "2017",
    children: "B English Certificate"
  },
  {
    title: "2019",
    children: "Dong Du N4 Certificate"
  }
];

export const educationData: SectionProperty[] = [
  {
    title: "10/2014 - 08/2018",
    children: "HUTECH UNIVERSITY"
  },
  {
    title: "2011 - 09/2014",
    children: "BEN TRE GIFTED HIGH SCHOOL"
  }
];