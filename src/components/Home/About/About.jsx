import React from "react";
import { LinkButton } from "../../../styles/Buttons.styled";
import { SectionHeader, Text } from "../../../styles/Headings.styled";
import { AboutWrapper } from "./About.styled";

const About = () => {
  return (
    <AboutWrapper>
      <SectionHeader>Who We Are</SectionHeader>
      <Text>
        Dhreylyte store launched its very first collection catalog in 2021.
        Since then we have grown into one of the nation’s leading and fastest
        growing store, direct-to-consumer companies. We have been recognized by
        the industry as a Top Cataloger and Top Internet Retailer.
      </Text>
      <LinkButton to="/" small>
        Read More
      </LinkButton>
    </AboutWrapper>
  );
};

export default About;
