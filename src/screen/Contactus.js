import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
    Dimensions,
    BackHandler,
    ImageBackground,
    Linking

} from 'react-native';
import { WebView } from 'react-native-webview';
import * as Animatable from 'react-native-animatable';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');
export default class Contactus extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    // backAction = () => {

    //     BackHandler.exitApp()

    //     return true;
    // };

    // componentWillUnmount() {
    //     this.backHandler.remove();
    // }


    // componentDidMount() {
    //     this.backHandler = BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         this.backAction
    //     );

    // }


    render() {
        return (
            <>

                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor={"#15133C20"}
                />

                <Animatable.View

                    style={styles.header}>
                    <View style={styles.ViewText}>
                        <Text style={styles.Text}>تواصل معنا</Text>
                    </View>
                    <Animatable.View
                        animation="fadeIn"
                        duration={5000}

                        style={styles.first}>
                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL("tel:" + "+201096526436");
                            }}>
                            <MaterialCommunityIcons name="phone" color={"#16294e"} size={60} />

                        </TouchableOpacity>
                    </Animatable.View>
                    <Animatable.View
                        animation="fadeIn"
                        duration={5000}

                        style={styles.first}>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://www.facebook.com/profile.php?id=100090134973009&mibextid=LQQJ4d');
                        }}>
                            <MaterialCommunityIcons name="facebook" color={"#28346f"} size={60} />
                        </TouchableOpacity>
                    </Animatable.View>
                    <Animatable.View
                        animation="fadeIn"
                        duration={5000}

                        style={styles.first}>
                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL('https://api.whatsapp.com/send?phone=201096526436');
                            }}>
                            <MaterialCommunityIcons name="whatsapp" color={"#0e8623"} size={60} />

                        </TouchableOpacity>
                    </Animatable.View>
                    <View></View>
                </Animatable.View>







            </>
        )
    }

}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#141E46",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // flexDirection:'row'

    },
    first: {
        width: "80%",
        height: "20%",
        // flexDirection: 'row',
        justifyContent: 'center',
        // flexWrap: "wrap",
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: "#fff",
        // margin: 10,
        borderRadius: 7

    },
    ViewText: {
        // backgroundColor: "#000"
    },
    Text: {
        // marginBottom: 20,
        color: "#FFF",
        fontSize: 22,
        // fontWeight: "bold",
        alignSelf: "center",
        fontFamily: "ReemKufiFun-Bold",

    }
});
