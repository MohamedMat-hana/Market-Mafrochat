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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const BigFoat = () => {
    const navigation = useNavigation();

    const map = [

        {
            title: "1فوطه",
            image: require('../Img/bed8.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed9.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed10.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed8.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed9.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed10.jpg'),
        }, {
            title: "1فوطه",
            image: require('../Img/bed8.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed9.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed10.jpg'),
        }, {
            title: "1فوطه",
            image: require('../Img/bed8.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed9.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed10.jpg'),
        }, {
            title: "1فوطه",
            image: require('../Img/bed8.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed9.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed10.jpg'),
        }, {
            title: "1فوطه",
            image: require('../Img/bed8.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed9.jpg'),
        },
        {
            title: "1فوطه",
            image: require('../Img/bed10.jpg'),
        },
    ];

    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={"#15133C20"} />
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.first}>

                        <Animatable.View
                            animation="rubberBand"
                            duration={5000}

                            style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                alignItems: "center",
                                alignSelf: "center",
                                justifyContent: "center",
                            }}
                        >
                            {map.map((item, index) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("elrab", {
                                            name: item,
                                        });
                                    }}
                                    style={styles.Button}
                                    key={index}
                                >
                                    <Image
                                        animation="bounceIn"
                                        duration={6000}
                                        source={item.image}
                                        style={styles.image}
                                    />
                                    <Text style={styles.Text}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </Animatable.View>
                    </View>
                    <View style={{ height: 80 }}></View>

                </View>
            </ScrollView >
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#15133C20",
    },
    first: {
        width: width,
        // height: height,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: "wrap",
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: "#141E46",
    },
    Button: {
        width: width / 2.4,
        height: height / 5,
        padding: 0,
        borderRadius: 7,
        margin: 10,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#fff",
    },
    image: {
        resizeMode: 'contain',
        height: "60%",
        alignItems: "center",
        justifyContent: "center",
    },
    Text: {
        marginTop: 10,
        color: "#141E46",
        fontSize: 18,
        alignSelf: "center",
        fontFamily: "Generator Black",
    },
});

export default BigFoat;
