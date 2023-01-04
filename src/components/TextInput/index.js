import { Container } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextInput = ({ type, label, icon }) => (
  <Container>
    <span>
      <FontAwesomeIcon icon={icon} />
    </span>
    <input type={type} placeholder={label} />
  </Container>
);

export default TextInput;
