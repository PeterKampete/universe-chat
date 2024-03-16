import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomBlurview from '../custom-blurview/CustomBlurview.component';
import CustomText from '../custom-text/CustomText.component';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';

interface IProps {
  text: string;
  isAssitant?: boolean;
  images?: ImageSourcePropType[];
}

const ChatItem = ({ text, isAssitant, images }: IProps) => {
  return (
    <View style={{ marginBottom: DEVICE_HEIGHT * 0.04 }}>
      {isAssitant ? (
        <View style={styles.assistantContainer}>
          <CustomText
            text={text}
            style={{ color: '#fff', flexShrink: 1, lineHeight: 24 }}
          />
          {images && (
            <View style={styles.images}>
              {images?.length > 0 ? (
                images?.map((img) => (
                  <Image source={img} style={styles.image} />
                ))
              ) : (
                <Image source={images?.[0]} style={styles.image} />
              )}
            </View>
          )}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name='copy' size={12} color='#000' />
              <Text style={styles.actionText}>Copy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MaterialCommunityIcons name='share' size={14} color='#000' />
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.userContainer}>
          <CustomText
            text={text}
            style={{ color: '#fff', flexShrink: 1, lineHeight: 24 }}
          />
        </View>
      )}
    </View>
  );
};

export default ChatItem;
