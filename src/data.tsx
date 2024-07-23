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

export const skillsData: SectionProperty[] = [
  {
    title: "Languages",
    children: (
      <>
        <span className="badge rounded-pill text-bg-secondary me-1">English</span>
        <span className="badge rounded-pill text-bg-secondary">Vietnamese</span>
      </>
    )
  },
  {
    title: "Programming Languages",
    children: (
      <>
        <span className="badge rounded-pill text-bg-secondary me-1">Java</span>
        <span className="badge rounded-pill text-bg-secondary">Javascript</span>
      </>
    )
  },
  {
    title: "Frameworks & Platforms",
    children: (
      <>
        <span className="badge rounded-pill text-bg-secondary me-1">Spring Framework</span>
        <span className="badge rounded-pill text-bg-secondary me-1">Spring Boot</span>
        <span className="badge rounded-pill text-bg-secondary me-1">Spring JPA</span>
        <span className="badge rounded-pill text-bg-secondary me-1">Thymeleaf</span>
        <span className="badge rounded-pill text-bg-secondary me-1">Hibernate</span>
        <span className="badge rounded-pill text-bg-secondary me-1">Boostrap</span>
        <span className="badge rounded-pill text-bg-secondary me-1">Thymeleaf</span>
        <span className="badge rounded-pill text-bg-secondary me-1">ReactJS</span>
        <span className="badge rounded-pill text-bg-secondary">NextJS</span>
      </>
    )
  },
  {
    title: "Databases",
    children: (
      <>
        <span className="badge rounded-pill text-bg-secondary me-1">MySQL</span>
        <span className="badge rounded-pill text-bg-secondary me-1">PostgreSQL</span>
        <span className="badge rounded-pill text-bg-secondary">Oracle</span>
      </>
    )
  },
  {
    title: "Version Controll & IDE",
    children: (
      <>
        <span className="badge rounded-pill text-bg-secondary me-1">Git</span>
        <span className="badge rounded-pill text-bg-secondary  me-1">Github</span>
        <span className="badge rounded-pill text-bg-secondary me-1">Gitlab</span>
        <span className="badge rounded-pill text-bg-secondary me-1">Eclipse</span>
        <span className="badge rounded-pill text-bg-secondary me-1">VS Code</span>
        <span className="badge rounded-pill text-bg-secondary">IntelliJ</span>
      </>
    )
  },
  {
    title: "Knowledge",
    children: (
      <>
        <span className="badge rounded-pill text-bg-secondary me-1">OOP</span>
        <span className="badge rounded-pill text-bg-secondary me-1">Design Pattern</span>
        <span className="badge rounded-pill text-bg-secondary me-1">SOLID Principles</span>
        <span className="badge rounded-pill text-bg-secondary me-1">Dependency Injection</span>
        <span className="badge rounded-pill text-bg-secondary me-1">RestfulAPI</span>
        <span className="badge rounded-pill text-bg-secondary me-1">Microservices</span>
        <span className="badge rounded-pill text-bg-secondary me-1">RabbitMQ</span>
        <span className="badge rounded-pill text-bg-secondary">ActiveMQ</span>
      </>
    )
  },
  {
    title: "Computer",
    children: (
      <>
        <span className="badge rounded-pill text-bg-secondary me-1">Word</span>
        <span className="badge rounded-pill text-bg-secondary">Excel</span>
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