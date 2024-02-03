import React from 'react';
import { ImageBackground } from 'react-native';

import { styles } from './style';

import backgroundImg from '../../assets/background.jpg';

interface Props {
  children: React.ReactNode;
}

export function Background({children}: Props) {
  return (
    <ImageBackground 
      source={backgroundImg} 
      defaultSource={backgroundImg} 
      style={styles.container} 
    >
      {children}
    </ImageBackground>
  );
}