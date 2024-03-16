import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import {
  CustomBlurview,
  CustomPrompt,
  CustomText,
  CustomButton,
  Login,
  Signup,
} from '../../components';
import styles from './styles';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { lightAccent, tertiary } from '../../constants/colors';
import { fontSizes } from '../../constants/fontSizes';
import { customPrompts } from '../../constants/customPrompts';
import { paths } from '../../navigation/paths';

const Auth = ({ navigation }) => {
  const signupModalRef = useRef(null);
  const loginModalRef = useRef(null);
  return (
    <View style={styles.container}>
      <CustomBlurview style={{ backgroundColor: 'rgba(0,0,0,0.96)' }}>
        <View
          style={[
            styles.patch,
            { position: 'absolute', right: DEVICE_WIDTH * 0.4, top: -20 },
          ]}
        />
        <View
          style={[styles.patch, { position: 'absolute', bottom: 0, left: -16 }]}
        />
      </CustomBlurview>
      <View
        style={{
          flex: 1,
          paddingTop: DEVICE_HEIGHT * 0.1,
          padding: 20,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require('../../assets/images/neon-ball.png')}
            style={styles.image}
          />
          <CustomText
            text='Discover for text, image and document transformations with Universe AI'
            isHeading
            style={{ fontSize: 34 }}
          />
          <CustomText
            text='What can I do for you?'
            style={{ fontSize: fontSizes._18, marginTop: 30, lineHeight: 24 }}
            color={lightAccent}
          />
          <View style={styles.customPrompts}>
            {customPrompts.map((item) => (
              <CustomPrompt icon={item.icon} text={item.text} key={item.tag} />
            ))}
          </View>
        </ScrollView>
        <CustomButton
          text='Authenticate'
          onPress={() => signupModalRef.current?.show()}
          style={{
            position: 'absolute',
            bottom: 20,
            alignSelf: 'center',
            width: '100%',
          }}
        />
      </View>
      <Signup
        ref={signupModalRef}
        hideSignupModal={() => signupModalRef.current?.hide()}
        showLoginModal={() => loginModalRef.current?.show()}
        navigation={navigation}
      />
      <Login
        ref={loginModalRef}
        hideLoginModal={() => loginModalRef.current?.hide()}
        showSignupModal={() => signupModalRef.current?.show()}
        navigation={navigation}
      />
    </View>
  );
};

export default Auth;
