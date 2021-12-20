import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, Span, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href = "tel:9140024536">9140024536</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href = "mailto:gauravgupta756593@gmail.com">gauravgupta756593@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovation comes from a special work called 'Practice' .<br/><Span>-Gaurav</Span></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href = "https://github.com/gauravgupta799" target="_blank" >
            <AiFillGithub size = "3rem"/>
          </SocialIcons>
          <SocialIcons href = "https://www.linkedin.com/in/gaurav-gupta-887973192/"  target="_blank">
              <AiFillLinkedin size = "3rem"/>
          </SocialIcons>
          <SocialIcons href = "https://www.instagram.com/gaurav_gupta799/"  target="_blank">
              <AiFillInstagram size = "3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;