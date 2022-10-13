import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './AuthNavigation'
import HomeNavigation from './HomeNavigation'
import { GlobalContext } from '../../App'

const AppNavigation = () => {

    const {isLoggedIn,setisLoggedIn}= useContext(GlobalContext);
   
  return (
    <NavigationContainer>
        { 
        isLoggedIn ? <HomeNavigation/> : <AuthNavigation/>
        }
    </NavigationContainer>
  )
}

export default AppNavigation;