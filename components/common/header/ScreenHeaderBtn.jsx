import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './screenheader.style';

const ScreenHeaderBtn = (props) => {
  const { iconUrl, dimension, handlePress } = props;
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      ></Image>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
