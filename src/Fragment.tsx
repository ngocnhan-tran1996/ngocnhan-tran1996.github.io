import { Fragment } from 'react';

export function SectionFragment({ title, divideClassName, properties }: { title: string, divideClassName: string, properties: SectionProperty[] }) {

  var data = properties.map(
    property =>
      <Fragment key={property.title}>
        <dt className="col-sm-3">{property.title}</dt>
        <dd className="col-sm-9">{property.children}</dd>
      </Fragment>
  )

  return (
    <section>
      <h2>{title}</h2>
      <hr className={divideClassName} />
      <dl className="row align-items-center">{data}</dl>
    </section>
  )
}

export function BadgeFragment({ values }: { values: string[] }) {

  return values.map(value => <span className="badge rounded-pill text-bg-secondary fw-normal me-1">{value}</span>)
}

export interface SectionProperty {

  title: string;
  children: string | React.ReactElement;

}