import styled from "styled-components";
import { EmailIcon, LinkedInIcon, NameIcon, SendIcon } from "../assets/icons";
import { fontSizes, media } from "../config/style.config";
import useMode from "../zustand/useMode";
import Dashboard from "./../components/Dashboard";
import { colors } from "./../config/style.config";

const Contact = () => {
  const { mode } = useMode((state) => state);

  return (
    <Dashboard>
      <ContactWrapper mode={mode}>
        <div className="box">
          <div className="intro">
            <h2>Get in touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              reprehenderit laborum eos accusantium assumenda beatae dicta
              voluptates quos eum tempore.
            </p>
          </div>

          <div className="links">
            <button>
              <EmailIcon /> <span>nuelobet@gmail.com</span>
            </button>
            <button>
              <LinkedInIcon /> <span>LinkedIn</span>
            </button>
          </div>
        </div>

        <div className="form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" />
            <NameIcon />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="text" />
            <EmailIcon />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Message..."></textarea>
          </div>

          <div className="submit-btn">
            <button>
              Send Message <SendIcon />
            </button>
          </div>
        </div>
      </ContactWrapper>
    </Dashboard>
  );
};

export default Contact;

const ContactWrapper = styled.div<any>`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  height: 100vh;
  padding: 3rem 0;
  display: flex;
  gap: 2rem;
  overflow: auto;

  @media (max-width: ${media.xl}) {
    height: auto;
  }
  @media (max-width: ${media.md}) {
    flex-direction: column;
    gap: 4rem;
    .box {
      align-items: center;
      text-align: center;
    }
    .form {
      max-width: 450px;
      width: 100%;
      margin: 0 auto;
    }
  }

  .box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;

    .intro {
      h2 {
        margin-bottom: 2rem;
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.midnight_blue}`
            : `${colors.pearl_mist}`};
        @media (max-width: 600px) {
          text-align: center;
        }
      }

      p {
        line-height: 1.5;
        font-size: ${fontSizes.base};
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.stormy_night}`
            : `${colors.slate_grey}`};
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      button {
        width: 300px;
        padding: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        background-color: ${(props) =>
          props.mode === "light"
            ? `${colors.midnight_blue}`
            : `${colors.golden_sun}`};
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.white}`
            : `${colors.midnight_blue}`};
        font-weight: 700;
        font-size: ${fontSizes.sm};
        border: 1px solid transparent;
        border-radius: 8px;

        svg {
          font-size: 22px;
        }
      }
    }
  }

  .form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${(props) =>
      props.mode === "light" ? `${colors.frosty_ash}` : `${colors.gun_metal}`};
    border-radius: 20px;
    padding: 2rem 1rem;

    .form-group {
      max-width: 400px;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      gap: 5px;
      position: relative;

      label {
        font-weight: 500;
        font-size: ${fontSizes.sm};
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.forest_stone}`
            : `${colors.slate_grey}`};
      }

      input {
        width: 100%;
        height: 50px;
        outline: none;
        border-radius: 8px;
        border: 2px solid transparent;
        background-color: ${(props) =>
          props.mode === "light"
            ? `${colors.breezy_blue}`
            : `${colors.forest_stone}`};
        padding-left: 1rem;
        font-size: ${fontSizes.base};
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.forest_stone}`
            : `${colors.pearl_mist}`};
      }

      textarea {
        height: 180px;
        width: 100%;
        outline: none;
        border-radius: 8px;
        border: 2px solid transparent;
        background-color: ${(props) =>
          props.mode === "light"
            ? `${colors.breezy_blue}`
            : `${colors.forest_stone}`};
        padding: 10px 1rem;
        font-size: ${fontSizes.base};
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.forest_stone}`
            : `${colors.pearl_mist}`};
      }

      svg {
        position: absolute;
        right: 1rem;
        bottom: 16px;
        font-size: 22px;
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.forest_stone}`
            : `${colors.moonstone}`};
      }
    }

    .submit-btn {
      max-width: 400px;
      width: 100%;
      margin: 1rem auto 0;
      display: flex;
      justify-content: flex-end;

      button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem;
        background-color: ${(props) =>
          props.mode === "light"
            ? `${colors.midnight_blue}`
            : `${colors.golden_sun}`};
        color: ${(props) =>
          props.mode === "light"
            ? `${colors.white}`
            : `${colors.midnight_blue}`};
        font-weight: 700;
        font-size: ${fontSizes.sm};
        border: 1px solid transparent;
        border-radius: 8px;

        svg {
          font-size: 22px;
        }
      }
    }
  }
`;
