import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

export const Container = styled.View`
  background-color: ${Colors.primaryColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 20px;
    margin: 20px;
`;

export const SignInText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 25px;
    margin: 10px;
`;

export const EmailInput = styled.TextInput`
    width: 80%;
    border-bottom-width: 1px;
    border-bottom-color: #FFF;
    margin-top: 20px;
    padding: 3px;
    color: #FFF;
    font-size: 16px;
`;
export const PasswordInput = styled.TextInput`
    width: 80%;
    border-bottom-width: 1px;
    border-bottom-color: #FFF;
    margin-top: 20px;
    padding: 3px;
    color: #FFF;
    font-size: 16px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    width: 60%;
    background-color: #FFF;
    margin-top: 25px;
    padding: 12px;
    justify-content: center;
  align-items: center;
  border-radius: 80px;
    
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 18px;
    color: ${Colors.primaryColor};
`;

export const ButtonLinkToSignUp = styled.TouchableOpacity`
    justify-content: center;
`;

export const LinkToSignUpText = styled.Text`
    font-size: 15px;
    color: #FFF;
    margin-top: 5px;
`;
