import * as React from "react";
import { View, Button } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel"; // Ensure this library is installed

const PAGE_WIDTH = 300; // Adjust based on your layout
const colors = ["#26292E", "#899F9C", "#B3C680", "#5C6265", "#F5D399", "#F1F1F1"];

function CarsCopy() {
  const [isVertical, setIsVertical] = React.useState(false);
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [pagingEnabled, setPagingEnabled] = React.useState(true);
  const [snapEnabled, setSnapEnabled] = React.useState(true);
  const progress = useSharedValue(0);

  const baseOptions = isVertical
    ? {
        vertical: true,
        width: PAGE_WIDTH * 0.86,
        height: PAGE_WIDTH * 0.6,
      }
    : {
        vertical: false,
        width: PAGE_WIDTH,
        height: PAGE_WIDTH * 0.6,
      };

  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        ref={ref}
        {...baseOptions}
        style={{ width: PAGE_WIDTH }}
        loop
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        autoPlay={autoPlay}
        autoPlayInterval={1500}
        onProgressChange={progress}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={colors}
        renderItem={({ index }) => (
          <View style={{ backgroundColor: colors[index], flex: 1 }} />
        )}
      />

      <Pagination
        progress={progress}
        data={colors}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        containerStyle={{ gap: 5, marginBottom: 10 }}
        onPress={onPressPagination}
      />

      <Button onPress={() => setAutoPlay(!autoPlay)} title={`Autoplay: ${autoPlay}`} />
      <Button onPress={() => setIsVertical(!isVertical)} title={isVertical ? "Set Horizontal" : "Set Vertical"} />
      <Button onPress={() => setPagingEnabled(!pagingEnabled)} title={`Paging Enabled: ${pagingEnabled}`} />
      <Button onPress={() => setSnapEnabled(!snapEnabled)} title={`Snap Enabled: ${snapEnabled}`} />
    </View>
  );
}

export default CarsCopy;
