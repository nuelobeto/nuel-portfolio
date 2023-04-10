import styled from "styled-components";
import { colors, fontSizes } from "../config/style.config";

type FileInputT = {
  image: any;
  text: string;
  setFile: React.Dispatch<React.SetStateAction<any>>;
};

const FileInput = ({ image, text, setFile }: FileInputT) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  return (
    <FileInputWrapper className="file_input_wrapper">
      <label htmlFor="file">
        <img src={image} alt="" />
        <span>{text}</span>
      </label>
      <input type="file" id="file" onChange={handleChange} />
    </FileInputWrapper>
  );
};

export default FileInput;

const FileInputWrapper = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: ${fontSizes.sm};
    font-weight: 600;
    color: ${colors.pearl_mist};

    img {
      display: block;
      width: 40px;
    }
  }

  input {
    display: none;
  }
`;
