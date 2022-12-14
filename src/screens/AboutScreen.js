import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/Theme';
const AboutScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>AboutScreen</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: COLORS.lightBlack,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
