import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Clients from "./Clients";

function ClientsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Clients
          items={[
            {
              name: "Instagram",
              image: "https://uploads.divjoy.com/logo-instagram.svg",
              width: "170rem"
            },
            {
              name: "Facebook",
              image:
                "https://www.thecanvassalon.com/wp-content/uploads/2019/07/facebook-logo-1-1.png",
              width: "170rem"
            },
            {
              name: "Twitter",
              image:
                "http://1.bp.blogspot.com/-waG3rYRs9Kg/T8_YfU0AcGI/AAAAAAAAGgg/lBsXlwHZ9r4/s1600/Twitter+logo+2011.png",
              width: "175rem"
            },
            {
              name: "Linkedin",
              image:
                "http://science.psu.edu/sciencejournaljune2012.pdf/archives/december-2013/images-december-2013/linkedin-logo.jpg/image",
              width: "170rem"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ClientsSection;
