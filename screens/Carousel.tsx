import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TextInput, Button, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // Ensure you have react-navigation installed

// Define a type for the navigation prop
type CarouselProps = {
  navigation: StackNavigationProp<any>; // Adjust the generic type based on your navigation stack
};

const { width } = Dimensions.get('window');

const images = [
  { id: '1', uri: 'https://via.placeholder.com/342x150.png?text=Image+1' },
  { id: '2', uri: 'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png' },
  { id: '3', uri: 'https://via.placeholder.com/342x150.png?text=Image+3' },
  { id: '4', uri: 'https://via.placeholder.com/342x150.png?text=Image+4' },
];

const Carousel: React.FC<CarouselProps> = ({ navigation }) => {
  const [inputText, setInputText] = useState('');

  const handleContinue = () => {
    navigation.navigate('Index');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {images.map((image) => (
          <View key={image.id} style={styles.imageContainer}>
            <Image source={{ uri: image.uri }} style={styles.image} />
          </View>
        ))}
      </ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={inputText}
        onChangeText={setInputText}
      />

      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Stack elements vertically
    alignItems: 'center',    // Center horizontally
    paddingTop: 20,          // Top padding to move carousel down slightly
  },
  scrollView: {
    height: 150,             // Fixed height for the carousel
    marginBottom: 20,        // Space between carousel and input
  },
  imageContainer: {
    width: 342,              // Fixed width for the carousel item
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 342,
    height: 150,
    borderRadius: 10,        // Slightly rounded borders
    resizeMode: 'cover',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    width: '80%',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '80%',            // Align button width with input field
  },
});

export default Carousel;
