import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = 'tech'>
    <SectionDivider/><br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I've worked with a range of technologies in the web development world. From Front-end To Back-end.
    </SectionText>
    <List>
      <ListItem><DiReact size = "4rem" color = "#3caefa"/>
        <ListContainer>
          <ListTitle titleType ='frontend'>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
               React.Js <br/> JavaScript
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem><DiFirebase size = "4rem"/>
        <ListContainer>
          <ListTitle titleType ='backend'>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
               NodeJs (ExpressJs) <br/> MongoDB
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem><DiZend size = "4rem"/>
        <ListContainer>
          <ListTitle titleType ='uiux'>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br/>
            tools like Figma and Adobe XD
            </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);
export default Technologies;
