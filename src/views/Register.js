import React from "react";
import TextInput from "../components/TextInput";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Register = () => (
  <Wrapper>
    <Form>
      <Title>Create your account</Title>
      <Description>Organize your job search!</Description>
      <TextInput label="First Name" icon={faUser} />
      <TextInput label="Last Name" icon={faUsers} />
      <TextInput label="Email" icon={faEnvelope} />
      <TextInput label="Password" type="password" icon={faLock} />
    </Form>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  text-align: center;
`;

const Form = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0px;
`;

const Description = styled.p`
  color: #333;
`;

export default Register;
