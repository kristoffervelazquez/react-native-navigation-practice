import 'react-native-gesture-handler';
import React, { Children } from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import MenuLateralBasico from './src/navigator/MenuLateralBasico';
// import TabsNavigator from './src/navigator/TabsNavigator';
import MenuLateral from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        {/* <TabsNavigator /> */}
        <MenuLateral />
      </AppState>

    </NavigationContainer>
  )
}



const AppState = ({ children }: { children: JSX.Element }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
export default App