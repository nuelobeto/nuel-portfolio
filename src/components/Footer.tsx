import styled from "styled-components";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../assets/icons";
import { colors, fontSizes } from "./../config/style.config";
import useMode from "./../zustand/useMode";

const Footer = () => {
  const { mode } = useMode((state) => state);

  return (
    <FooterWrapper mode={mode}>
      <FooterSocials mode={mode}>
        <a href="https://github.com/nuelobeto" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/nuel-obeto/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </FooterSocials>
      <p>Built with React TypeScript</p>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer<any>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: ${(props) =>
    props.mode === "light"
      ? `2px solid ${colors.pearl_mist}`
      : `2px solid ${colors.forest_stone}`};
  padding: 1rem;
  gap: 1rem;

  p {
    font-size: ${fontSizes.sm};
    color: ${colors.moonstone};
  }
`;

const FooterSocials = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  svg {
    font-size: 25px;
    color: ${(props) =>
      props.mode === "light"
        ? `${colors.forest_stone}`
        : `${colors.moonstone}`};
    cursor: pointer;

    &:hover {
      color: ${(props) =>
        props.mode === "light"
          ? `${colors.moonstone}`
          : `${colors.pearl_mist}`};
    }
  }
`;
