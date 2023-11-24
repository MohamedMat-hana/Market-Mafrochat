import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screen/Splash.js'
import Intro from './src/screen/Intro.js'
import Drawarnav from './src/screen/Drawarnav.js'
import Signup from './src/screen/Ath/Signup.js'
import Login from './src/screen/Ath/Login.js'
import { Image } from 'react-native'
import AdminPage from './src/screen/AdminPage.js'
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    //  <Signup />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}
          options={{ headerShown: false }} />
        <Stack.Screen name="Intro" component={Intro}
          options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup}
          options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }} />
          <Stack.Screen name="AdminPage" component={AdminPage}
          options={{ headerShown: false }} />
        <Stack.Screen name="Drawarnav" component={Drawarnav}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;