import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from "./src/pages/Menu"
import MenuDetail from './src/pages/MenuDetail/MenuDetail';
const Stack=createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='MenuPage' component={Menu} />
        <Stack.Screen name='DetailPage' component={MenuDetail} options={{headerShown:true,title:"Detail"}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  }

export default App