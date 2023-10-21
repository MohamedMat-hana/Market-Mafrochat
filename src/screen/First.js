import React, { useEffect } from 'react';
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
import { BackHandler } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const First = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      backHandler.remove();
    };
  }, []);

  const map = [
    {
      title: "مفرش",
      image: require('../Img/bed11.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed12.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed13.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed14.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed11.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed12.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed13.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed14.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed11.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed12.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed13.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed14.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed14.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed14.jpg'),
    },
    {
      title: "مفرش",
      image: require('../Img/bed14.jpg'),
    },
  ];

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={"#141E46"} />
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.first}>
            <Animatable.View
              animation="tada"
              duration={4000}
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
                    navigation.navigate("Elrab", {
                      name: item,
                    });
                  }}
                  style={styles.Button}
                  key={index}
                >
                  <Animatable.Image
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
      </ScrollView>
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

export default First;
