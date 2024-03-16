import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomBlurview, CustomButton } from '../components';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constants/sizes';
import styles from './styles';
import { paths } from './paths';
import { lightAccent } from '../constants/colors';
import { BlurView } from '@react-native-community/blur';

const customDrawerItemStyles: ViewStyle | TextStyle = {
  borderRadius: 0,
  width: '100%',
  marginLeft: -10,
  paddingLeft: 0,
  fontSize: 15,
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <BlurView blurAmount={20} blurType='dark' overlayColor='rgba(0,0,0,0.95)'>
        <View
          style={{
            height: DEVICE_HEIGHT,
            justifyContent: 'flex-start',
            padding: DEVICE_HEIGHT * 0.03,
            borderRightWidth: 0.2,
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <DrawerItemList {...props} />
          <CustomButton
            text='Logout'
            style={{
              position: 'absolute',
              bottom: DEVICE_HEIGHT * 0.03,
              width: '100%',
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: '#fff',
              height: DEVICE_HEIGHT * 0.06,
            }}
            bgColor='transparent'
            onPress={() => console.log('loasc')}
          />
          {/* <DrawerItem
            label='Logout'
            icon={({ focused, color, size }) => (
              <Ionicons
                name='exit'
                size={size ? size : 24}
                color={color}
                style={{ left: 10 }}
              />
            )}
            style={customDrawerItemStyles}
            activeTintColor='#fff'
            inactiveTintColor='#fff'
            activeBackgroundColor='transparent'
            onPress={() => console.log('loasc')}
          /> */}
        </View>
      </BlurView>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
