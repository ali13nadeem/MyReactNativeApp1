import React from 'react';
import { ScrollView } from 'react-native';
import CarouselComponent from './CarouselComponent'; // Adjust the path if needed
import styled from '@emotion/native';

// Define the main carousel images here
const mainCarouselImages = [
  {
    key: '1',
    imageUrl: 'https://th.bing.com/th?id=OIP.8UeIFPMYwIErE1ShRYB9QAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  },
  {
    key: '2',
    imageUrl: 'https://via.placeholder.com/342x200/3f51b5/ffffff?text=Slide+2',
  },
  {
    key: '3',
    imageUrl: 'https://via.placeholder.com/342x200/4caf50/ffffff?text=Slide+3',
  },
  {
      key: '4',
      imageUrl: 'https://via.placeholder.com/342x200/4caf50/ffffff?text=Slide+4',
    },
];

// Define other services images here (for the horizontal scroll)
const otherServicesImages = [
  {
    id: '1',
    uri: 'https://via.placeholder.com/150x150.png?text=Service+Image+1',
  },
  {
    id: '2',
    uri: 'https://via.placeholder.com/150x150.png?text=Service+Image+2',
  },
  {
    id: '3',
    uri: 'https://via.placeholder.com/150x150.png?text=Service+Image+3',
  },
];

const PageContainer = () => (
  <Container>
    {/* Pass mainCarouselImages to the CarouselComponent */}
    <CarouselComponent content={mainCarouselImages} dotsPosition="bottom" />

    {/* Horizontal scroll for service images */}
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {otherServicesImages.map((image) => (
        <ServiceContainer key={image.id}>
          <ServiceImage source={{ uri: image.uri }} />
        </ServiceContainer>
      ))}
    </ScrollView>
  </Container>
);

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

const ServiceContainer = styled.View`
  margin-left: 16px;
`;

const ServiceImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 20px;
`;

export default PageContainer;
