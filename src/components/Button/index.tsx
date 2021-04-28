import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { buttonStyle } from './styles';

const Component: React.FC<TouchableOpacityProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity {...props} onPress={() => null} style={buttonStyle.main}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Component;
