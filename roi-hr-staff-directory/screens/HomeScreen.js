import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../Styles';

export default function HomeScreen({ navigation }) {
  const localImage = require ("../assets/greybackground.jpg");
  return (
    <ImageBackground source = {localImage} resizeMode ='stretch'  style={styles.mainContainer}>
      <Text style={styles.title}>Welcome to ROI Staff Directory</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StaffContacts')}>
        <Text style={styles.buttonText}>STAFF CONTACTS</Text>
      </TouchableOpacity>
       <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HRDocuments')}>
        <Text style={styles.buttonText}>HR DOCUMENTS</Text>
      </TouchableOpacity>
       <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StaffTraining')}>
        <Text style={styles.buttonText}>STAFF TRAINING</Text>
      </TouchableOpacity>
       <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NewsUpdates')}>
        <Text style={styles.buttonText}>NEWS AND UPDATES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>SETTINGS</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
