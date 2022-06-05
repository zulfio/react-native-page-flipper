import React from 'react';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';

const Gradient: React.FC<LinearGradientProps> = (props) => {
  return <LinearGradient {...props} />;
};

export { Gradient };

export const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
