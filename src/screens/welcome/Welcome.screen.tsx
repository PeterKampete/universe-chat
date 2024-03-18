import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CustomBlurview, CustomText, CustomButton } from '../../components';
import styles from './styles';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { lightAccent, tertiary } from '../../constants/colors';
import { paths } from '../../navigation/paths';
import MainLayout from '../../layouts/MainLayout';

const Welcome = ({ navigation }) => {
  return (
    <MainLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/neon-ball.png')}
          style={styles.image}
        />
        <CustomText
          isHeading
          text='Universe Chat, Your AI Assitant'
          style={{ width: '95%' }}
        />
        <CustomText
          text='Artificial Intelligence to help you in everyday
          life and explore infinite capability the
          Powerfull Artificial Intelligence. Explore with me every AI possiblity'
          color={lightAccent}
          style={{ marginTop: 10, lineHeight: 23 }}
        />
      </ScrollView>
      <CustomButton
        text={`Let's Go!`}
        onPress={() => navigation.navigate(paths.AUTH)}
        style={{
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
          width: '100%',
        }}
      />
    </MainLayout>
  );
};

export default Welcome;
