import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  CustomBlurview,
  CustomButton,
  CustomInput,
  CustomText,
} from '../components';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constants/sizes';
import styles from './styles';
import { paths } from './paths';
import { lightGrey } from '../constants/colors';
import { BlurView } from '@react-native-community/blur';
import { chatHistory } from '../constants/chatHistory';

const CustomChatInput = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <CustomText
      text='Azure Translation setup with API endpoints and SDK'
      style={{ lineHeight: 24 }}
      numberOfLines={1}
      {...props}
    />
  </TouchableOpacity>
);

const CustomChatSection = (props) => (
  <View style={{ gap: 24 }}>
    <CustomText
      text={props.heading}
      style={{
        fontWeight: 'bold',
        marginTop: DEVICE_HEIGHT * 0.04,
      }}
    />
    {props.texts?.map((text, index) => (
      <CustomChatInput
        key={index + text}
        text={text}
        onPress={() => console.log('cliked')}
      />
    ))}
  </View>
);

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView scrollEnabled={false} {...props}>
      <BlurView blurAmount={20} blurType='dark' overlayColor='rgba(0,0,0,0.92)'>
        <View
          style={{
            height: DEVICE_HEIGHT,
            justifyContent: 'flex-start',
            padding: DEVICE_HEIGHT * 0.03,
            borderRightWidth: 0.2,
            width: '100%',
            overflow: 'hidden',
            flex: 1,
          }}
        >
          <CustomButton
            text='New Prompt'
            onPress={() => console.log('prompt')}
            style={{
              height: DEVICE_HEIGHT * 0.06,
              marginBottom: DEVICE_HEIGHT * 0.02,
            }}
            bgColor='rgba(255,255,255,1)'
            textStyle={{ color: '#000', fontWeight: 'bold' }}
            rightIcon={() => <Ionicons name='add' size={20} color={'#000'} />}
          />
          <CustomInput
            placeholder='search'
            height={DEVICE_HEIGHT * 0.06}
            leftIcon={() => (
              <Ionicons name='search' size={24} color={lightGrey} />
            )}
            style={{
              marginBottom: DEVICE_HEIGHT * 0.04,
            }}
          />
          <DrawerItemList {...props} />
          <View style={{ flex: 1 }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                paddingBottom: DEVICE_HEIGHT * 0.1,
              }}
            >
              <CustomChatSection heading='Today' texts={chatHistory} />
              <CustomChatSection heading='Yesterday' texts={chatHistory} />
              <CustomChatSection heading='Yesterday' texts={chatHistory} />
            </ScrollView>
          </View>
        </View>
      </BlurView>
      <TouchableOpacity
        onPress={() => props.navigation.navigate(paths.SETTINGSSTACK)}
        style={[styles.bottomView, styles.flex]}
      >
        <View style={[styles.flex]}>
          <Image
            source={require('../assets/images/me.jpg')}
            style={styles.profile}
          />
          <CustomText
            text='Findo Peter Kampete'
            style={{
              fontWeight: 'bold',
              marginLeft: 5,
            }}
          />
        </View>
        <Ionicons name='ellipsis-horizontal' size={24} color={'#fff'} />
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
