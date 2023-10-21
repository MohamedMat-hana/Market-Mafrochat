import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  Linking
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const contactMethods = [
  {
    name: 'Phone',
    icon: 'phone',
    color: '#16294e',
    link: 'tel:+201096526436',
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    color: '#28346f',
    link: 'https://www.facebook.com/profile.php?id=100090134973009&mibextid=LQQJ4d',
  },
  {
    name: 'WhatsApp',
    icon: 'whatsapp',
    color: '#0e8623',
    link: 'https://api.whatsapp.com/send?phone=201096526436',
  },
];

export default class Contactus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={'#141E46'} />

        <Animatable.View style={styles.header}>
          <View style={styles.ViewText}>
            <Text style={styles.Text}>تواصل معنا</Text>
          </View>
          {contactMethods.map((method, index) => (
            <Animatable.View
              key={index}
              animation="fadeIn"
              duration={5000}
              style={styles.first}
            >
              <TouchableOpacity onPress={() => Linking.openURL(method.link)}>
                <MaterialCommunityIcons name={method.icon} color={method.color} size={60} />
              </TouchableOpacity>
            </Animatable.View>
          ))}
          <View></View>
        </Animatable.View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#141E46',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  first: {
    width: '80%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  ViewText: {},
  Text: {
    color: '#FFF',
    fontSize: 25,
    alignSelf: 'center',
    fontFamily: 'ReemKufiFun-Bold',
  },
});
