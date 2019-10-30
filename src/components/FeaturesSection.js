import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Advanced analytics",
              description:
                "Maximize your social media performance by making insightful, data-driven decisions based on intelligible analytics. A customized dashboard quickly visualizes the metrics most important to you, and scheduled reports help you stay on top of your game.",
              image: "/Images/undraw_metrics_gtu7.png"
            },
            {
              title: "Customer Support",
              description:
                "you will receive technical assistance whenever you need it. Feel free to contact us with your questions and our friendly team will get back to you within 24hours hours",
              image: "/Images/undraw_a_whole_year_vnfm.png"
            },
            {
              title: "Safe to use",
              description:
                "Our one of a kind service will automatically reduce its speed to ensure that your account is safe from hitting Instagram limits and we offer multiple speed settings for advanced users.",
              image: "/Images/undraw_Security_on_ff2u.png"
            },
            {
              title: "Grow Your Channel",
              description:
                "Find out how to nurture your growing community, and how to get your fans to grow your channel WITH you. No matter who you are, or how long you've been a YouTuber, we can help you grow!",
              image: "/Images/undraw_Growing_qwt2.png"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
