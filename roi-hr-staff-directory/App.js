import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ContactsScreen from './screens/ContactsScreen';
import ViewContact from './screens/ViewScreen';
import styles from './Styles';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Trebuchet: require('./assets/fonts/TREBUC.TTF'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('./assets/ROI_logo.png')}
                style={styles.logo}
              />
            </TouchableOpacity>
          ),
        })}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="StaffContacts" component={ContactsScreen} />
        <Stack.Screen name="ViewContact" component={ViewContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
