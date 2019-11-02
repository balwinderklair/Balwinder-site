import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Testimonials from "./Testimonials";

function TestimonialsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Testimonials
          items={[
            {
              avatar: "https://www.packrs.co/images/packrs-logo.png",
              name: "Packrs",
              bio:
                "Decent staff and management, i learned lot about social media trends from seniors, good workplace for freshers and experienced people.My experience of working here is good and recommend every new beginner to join this organization and learn new trends of digital marketing.",
              company: "Company"
            },
            {
              avatar: "https://www.zeiq.co/img/zeiq-logo-offblack.png",
              name: "Zeiq",
              role: "Software Engineer",
              bio:
                "This company helps staff to progress within their roles. There is a relaxed work environment. The staff are eager to do a good job and there is great communication.",
              company: "Company"
            },
            {
              avatar: "https://www.shdevices.ca/images/logo.jpeg",
              name: "Smart Home Devices",
              role: "Designer",
              bio:
                "Excellent place to work to get on hands training and guidance from the leaders in the industry. Very vast paced, results oriented team player environment.",
              company: "Company"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TestimonialsSection;
