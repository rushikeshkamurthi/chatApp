import { View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import styled from 'styled-components/native';
import { GlobalContext } from '../../../App';

const LoginContainer = styled.View`
  justify-content: center;  
`;

const InputContainer = styled.View`
  margin-top: 6px;
  padding: 8px;
  
`;
const ButtonContainer = styled.View`
margin: 14px;
margin-top:20px;

`;
const LoginText = styled.Text`
  font-size: 34px;
  text-align: center;
    font-weight: bold;
    margin:10px;
    
`;
const ErrorContainer = styled.View`
background-color: red;
height:20px;
border-radius:5px;
margin:10px;  
justify-content: space-between;  
flex-direction:row;
padding-horizontal:8px;
`;
const Login = () => {
  const {isLoggedIn,setisLoggedIn}= useContext(GlobalContext);
  const [LoginError, setLoginError] = useState(false);
  const CheckPassword = ()=>{
    if(userName==='Rushi' && password==='Rushi@123'){
      setisLoggedIn(true);
    }else{
      console.log('====================================');
      console.log('Invalid credentials');
      console.log('====================================');
      setLoginError(true);
    }
  }
  const CloseErrorBox = () =>{
    setLoginError(false);
  }
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');

  return (
        <LoginContainer>
        <LoginText>Login</LoginText>
        {LoginError && <ErrorContainer><Text>Invalid Credentials</Text><Text onPress={CloseErrorBox}>X</Text></ErrorContainer>}
        <InputContainer>
        <TextInput placeholder='UserName' onChangeText={(value)=>setuserName(value)}></TextInput>
        </InputContainer>
        <InputContainer>
        <TextInput placeholder='Password'  onChangeText={(value)=>setpassword(value)}></TextInput>
        </InputContainer>
        <ButtonContainer>
        <Button  mode="contained" onPress={CheckPassword}>Login</Button>
        </ButtonContainer>
    </LoginContainer>
    
  )
}

export default Login