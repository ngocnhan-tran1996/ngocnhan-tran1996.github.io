import { SectionProperty } from "./Section";

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

const badge = "badge rounded-pill text-bg-secondary fw-normal me-1";

export const skillsData: SectionProperty[] = [
  {
    title: "Languages",
    children: (
      <>
        <span className={badge}>English</span>
        <span className={badge}>Vietnamese</span>
      </>
    )
  },
  {
    title: "Programming Languages",
    children: (
      <>
        <span className={badge}>Java</span>
        <span className={badge}>Javascript</span>
      </>
    )
  },
  {
    title: "Frameworks & Platforms",
    children: (
      <>
        <span className={badge}>Spring Framework</span>
        <span className={badge}>Spring Boot</span>
        <span className={badge}>Spring JPA</span>
        <span className={badge}>Thymeleaf</span>
        <span className={badge}>Hibernate</span>
        <span className={badge}>Boostrap</span>
        <span className={badge}>Thymeleaf</span>
        <span className={badge}>ReactJS</span>
        <span className={badge}>NextJS</span>
      </>
    )
  },
  {
    title: "Databases",
    children: (
      <>
        <span className={badge}>MySQL</span>
        <span className={badge}>PostgreSQL</span>
        <span className={badge}>Oracle</span>
      </>
    )
  },
  {
    title: "Version Controll & IDE",
    children: (
      <>
        <span className={badge}>Git</span>
        <span className={badge}>Github</span>
        <span className={badge}>Gitlab</span>
        <span className={badge}>Eclipse</span>
        <span className={badge}>VS Code</span>
        <span className={badge}>IntelliJ</span>
      </>
    )
  },
  {
    title: "Knowledge",
    children: (
      <>
        <span className={badge}>OOP</span>
        <span className={badge}>Design Pattern</span>
        <span className={badge}>SOLID Principles</span>
        <span className={badge}>Dependency Injection</span>
        <span className={badge}>RestfulAPI</span>
        <span className={badge}>Microservices</span>
        <span className={badge}>RabbitMQ</span>
        <span className={badge}>ActiveMQ</span>
      </>
    )
  },
  {
    title: "Computer",
    children: (
      <>
        <span className={badge}>Word</span>
        <span className={badge}>Excel</span>
      </>
    )
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