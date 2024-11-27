import { Text, View } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const Map = () => {
  const translateY = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      translateY.value = event.translationY > 0 ? event.translationY : 0;
    })
    .onEnd(() => {
      translateY.value =
        translateY.value > 100 ? withSpring(300) : withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const MAPTILER_API_KEY = "VqwpCTRfiFiP9uoi9Vkz";
  return (
    <View className="flex-1 bg-blue-300 relative">
      <View className="h-1/2 w-full bg-white absolute bottom-0 rounded-tl-2xl rounded-tr-2xl"></View>
    </View>
  );
};

export default Map;
