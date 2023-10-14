import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Second from './Second'
import Contactus from './Contactus'
import Secondnav from './Secondnav'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default class Drawarnav extends React.Component {
  render() {
    return (
      <>
        <Tab.Navigator
          activeColor="#141E46"
          inactiveColor="#7D7C7C"

          barStyle={{
            // backgroundColor: '#15133C20',
            position: 'absolute',
            overflow: 'hidden',
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
          }}
        >
          <Tab.Screen
            options={{
              tabBarLabel: 'المفروشات',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bed-king" color={color} size={26} />
              ),
            }}
            name="Secondnav" component={Secondnav} />
          <Tab.Screen

            options={{
              tabBarLabel: 'فوط',
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="dolly-flatbed" color={color} size={20} />
              ),
            }}
            name="Second" component={Second} />
          <Tab.Screen
            options={{
              tabBarLabel: 'تواصل معنا',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="phone-classic" color={color} size={26} />
              ),
            }}
            name="Contactus" component={Contactus} />
        </Tab.Navigator>
      </>
    )
  }
}
