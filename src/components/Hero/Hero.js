import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br/>
        I'm Gaurav Gupta <br/>
        MERN Stack Web Developer
      </SectionTitle>
      <SectionText>
        Hii, <br/>
        I am Proficient Javascript Developer for Frontend and Backend Technologies,
        I have good Experiece to work with React like Frontend Technologies. 
        and NodeJs as Backend Technology.
      </SectionText>
      <Button onClick = {()=> window.location = "http://google.com"}>More About</Button>
    </LeftSection>
  </Section>
);
export default Hero;



