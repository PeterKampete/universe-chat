import { Text, TouchableOpacity, View } from 'react-native';
import React, { forwardRef, useState } from 'react';
import SwipeModal from '@birdwingo/react-native-swipe-modal';
import styles from './Auth.styles';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import CustomInput from '../custom-input/CustomInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { paths } from '../../navigation/paths';

interface IProps {
  showSignupModal?: () => void;
  hideLoginModal?: () => void;
  navigation: NavigationProp<any, any>;
}

type Ref = any;

const Login = forwardRef<Ref, IProps>(
  ({ hideLoginModal, showSignupModal, navigation }, ref) => {
    const [checked, setChecked] = useState(false);

    return (
      <SwipeModal
        ref={ref}
        fixedHeight
        style={styles.swipeModal}
        scrollEnabled
        closeOnPressBack
      >
        <View style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 10 }}>
          <Text style={styles.signupText}>Welcom Back</Text>
          <Text style={{ color: '#fff', marginTop: 8 }}>
            Sign in to continue
          </Text>
          <CustomInput
            placeholder='Email or phone number'
            style={{ marginTop: DEVICE_HEIGHT * 0.06 }}
            borderWidth={0.3}
            borderColor='grey'
          />
          <CustomInput
            placeholder='Email or phone number'
            style={{ marginVertical: 20 }}
            borderWidth={0.3}
            borderColor='grey'
          />
          <View style={styles.checkRow}>
            <TouchableOpacity
              onPress={() => setChecked(!checked)}
              style={styles.checkRow}
            >
              {checked ? (
                <Ionicons name='checkbox' size={20} color='#fff' />
              ) : (
                <MaterialCommunityIcons
                  name='checkbox-blank-outline'
                  size={20}
                  color='grey'
                />
              )}
              <Text style={[styles.rememberText, { marginLeft: 6 }]}>
                Remember Me
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.rememberText}>Need Help?</Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            text='Login'
            style={{ marginTop: DEVICE_HEIGHT * 0.055, marginBottom: 20 }}
            onPress={() => navigation.navigate(paths.SUGGESTIONS)}
          />
          <View style={[styles.checkRow, { justifyContent: 'center' }]}>
            <Text style={styles.rememberText}>New to netflix?</Text>
            <TouchableOpacity
              style={{ marginLeft: 6 }}
              onPress={() => {
                hideLoginModal();
                showSignupModal();
              }}
            >
              <Text
                style={[
                  styles.rememberText,
                  { fontSize: 14, fontWeight: 'bold' },
                ]}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SwipeModal>
    );
  }
);

export default Login;
