import React from "react";
import { View } from "react-native";
import Logo from '../../components/Logo';

import {
  Container,
  EmailInput,
  LogoText,
  SignInText,
  PasswordInput,
  ButtonSubmit,
  ButtonText,
  LinkToSignUpText,
  ButtonLinkToSignUp
} from './styles';

const Login = ({ navigation }) => {
  return (
    <Container>
      <Logo />
      <LogoText>Lost And Found</LogoText>
      <SignInText>LOGIN</SignInText>
      <EmailInput placeholder="Email" placeholderTextColor="#FFF" />
      <PasswordInput placeholder="Password" placeholderTextColor="#FFF" />
      <ButtonSubmit onPress={() => { navigation.navigate('Home') }}><ButtonText>LOGIN</ButtonText></ButtonSubmit>
      <ButtonLinkToSignUp>
        <LinkToSignUpText>Don't have a account? SignUp</LinkToSignUpText>
      </ButtonLinkToSignUp>
    </Container>
  )
};

export default Login;
