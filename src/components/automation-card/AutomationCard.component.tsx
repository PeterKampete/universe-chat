import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  View,
} from 'react-native';
import React, { ReactNode } from 'react';
import styles from './styles';
import CustomText from '../custom-text/CustomText.component';
import { fontSizes } from '../../constants/fontSizes';
import { tertiary } from '../../constants/colors';
import CustomButton from '../custom-button/CustomButton.component';
import { DEVICE_HEIGHT } from '../../constants/sizes';

interface IProps {
  title: string;
  caption: string;
  image?: ImageSourcePropType | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const AutomationCard = ({ title, caption, image, onPress }: IProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <CustomText
        text={title}
        color='#000'
        isHeading
        style={{ fontSize: fontSizes._18, marginTop: 12, marginBottom: 4 }}
      />
      <CustomText text={caption} color={tertiary} />
      <CustomButton
        text='Generate'
        onPress={onPress}
        style={{
          height: DEVICE_HEIGHT * 0.055,
          borderRadius: 12,
          marginTop: 20
        }}
      />
    </View>
  );
};

export default AutomationCard;
