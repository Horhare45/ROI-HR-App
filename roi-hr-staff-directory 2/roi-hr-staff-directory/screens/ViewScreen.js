import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../Styles';

export default function ViewContact({ route, navigation }) {
    // Get contact data passed from previous screen
    const contact = route.params.contact;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viewing Contact Details</Text>
      <Text style={styles.contactField}>
        {"\n"}ID: <Text style={styles.contactText}>{contact.id}</Text>
      </Text>
      <Text style={styles.contactField}>
        Full Name: <Text style={styles.contactText}>{contact.name}</Text>
      </Text>
      <Text style={styles.contactField}>
        Phone: <Text style={styles.contactText}>{contact.phone}</Text>
      </Text>
      <Text style={styles.contactField}>
        Department: <Text style={styles.contactText}>{contact.department}</Text>
      </Text>
      <Text style={styles.contactField}>
        Street Address:{' '}
        <Text style={styles.contactText}>{contact.addressStreet}</Text>
      </Text>
      <Text style={styles.contactField}>
        City: <Text style={styles.contactText}>{contact.addressCity}</Text>
      </Text>
      <Text style={styles.contactField}>
        State: <Text style={styles.contactText}>{contact.addressState}</Text>
      </Text>
      <Text style={styles.contactField}>
        ZIP: <Text style={styles.contactText}>{contact.addressZip}</Text>
      </Text>
      <Text style={styles.contactField}>
        Country:
        <Text style={styles.contactText}>{contact.addressCountry}</Text>
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/boardRoom-unsplash.jpg')}
          style={styles.image}
        />
      </View>
    </View>
  );
}
