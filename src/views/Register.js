import React from "react";
import TextInput from "../components/TextInput";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

// Popular registration user flow patterns in today's apps
// - PW + Confirm PW before submit, confirm email later
// - Email now, PW later (via emailed token)
// - Email now, PW later (via temporary pw)
// - Phone Number now and some unique public id, confirm with SMS code, account details later and optional
// - Phone Number now and some inque public id, confirm with SMS link
// - SSO provider (ex: "Sign in with your <some_social_media_giant_here>")
// - No account at all (good luck staying in business)

// TODO: (if we go with the first and most popular option)
// 1. Validate user input
//  a. when user clicks on any field after typing into the "Email" we will give the feedback so they know if the email is available to use
//  b. when the user types in a password we will validate its construction for their security reasons
//  c. we will force the user to type the password in twice so that they understand what they typed (I FKN HATE THIS, but i user pw generators)

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
  padding-top: 50px;
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
