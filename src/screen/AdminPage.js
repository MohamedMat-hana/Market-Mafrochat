

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
  PermissionsAndroid,
  Button
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, MARGIN, FONTS, FONTSFAMILY, RADIUS } from '../customs/Constant';
const { width, height } = Dimensions.get('window');
import RNFetchBlob from 'react-native-fetch-blob';
import * as ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
const AdminPage = ({ navigation }) => {
  const [photoBase64, setPhotoBase64] = useState(null);
  const [photoData, setPhotoData] = useState(null);
  const [photoUri, setPhotoUri] = useState("");
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const store_Count = async () => {
    await AsyncStorage.setItem("login", '2')
    console.log("done");
    // this.props.navigation.navigate("Liberarylogorsing")

  }
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        console.log(res.customButton);
      } else {
        // alert(res.assets[0].base64);
        setPhotoBase64(res.assets[0].base64);
        console.log(res.assets[0]);
        setPhotoData(res.assets[0]);
        console.log(res.assets[0].uri);

        setPhotoUri(res.assets[0].uri);
      }
    });
  };

  const handleUpload = () => {
    const data = new FormData();
    console.log(photoUri);
    data.append('name', 'name');
    data.append('price', 'price');
    data.append('avatar', photoUri);

    RNFetchBlob.fetch(
      'POST',
      'https://market-app-server.onrender.com/api/data',
      {
        'Content-Type': 'multipart/form-data',
      },
      data,
    )
      .then(response => {
        Alert.alert('Upload Response:===', response);
      })
      .catch(error => {
        Alert.alert('Upload Error:', error);
      });
  }; return (
    <>
      <View style={styles.container}>
        <ScrollView >
          <View style={styles.container1}>
            <View style={{ flexDirection: "row",
            alignItems:"center",
            justifyContent:"space-evenly",
            // backgroundColor:"#000",
            width:width }}>
              <View style={{width:50}}> 
              </View>
              <Text style={styles.headertext1}>اضافة و حذف</Text>

              <TouchableOpacity onPress={() => {
                navigation.navigate('Drawarnav');
              }}
              style={{
                borderRadius:10,
                padding:5,
                backgroundColor:COLORS.white
              }}
              >
              <Text style={[styles.headertext1,{
                fontSize:10,
                fontWeight:"bold",
                color:COLORS.main}]}>الي صفحة العرض</Text>

              </TouchableOpacity>
            </View>



            <TextInput
              style={styles.inputsec}
              placeholder={"الاسم"}
              placeholderTextColor={COLORS.gray}
              onChangeText={(text) => setname(text)}
              value={name}
            />

            <TextInput
              style={styles.inputsec}
              placeholder={"السعر"}
              placeholderTextColor={COLORS.gray}
              onChangeText={(text) => setprice(text)}
              value={price}
              maxLength={5}
              keyboardType="number-pad"
            />


            <TouchableOpacity
              style={styles.launchCamerabutton}
              onPress={() => { launchCamera()}}  >
              <Text style={styles.launchCamerabuttonText}>ادخل صوره</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button}
              onPress={() => {
                 store_Count(),
                handleUpload()
                 
              }}>
              <Text style={styles.buttonText}>اضافه</Text>
            </TouchableOpacity>

            {photoUri &&
              <Image source={{ uri: photoUri }}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
              />}


          </View>
          <View>
            <Text style={[styles.headertext1, { fontSize: FONTS.h1 }]}>_________________</Text>

            <Text style={[styles.headertext1, { fontSize: FONTS.h1 }]}>المنتجات</Text>

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
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: "center",
          // flexWrap: 'wrap',
          // backgroundColor:"#000",
          height: "50%"
        }}>
          <TouchableOpacity onPress={(e) => DeleteData(item._id, e)}>
            <MaterialCommunityIcons name="trash-can" color={COLORS.main} size={25} />

          </TouchableOpacity>
          <Image source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.axviLVY_r1DwopfTreg1CAHaE1&pid=Api&P=0&h=220" }}
            style={styles.image} />

        </View>
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
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: FONTSFAMILY.Main,

  },
  launchCamerabutton: {
    width: width / 1.5,
    height: height / 13,
    backgroundColor: COLORS.facebook,
    // borderColor: COLORS.white,
    borderRadius: 10,
    // borderWidth: 1,
    marginBottom: 8,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  launchCamerabuttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: FONTSFAMILY.Generator_Black,

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
    height: height / 6,
    borderRadius: RADIUS.xxsRadius,
    margin: MARGIN.xsMargin,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: 4
  },
  image: {
    resizeMode: 'contain',
    width: "80%",
    height: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: MARGIN.xsMargin,
    color: COLORS.white,
    fontSize: FONTS.h7,
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'center',
    fontFamily: 'Generator Black',
    backgroundColor: COLORS.main
  },
  text1: {
    color: COLORS.white,
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
