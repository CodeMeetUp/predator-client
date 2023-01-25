import React, { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
// FIREBASE SHIZ
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
// import firebaseConfig from "./firebaseConfig";

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

// Configure FirebaseUI.
const firebaseConfig = {
  apiKey: "AIzaSyDUkCNiB9FoLOgJFV9c7k18d8ZYiYEd9pU",
  authDomain: "predator-91ed2.firebaseapp.com",
  projectId: "predator-91ed2",
  storageBucket: "predator-91ed2.appspot.com",
  messagingSenderId: "649004794889",
  appId: "1:649004794889:web:b8daf96d4f144597a964d8",
  measurementId: "G-6ECJS8V6K3",
};

// document.querySelector('#sign-out').addEventListener('click', function(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   firebase.auth().signOut();
// });

const Register = () => {
  const [userRegistrationData, _userRegistrationData] = useState(null);
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const handleUserKeyValue = (key, value) =>
    _userRegistrationData({
      ...userRegistrationData,
      [key]: value,
    });

  const handleSignIn = () => {
    console.log(userRegistrationData);
    // debugger;
    var credential = firebase.auth.EmailAuthProvider.credential(
      userRegistrationData?.Email,
      userRegistrationData?.Password
    );
    var currentUser = firebase.auth.currentUser;

    console.log("handleSignin", credential, currentUser);
  };
  return (
    <Wrapper>
      <Form id="firebaseui-auth-container">
        <Title>Create your account</Title>
        <Description>Organize your job search!</Description>
        {/* <TextInput label="First Name" icon={faUser}/>
        <TextInput label="Last Name" icon={faUsers} /> */}
        <TextInput
          label="Email"
          icon={faEnvelope}
          handleChange={handleUserKeyValue}
        />
        <TextInput
          label="Password"
          type="password"
          icon={faLock}
          handleChange={handleUserKeyValue}
        />
        <button onClick={() => handleSignIn()}>Sign In</button>
      </Form>
    </Wrapper>
  );
};

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
