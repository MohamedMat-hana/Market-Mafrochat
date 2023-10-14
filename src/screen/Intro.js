import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
    BackHandler,
    Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

export default class Intro extends React.Component {
    constructor() {
        super(); {
            this.state = {
                screens: [
                    {
                        id: 1,
                        image: require("../Img/bed3.jpg"),
                        text: 'اهلا ومرحبا بك',
                        resizeMode:"cover"
                    },
                    {
                        id: 2,
                        image: require("../Img/bed2.jpg"),
                        text: 'لدينا افضل المفروشات العصرية',
                        resizeMode:"cover"
            
                    },
                    {
                        id: 3,
                        image: require("../Img/bed4.jpg"),
                        text: 'استمتع بكل ما هو جديد',
                        resizeMode:"cover"
            
                    },
                ],
                login: 0

            }
        }
    }
  
    componentDidMount() {
         this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );


    }
    backAction = () => {

        BackHandler.exitApp();
        return true;
    };

    componentWillUnmount() {
        this.backHandler.remove();
    }

      renderIntro = ({ item }) => {
        return (
            <View style={styles.each_screen_container_style}>
                <StatusBar
                    barStyle={'light-content'}
                    backgroundColor={"#141E46"}
                />
                <View style={styles.each_img_style}>
                    <Image
                        source={item.image}
                        style={{
                            borderRadius:30, width: "70%", height: "50%",
                        }}
                        resizeMode={item.resizeMode}
                    />
                </View>
                <View style={styles.view_for_text_under_img_style}>
                    <Text style={styles.text_under_each_img_style}>{item.text}</Text>
                </View>
            </View>
        );
    };
      rendernextbuttom = () => {
        return (
            <View style={styles.botton_style}>
                <Text style={styles.text_style}>التالي</Text>
            </View>
        );
    };
      renderdone = () => {
        return (
            <TouchableOpacity
                style={styles.botton_style}
                onPress={() =>
                    //this.set_intro(1),
                    {
                        // this.store_Count();
                        this.props.navigation.navigate("Drawarnav")

                    }
                }>
                <Text style={styles.text_style}>تم</Text>
            </TouchableOpacity>
        );
    };
    renderskipbuttom = () => {
        return (
            <TouchableOpacity
            style={styles.botton_style}
            onPress={() =>
                //this.set_intro(1),
                {
                    // this.store_Count();
                    this.props.navigation.navigate("Drawarnav")

                }
            }>        
                    <Text style={styles.text_style}>تخطي</Text>
            </TouchableOpacity>
        );
    };

    render() {
        return (
        <AppIntroSlider
            renderItem={this.renderIntro}
            data={this.state.screens}
            activeDotStyle={styles.slider_active_dot_style}
            renderNextButton={this.rendernextbuttom}
            renderDoneButton={this.renderdone}
            renderSkipButton={this.renderskipbuttom}
            showSkipButton

        />
        );
    }
}

const styles = StyleSheet.create({
    each_screen_container_style: {
        flex: 1,
        backgroundColor: "#FFF",
        // alignItems: 'center',
    },
    each_img_style: {
        // resizeMode:'contain',
        height: height/1.4,
        width: width,
        backgroundColor: "#141E46",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        alignItems: "center",
        justifyContent: 'center'
        // marginBottom: (20),
    },
    text_under_each_img_style: {
        marginVertical:20,
        color: "#141E46",
        fontSize: 25,
        fontFamily:"ReemKufiFun-Bold"
    },
    slider_active_dot_style: {
        backgroundColor: "#141E46",
        width: (25),
    },
    botton_style: {
        //marginTop: (10),
        padding: (1),
        backgroundColor: "#ddd",
        borderRadius: (15),
        width: (70),
        height: (40),
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_style: {
        color: "#000",
        fontSize: (18),
        fontFamily:"ReemKufiFun-Bold"

    },
    view_for_text_under_img_style: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
 