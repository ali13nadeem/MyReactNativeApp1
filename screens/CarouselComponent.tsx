import React, { useState } from 'react';
import styled from '@emotion/native';
import { Dimensions, SafeAreaView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

type CarouselContent = {
  key: string;
  imageUrl: string;
};

type CarouselComponentProps = {
  content: CarouselContent[];
  dotsPosition: 'top' | 'bottom';
};

const CarouselComponent = ({ content, dotsPosition }: CarouselComponentProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('screen').width;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        {dotsPosition === 'top' && (
          <DotContainer>
            {content.map((_, index) => (
              <Dot key={index} active={activeIndex === index} />
            ))}
          </DotContainer>
        )}

        <CarouselContainer>
          <Carousel
            loop
            autoPlay
            autoPlayInterval={3000} // Slide every 3 seconds
            width={screenWidth}
            height={150}
            data={content}
            scrollAnimationDuration={1000}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 70, // Parallax offset for all images
            }}
            onSnapToItem={(index) => setActiveIndex(index)} // Update active dot
            renderItem={({ item, index }) => (
              <Slide
                style={{
                  marginLeft: index === 0 ? screenWidth * 0.05 : 5, // Reduced left margin for the first image
                  marginRight: index === content.length - 1 ? screenWidth * 0.05 : 5, // Reduced right margin for the last image
                }}
              >
                <Image source={{ uri: item.imageUrl }} />
              </Slide>
            )}
          />
        </CarouselContainer>

        {dotsPosition === 'bottom' && (
          <DotContainer>
            {content.map((_, index) => (
              <Dot key={index} active={activeIndex === index} />
            ))}
          </DotContainer>
        )}
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

const CarouselContainer = styled.View`
  align-items: center;
  height: 150px;
`;

const Slide = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 0 5px;
`;

const Image = styled.Image`
  width: 90%;
  height: 150px;
  border-radius: 20px;
`;

const DotContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.View<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ active, theme }) =>
    active ? theme?.colors?.primary || 'blue' : '#CCCCCC'};
  margin: 0 4px;
`;

export default CarouselComponent;
