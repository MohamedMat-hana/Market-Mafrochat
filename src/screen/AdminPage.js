

import React, { useState, useCallback, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Image,
  SafeAreaView,
  RefreshControl
} from 'react-native';
import axios from 'axios';
import { COLORS, MARGIN, FONTS, FONTSFAMILY, RADIUS } from '../customs/Constant';
const { width, height } = Dimensions.get('window');

import { useNavigation } from '@react-navigation/native';
const AdminPage = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const handledata = async () => {
    try {
      const response = await axios.post(
        'https://market-app-server.onrender.com/api/data',
        {
          name,
          price,
          avatar: null
        }
      );
      if (response && response.data) {
        Alert.alert('Sign Up Successful', response.data.dataOfBack);
      } else {
        Alert.alert('Error=', 'Sign-up failed. Please try again.');
      }
    } catch (error) {

      const errorMessage =
        error.response.data.message || 'يرجي ادخال المنتج';

      Alert.alert('خطاْ', errorMessage);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView >
          <View style={styles.container1}>

            <Text style={styles.headertext1}>اضافة و حذف</Text>




            <TextInput
              style={styles.inputsec}
              placeholder={"الاسم"}
              placeholderTextColor={COLORS.gray}
              onChangeText={(text) => setname(text)}
              value={name}
            ></TextInput>

            <TextInput
              style={styles.inputsec}
              placeholder={"السعر"}
              placeholderTextColor={COLORS.gray}
              onChangeText={(text) => setprice(text)}
              value={price}
              maxLength={5}
              keyboardType="number-pad"
            ></TextInput>
            <TouchableOpacity style={styles.button}
              onPress={() => {
                handledata()
              }}>
              <Text style={styles.buttonText}>اضافه</Text>
            </TouchableOpacity>

          </View>
          <View>

            {Add()}
          </View>
        </ScrollView>
      </View>
    </>
  );
};
const Add = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState(null);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetch("https://market-app-server.onrender.com/api/data")
      .then((response) => response.json())
      .then((responseJson) => {
        setIsLoading(false);
        setDataSource(responseJson.data);
      })

      .catch((err) => {
        console.log(err, "err");
      });
  }, []);
  const DeleteData = (id, e) => {
    console.log("Deleting data with id:", id);

    axios.delete(`https://market-app-server.onrender.com/api/data/${id}`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        console.log("Data is deleted");
        // Update the state after successful deletion
        setDataSource(dataSource.filter(item => item._id !== id));
      })
      .catch((error) => {
        console.log("Error deleting data:", error);
      });
  };
  const renderItem = useCallback(
    (item, index) => (

      <View
        key={index}

        style={styles.button1}
        onPress={() => {
          console.log(item)
        }}
      >
        <TouchableOpacity onPress={(e) => DeleteData(item._id, e)}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <Image source={{ uri: item.avatar }} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>

      </View>
    ),
    [navigation]
  );

  if (isLoading) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </>
    );
  } else if (!dataSource || !dataSource.dataOfBack) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <Text style={{ color: COLORS.red }}>لا يوجد منتجات</Text>
        </View>
      </>
    );
  }

  else {
    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={COLORS.main} />
        <ScrollView >
          <View style={styles.header}>
            <View style={styles.first}>
              <View style={styles.itemsWrapper}>{dataSource.dataOfBack.map(renderItem)}</View>
            </View>
            <View style={styles.spacing}></View>
          </View>
        </ScrollView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    backgroundColor: COLORS.main, // Adjust the background color
  },
  container1: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  headertext1: {
    color: COLORS.white,
    fontSize: 40,
    alignSelf: 'center',
    fontFamily: FONTSFAMILY.Main,

  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsec: {
    width: width / 1.5,
    fontSize: 20,
    marginBottom: 8,
    paddingHorizontal: 10,
    borderRadius: 15,
    color: COLORS.white,
    backgroundColor: COLORS.facebook,
    fontFamily: FONTSFAMILY.Generator_Black,
    // alignSelf: "stretch",
    // alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "right"
  },
  button: {
    width: width / 1.5,
    height: height / 13,
    backgroundColor: COLORS.facebook,
    borderColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: FONTSFAMILY.Main,

  },
  header: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  containerLoading: {
    flex: 1,
    // backgroundColor: COLORS.main,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.main,
  },
  button1: {
    width: width / 2.4,
    height: height / 5,
    padding: 0,
    borderRadius: RADIUS.xxsRadius,
    margin: MARGIN.xsMargin,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  image: {
    resizeMode: 'contain',
    width: "60%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: MARGIN.xsMargin,
    color: COLORS.main,
    fontSize: FONTS.h7,
    alignSelf: 'center',
    fontFamily: 'Generator Black',
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

export default AdminPage;
