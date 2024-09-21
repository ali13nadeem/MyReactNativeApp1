import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen = ({ navigation }: any) => {
  const [homeAddress, setHomeAddress] = useState('');
  const [rentOrOwn, setRentOrOwn] = useState('Rent');
  const [monthlyPayment, setMonthlyPayment] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleContinue = () => {
    if (homeAddress === '' || !monthlyPayment) {
      Alert.alert('Please fill all required fields');
    } else {
      // Navigate to FinancialInfoScreen
      navigation.navigate('FinancialInfoScreen', {
        homeAddress,
        rentOrOwn,
        monthlyPayment: monthlyPayment.toISOString().split('T')[0], // Convert to YYYY-MM-DD format
      });
    }
  };

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || monthlyPayment;
    setShowDatePicker(Platform.OS === 'ios');
    setMonthlyPayment(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Housing Information</Text>
        <Text style={styles.requiredFields}>*indicates a required field</Text>

        <Text style={styles.label}>Home Address *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter home address"
          value={homeAddress}
          onChangeText={setHomeAddress}
        />

        <Text style={styles.label}>Rent or Own *</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setRentOrOwn('Rent')}
          >
            <View style={[styles.radioCircle, rentOrOwn === 'Rent' && styles.selectedRadioCircle]}>
              {rentOrOwn === 'Rent' && <View style={styles.selectedInnerCircle} />}
            </View>
            <Text style={styles.radioButtonText}>Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setRentOrOwn('Own')}
          >
            <View style={[styles.radioCircle, rentOrOwn === 'Own' && styles.selectedRadioCircle]}>
              {rentOrOwn === 'Own' && <View style={styles.selectedInnerCircle} />}
            </View>
            <Text style={styles.radioButtonText}>Own</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Monthly Rent / Mortgage Payment *</Text>
        <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.datePickerText}>Select Date: {monthlyPayment.toISOString().split('T')[0]}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={monthlyPayment}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      <Button title="Continue" onPress={handleContinue} color="#6200EE" style={styles.continueButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // Pushes the button to the bottom
  },
  content: {
    flex: 1, // Takes up remaining space above the button
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  requiredFields: {
    fontSize: 14,
    color: 'red',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16, // Space between buttons
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  selectedRadioCircle: {
    borderColor: '#6200EE',
  },
  selectedInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6200EE',
  },
  radioButtonText: {
    fontSize: 16,
    color: '#000',
  },
  datePickerButton: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  datePickerText: {
    fontSize: 16,
    color: '#000',
  },
  continueButton: {
    marginTop: 16, // Space from content
  },
});

export default HomeScreen;
