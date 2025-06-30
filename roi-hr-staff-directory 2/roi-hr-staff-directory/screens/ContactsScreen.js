import { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alert from '../alert';
import styles from '../Styles';

export default function StaffContacts({ navigation }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [addressStreet, setAddressStreet] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressState, setAddressState] = useState('');
  const [addressZip, setAddressZip] = useState('');
  const [addressCountry, setAddressCountry] = useState('');

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const saveContacts = async (newContacts) => {
    try {
      await AsyncStorage.setItem('contacts', JSON.stringify(newContacts));
    } catch (error) {
      console.error('Error saving contacts:', error);
    }
  };

  const loadContacts = async () => {
    try {
      const savedContacts = await AsyncStorage.getItem('contacts');
      if (savedContacts !== null) {
        setContacts(JSON.parse(savedContacts));
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
    }
  };

  const handleAddContact = () => {
    /* Validation - check if all fields are filled*/
    if (
      id.trim() !== '' &&
      name.trim() !== '' &&
      phone.trim() !== '' &&
      department.trim() !== '' &&
      addressStreet.trim() !== '' &&
      addressCity.trim() !== '' &&
      addressState.trim() !== '' &&
      addressZip.trim() !== '' &&
      addressCountry.trim() !== ''
    ) {
      const newContact = {
        id,
        name,
        phone,
        department,
        addressStreet,
        addressCity,
        addressState,
        addressZip,
        addressCountry,
      };

      const newContacts = contacts.concat(newContact);
      setContacts(newContacts);
      saveContacts(newContacts);

      /* Reset form fields*/
      setId('');
      setName('');
      setPhone('');
      setDepartment('');
      setAddressStreet('');
      setAddressCity('');
      setAddressState('');
      setAddressZip('');
      setAddressCountry('');

      alert('Success', 'Contact has been added successfully.');
    } else {
      return alert('Missing Fields', 'Please fill out all the fields.');
    }
  };

  const viewContactHandler = (contact) => {
    navigation.navigate('ViewContact', { contact });
  };

  const deleteContact = (index) => {
    let updatedContacts = contacts.concat();
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
    saveContacts(updatedContacts);
  };

  const deleteHandler = (index) => {
    return alert(
      'Delete Contact',
      'Are you sure you want to delete ' + contacts[index].name + '?',
      [
        {
          text: 'Yes',
          onPress: () => deleteContact(index),
        },
        {
          text: 'No',
        },
      ]
    );
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Staff Contacts</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter ID"
          placeholderTextColor=" #262626"
          value={id}
          onChangeText={(text) => setId(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor=" #262626"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Phone"
          placeholderTextColor=" #262626"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Department"
          placeholderTextColor=" #262626"
          value={department}
          onChangeText={(text) => setDepartment(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Address: Street"
          placeholderTextColor=" #262626"
          value={addressStreet}
          onChangeText={(text) => setAddressStreet(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Address: City"
          placeholderTextColor=" #262626"
          value={addressCity}
          onChangeText={(text) => setAddressCity(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Address: State"
          placeholderTextColor=" #262626"
          value={addressState}
          onChangeText={(text) => setAddressState(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Address: ZIP"
          placeholderTextColor=" #262626"
          value={addressZip}
          onChangeText={(text) => setAddressZip(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Address: Country"
          placeholderTextColor=" #262626"
          value={addressCountry}
          onChangeText={(text) => setAddressCountry(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddContact}>
          <Text style={styles.buttonText}>ADD CONTACT DETAILS</Text>
        </TouchableOpacity>
        <FlatList
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.contactItem}>
              <Text style={styles.contactField}>
                ID: <Text style={styles.contactText}>{item.id}</Text>
              </Text>
              <Text style={styles.contactField}>
                Full Name: <Text style={styles.contactText}>{item.name}</Text>
              </Text>
              <Text style={styles.contactField}>
                Phone: <Text style={styles.contactText}>{item.phone}</Text>
              </Text>
              <Text style={styles.contactField}>
                Department:{' '}
                <Text style={styles.contactText}>{item.department}</Text>
              </Text>
              <Text style={styles.contactField}>
                Street Address:{' '}
                <Text style={styles.contactText}>{item.addressStreet}</Text>
              </Text>
              <Text style={styles.contactField}>
                City: <Text style={styles.contactText}>{item.addressCity}</Text>
              </Text>
              <Text style={styles.contactField}>
                State:{' '}
                <Text style={styles.contactText}>{item.addressState}</Text>
              </Text>
              <Text style={styles.contactField}>
                ZIP: <Text style={styles.contactText}>{item.addressZip}</Text>
              </Text>
              <Text style={styles.contactField}>
                Country:
                <Text style={styles.contactText}>{item.addressCountry}</Text>
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => viewContactHandler(item)}>
                  <Text style={styles.actionText}>VIEW CONTACT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  key={index}
                  style={styles.actionButton}
                  onPress={() => deleteHandler(index)}>
                  <Text style={styles.actionText}>DELETE CONTACT</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
