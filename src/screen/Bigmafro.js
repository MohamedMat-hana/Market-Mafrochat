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

const Bigmafro = () => {
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
      image: require('../Img/bed12.jpg'),
    },
    {
        title: "مفرdش",
        image: require('../Img/bed13.jpg'),
      },
      {
        title: "مفرش",
        image: require('../Img/bed12.jpg'),
      },
      {
        title: "مفرش",
        image: require('../Img/bed12.jpg'),
      },
      {
          title: "مفرش",
          image: require('../Img/bed12.jpg'),
        },
        {
          title: "مفرش",
          image: require('../Img/bed12.jpg'),
        },
        {
            title: "مفرش",
            image: require('../Img/bed12.jpg'),
          },
          {
              title: "مفرش",
              image: require('../Img/bed12.jpg'),
            },
            {
              title: "مفرش",
              image: require('../Img/bed12.jpg'),
            },
            {
                title: "مفرش",
                image: require('../Img/bed12.jpg'),
              },
              {
                  title: "مفرش",
                  image: require('../Img/bed12.jpg'),
                },
                {
                  title: "مفرش",
                  image: require('../Img/bed12.jpg'),
                },
                {
                    title: "مفرش",
                    image: require('../Img/bed12.jpg'),
                  },
                  {
                      title: "مفرش",
                      image: require('../Img/bed12.jpg'),
                    },
                    {
                      title: "مفرش",
                      image: require('../Img/bed12.jpg'),
                    },
                    
    // Add more items here...
  ];

  const renderItem = (item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.button}
      onPress={() => {
        navigation.navigate("Elrab", {
          name: item,
        });
      }}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <>
    <StatusBar barStyle={'light-content'} backgroundColor={"#141E46"} />
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.first}>
            <Animatable.View
              animation="rubberBand"
              duration={4000}
              style={styles.itemsWrapper}
            >
              {map.map(renderItem)}
            </Animatable.View>
          </View>
          <View style={styles.spacing}></View>
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
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: "wrap",
    alignItems: 'center',
    alignSelf: "center",
    backgroundColor: "#141E46",
  },
  button: {
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
  text: {
    marginTop: 10,
    color: "#141E46",
    fontSize: 18,
    alignSelf: "center",
    fontFamily: "Generator Black",
  },
  itemsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  spacing: {
    height: 80,
  },
});

export default Bigmafro;
