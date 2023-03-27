import styled from "styled-components";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../assets/icons";
import { colors, fontSizes } from "./../config/style.config";
import { Socials } from "./Sidebar";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSocials>
        <GithubIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </FooterSocials>
      <p>Built with React TS and Node</p>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  /* height: 8vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid ${colors.forest_stone};
  padding: 1rem;
  gap: 1rem;

  p {
    font-size: ${fontSizes.sm};
    color: ${colors.moonstone};
  }
`;

const FooterSocials = styled(Socials)`
  padding: 0;
  gap: 2rem;
  svg {
    font-size: 25px;
  }
`;
