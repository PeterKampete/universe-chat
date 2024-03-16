import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import {
  AutomationCard,
  CustomBlurview,
  CustomPrompt,
  CustomSection,
  CustomText,
  CustomButton,
} from '../../components';
import styles from './styles';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { fontSizes } from '../../constants/fontSizes';
import { customPrompts } from '../../constants/customPrompts';
import { paths } from '../../navigation/paths';
import LottieView from 'lottie-react-native';
import { recents } from '../../constants/recents';
import { primary, tertiary } from '../../constants/colors';
import { trending } from '../../constants/trending';
import { automation } from '../../constants/automation';

const Suggestions = ({ navigation }) => {
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
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topView}>
            <LottieView
              source={require('../../assets/lottie/siri-outlined.json')}
              autoPlay
              loop
              style={styles.animatedBall}
            />
            <View style={{ gap: 3 }}>
              <CustomText text='Welcome Back, Oben' />
              <CustomText
                text='Universe here! Can I help you?'
                isHeading
                style={{ fontSize: fontSizes._20 }}
              />
            </View>
          </View>
          <CustomSection heading='Recent'>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row', gap: 15 }}>
              {recents.map((item) => (
                <TouchableOpacity style={styles.recent} key={item}>
                  <CustomText text={item} color={primary} />
                </TouchableOpacity>
              ))}
            </View>
          </CustomSection>
          <CustomSection heading='Trending Prompt'>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row', gap: 15 }}>
              {trending.map((item) => (
                <TouchableOpacity
                  style={[
                    styles.recent,
                    {
                      backgroundColor: tertiary,
                    },
                  ]}
                  key={item}
                >
                  <CustomText text={item} color='#fff' />
                </TouchableOpacity>
              ))}
            </View>
          </CustomSection>
          <CustomSection
            heading='Automation'
            style={{ paddingHorizontal: 0 }}
            textStyle={{ paddingHorizontal: 20 }}
          >
            <ScrollView
              horizontal
              contentContainerStyle={{ gap: 15, paddingHorizontal: 20 }}
            >
              {automation.map((item) => (
                <AutomationCard
                  key={item.id}
                  title={item.title}
                  caption={item.caption}
                  image={item.image}
                />
              ))}
            </ScrollView>
          </CustomSection>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            alignSelf: 'center',
            width: '100%',
            paddingHorizontal: 20,
          }}
        >
          <CustomButton
            text='+    Generate Chat'
            onPress={() => navigation.navigate(paths.DRAWERNAVIGATION)}
          />
        </View>
      </View>
    </View>
  );
};

export default Suggestions;
