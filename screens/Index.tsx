import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
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

const Index = () => {
    const width = Dimensions.get('window').width;
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Container>
            <Carousel
                loop
                width={width}
                height={150}
                autoPlay={true}
                data={mainCarouselImages}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => setCurrentIndex(index)}
                renderItem={({ index }) => (
                    <CarouselItem>
                        <MainImage source={{ uri: mainCarouselImages[index].uri }} />
                    </CarouselItem>
                )}
            />
            <DotsContainer>
                {mainCarouselImages.map((_, index) => (
                    <Dot key={index} active={currentIndex === index} />
                ))}
            </DotsContainer>

            <Heading>Other Services</Heading>

            <OtherServicesScroll horizontal showsHorizontalScrollIndicator={false}>
                {otherServicesImages.map((image) => (
                    <OtherServiceContainer key={image.id}>
                        <ServiceImage source={{ uri: image.uri }} />
                    </OtherServiceContainer>
                ))}
            </OtherServicesScroll>
        </Container>
    );
};

// Styled Components
const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #FFFFFF; /* Match background color */
    padding: 16px;
`;

const CarouselItem = styled.View`
    justify-content: center;
    align-items: center;
`;

const MainImage = styled.Image`
    width: 342px;
    height: 150px;
    border-radius: 20px;
`;

const DotsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

const Dot = styled.View<{ active: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ active }) => (active ? '#007AFF' : '#CCCCCC')}; /* Use consistent primary color */
    margin: 0 4px;
`;

const Heading = styled.Text`
    font-size: 18px; /* Match FinancialInfoScreen heading size */
    font-weight: bold; /* Same font-weight */
    color: #333; /* Consistent text color */
    margin-top: 20px;
    text-align: left;
    width: 100%;
    padding-left: 16px;
    padding-top: 60px; /* Adjusted for better spacing */
    padding-bottom:30px;
`;

const OtherServicesScroll = styled.ScrollView`
    padding-left: 16px;
`;

const OtherServiceContainer = styled.View`
    margin-right: 16px;
`;

const ServiceImage = styled.Image`
    width: 230px;
    height: 150px;
    border-radius: 20px;
`;

export default Index;
