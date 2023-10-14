// Create a file SplashScreen.js
import React from 'react';
import { View, Image, StyleSheet ,  StatusBar,  
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
}
componentDidMount() {
    this.get_Count()
}
get_Count = async () => {  
    // let coun = 0

  // try {
    setTimeout(() => {
      // if (coun == 1) {
  // this.props.navigation.navigate("Drawarnav")
          this.props.navigation.navigate("Intro")

      // } else if (coun == 0){

      // }
  }, 3000)
    // return await AsyncStorage.getItem('login')
    
  // } catch(e) {
    // read error
  // }

  // console.log('Done.')
}
// async get_Count(value) {
  
//   let coun = await AsyncStorage.getItem("login")
//   // alert(coun)
//   setTimeout(() => {
//       if (coun == 1) {
//   this.props.navigation.navigate("Drawarnav")

//       } else if (coun == 0){
//           this.props.navigation.navigate("Intro")

//       }
//   }, 3000)
// }

render() {
  return (
      <>
            <StatusBar
                    barStyle={'light-content'}
                    backgroundColor={"#000"}
                />
<Animatable.View style={styles.container}
      // animation="fadeIn" // Choose an animation from the library
      // duration={2000} // Duration of the animation (milliseconds)

    >
      <Animatable.Image
            animation="bounceIn" // Choose an animation from the library
            duration={6000}
        source={require("../Img/Logo.png")}
        style={styles.image}
      />
    </Animatable.View>
    </>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141E46', // Customize background color
  },
  image: {
    borderRadius:50,
    width: 300, // Customize image width
    height: 300, // Customize image height
  },
});

