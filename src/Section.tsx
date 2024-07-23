import { Fragment } from 'react';

export default function Section({ title, divideClassName, properties }: { title:string, divideClassName:string, properties: SectionProperty[] }) {

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

export interface SectionProperty {

  title: string;
  children: string | React.ReactElement;

}