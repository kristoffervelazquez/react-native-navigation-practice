import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import MenuLateralBasico from './src/navigator/MenuLateralBasico';
// import TabsNavigator from './src/navigator/TabsNavigator';
import MenuLateral from './src/navigator/MenuLateral';


const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
      {/* <TabsNavigator /> */}
    </NavigationContainer>
  )
}

export default App