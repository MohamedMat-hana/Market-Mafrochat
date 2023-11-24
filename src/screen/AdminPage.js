import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

const AdminPage = () => {
  const [state, setState] = useState({});

  return (
    <>
      <View style={styles.container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust the background color
  },
});

export default AdminPage;
