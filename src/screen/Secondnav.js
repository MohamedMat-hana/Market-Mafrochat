import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
  Modal,
  ImageBackground,
  BackHandler
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import First from './First.js'
import Elrab from './Elrab.js'
import Bigmafro from './Bigmafro.js'
const { width, height } = Dimensions.get('window');


function Drink() {
  const [activeTab, setActiveTab] = useState("المفروشات الكبيرة")
  return (
   
   <>
    <StatusBar barStyle={'light-content'} backgroundColor={"#141E46"} />

    <Animatable.View
      // animation="pulse"
      duration={1000}
      style={{ flex: 1, backgroundColor: '#141E46', }}>
      <View style={styles.headerbar}>
        <Text style={styles.textheader}>
          المفروشات
        </Text>
      </View>
      <ScrollView>
        <View style={{
          flexDirection: "row",
          alignSelf: "flex-start",
          marginLeft: 5,
          marginVertical: 15,
          alignItems: "center"

        }}>
          <HeaderButton
            text="المفروشات الكبيرة"
            btnColor="#000"
            textColor="#fff"
            activeTab={activeTab}
            setActiveTab={setActiveTab} />
          <HeaderButton
            text="المفروشات الصغيره"
            btnColor="#fff"
            textColor="#000"
            activeTab={activeTab}
            setActiveTab={setActiveTab} />

        </View>
        {activeTab == "المفروشات الكبيرة" ? (
          <Button />
        ) : (
          <Buttonsc />
        )
        }
      </ScrollView>
    </Animatable.View>
    </>
  );
}
const HeaderButton = (props) => (
  <>
    <TouchableOpacity style={{
      backgroundColor: props.activeTab == props.text ? '#fff' : '#141E46',
      paddingVertical: 6,
      paddingHorizontal: 22,
      borderRadius: 25,
      marginHorizontal: 5
    }}
      onPress={() => { props.setActiveTab(props.text) }}>
      <Text
        style={{
          fontFamily: "ReemKufiFun-Bold",
          color: props.activeTab == props.text ? "#141E46" : "#fff",
          fontSize: 15,
          // fontWeight: "900"
        }}>{props.text}</Text>

    </TouchableOpacity>
  </>

)
const Button = (props) => (
  <>
    <Bigmafro />
  </>

)
const Buttonsc = (props) => (
  <>

    <First />

  </>

)
const styles = StyleSheet.create({
  headerbar: {
    backgroundColor: "#141E46",
    height: height / 10,
    justifyContent: "center",
    alignItems: "center"
  },
  textheader: {
    fontSize: 25,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "Generator Black",
    // marginLeft: "50%",
  }

});
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Secondnav() {
  return (
    <Stack.Navigator initialRouteName="Drink">
      <Stack.Screen name="Drink" component={Drink}
        options={{ headerShown: false }} />
      <Stack.Screen name="Elrab" component={Elrab}
        options={{ headerShown: false }} />
      <Stack.Screen name="Bigmafro" component={Bigmafro}
        options={{ headerShown: false }} />
      <Stack.Screen name="First" component={First}
        options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

export default Secondnav;