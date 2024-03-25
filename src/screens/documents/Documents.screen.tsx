import React from 'react';
import { useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LocalDocuments from './LocalDocument';
import CloudDocuments from './CloudDocuments';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import styles from './styles';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={[
          styles.navText,
          {
            fontWeight: focused ? 'bold' : 'normal',
            color: focused ? '#000' : 'rgba(42, 51, 67,0.5)',
          },
        ]}
      >
        {route.title}
      </Text>
    )}
    style={{ backgroundColor: 'transparent', shadowColor: 'transparent' }}
    renderIndicator={() => null}
    pressOpacity={0.2}
    pressColor='rgba(0,0,0,0.05)'
    tabStyle={{
      borderRadius: 16,
    }}
  />
);

const renderScene = ({ route }) => {
  switch (route.key) {
    case 'first':
      return <LocalDocuments />;
    case 'second':
      return <CloudDocuments />;
    default:
      return null;
  }
};
const Documents = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Local Storage' },
    { key: 'second', title: 'Cloud Storage' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ paddingTop: DEVICE_HEIGHT * 0.08 }}
      renderTabBar={renderTabBar}
    />
  );
};

export default Documents;
