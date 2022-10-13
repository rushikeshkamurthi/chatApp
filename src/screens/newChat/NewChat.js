import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';

const NewChat = ({navigation}) => {
    const FloatingActionButton = styled.TouchableOpacity`
    background-color:#ccc;
    width: 95%;
    height:20%;
    border-radius:100px;
    justify-content:center;
    align-items:center;
    padding:10px;
    margin:10px;

    `;
    const AddSymbol = styled.Text`
    font-size: 30px;
    font-weight:bold;
    color:#ffffff;
    `;
    const Container = styled.View`
    height:100%;
    background-color:#ffffff; 
    `;
  return (
    <View>
      <Container>
      <FloatingActionButton onPress={()=>navigation.navigate('SelectContact')}><AddSymbol>New chat</AddSymbol></FloatingActionButton>
      <FloatingActionButton onPress={()=>navigation.navigate('SelectMultipleContact')}><AddSymbol>Create New Group</AddSymbol></FloatingActionButton>
      </Container>

    </View>
  )
}

export default NewChat;