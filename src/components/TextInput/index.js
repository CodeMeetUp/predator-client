import { Container } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextInput = ({ handleChange, type, label, icon }) => (
  <Container>
    <span>
      <FontAwesomeIcon icon={icon} />
    </span>
    <input
      type={type}
      placeholder={label}
      onBlur={(e) => handleChange(label, e.target.value)}
    />
  </Container>
);

export default TextInput;
