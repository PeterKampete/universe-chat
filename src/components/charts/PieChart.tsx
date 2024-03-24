import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PieChart as PieChartComponent } from 'react-native-gifted-charts';
import { darkBlue, extraDarkBlue } from '../../constants/colors';

const pieData = [
  {
    value: 47,
    color: '#fff',
    gradientCenterColor: darkBlue,
    focused: true,
  },
  { value: 40, color: '#fff', gradientCenterColor: extraDarkBlue },
];

const PieChart = () => {
  return (
    <PieChartComponent
      data={pieData}
      donut
      showGradient
      sectionAutoFocus
      radius={65}
      innerRadius={55}
      innerCircleColor={'#232B5D'}
      centerLabelComponent={() => {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
              47%
            </Text>
            <Text style={{ fontSize: 14, color: 'white' }}>Excellent</Text>
          </View>
        );
      }}
    />
  );
};

export default PieChart;

const styles = StyleSheet.create({});
