import React, { useState } from 'react';
import { Dimensions, Image, View, StyleSheet, Text, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const mainCarouselImages = [
  { id: '1', uri: 'https://via.placeholder.com/342x150.png?text=Main+Image+1' },
  { id: '2', uri: 'https://via.placeholder.com/342x150.png?text=Main+Image+2' },
  { id: '3', uri: 'https://via.placeholder.com/342x150.png?text=Main+Image+3' },
];

const otherServicesImages = [
  { id: '1', uri: 'https://via.placeholder.com/150x150.png?text=Service+Image+1' },
  { id: '2', uri: 'https://via.placeholder.com/150x150.png?text=Service+Image+2' },
  { id: '3', uri: 'https://via.placeholder.com/150x150.png?text=Service+Image+3' },
];

function Index() {
    const width = Dimensions.get('window').width;
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <View style={styles.container}>
            {/* Main Carousel */}
            <Carousel
                loop
                width={width}
                height={150} // Height for main carousel
                autoPlay={true}
                data={mainCarouselImages} // Main carousel images
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => setCurrentIndex(index)} // Update index on snap
                renderItem={({ index }) => (
                    <View style={styles.carouselItem}>
                        <Image
                            source={{ uri: mainCarouselImages[index].uri }}
                            style={styles.mainImage}
                        />
                    </View>
                )}
            />

            {/* Dots for Carousel */}
            <View style={styles.dotsContainer}>
                {mainCarouselImages.map((_, index) => (
                    <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
                ))}
            </View>

            {/* Other Services Heading */}
            <Text style={styles.heading}>Other Services</Text>

            {/* Left-Aligned Services Carousel */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.carouselContainer}
            >
                {otherServicesImages.map((image) => (
                    <View key={image.id} style={styles.otherServiceContainer}>
                        <Image
                            source={{ uri: image.uri }}
                            style={styles.serviceImage}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative', // Set position relative
              width: '100%', // Full width
              height: '100%', // Full height
              alignItems: 'flex-start',
              padding: 0, // Remove overall padding
            alignItems: 'center'
        },
    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainImage: {
        width: 342,
        height: 150,
        borderRadius: 20,
    },
    heading: {
        textAlign: 'left',
        fontSize: 20,
        marginVertical: 0, // Ensure no vertical margin
        fontWeight: 'bold',
        width: '100%',
        paddingLeft: 16,
        paddingTop: 120, // Adjust to bring closer
    },
    carouselContainer: {
        paddingLeft: 16, // Padding for the left side
        paddingBottom: 0, // No bottom padding for the carousel
    },
    otherServiceContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: 16, // Spacing between images
    },
    serviceImage: {
        width: 230,
        height: 150,
        borderRadius: 20,
        margin: 0,
        padding: 0,
        marginBottom: 0, // Ensure no bottom margin for images
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 0, // Reduce space between dots and heading
        paddingVertical: 0, // No vertical padding
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc', // Inactive dot color
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#000', // Active dot color
    },
});

export default Index;






