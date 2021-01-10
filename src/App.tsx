import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
// import RNBootSplash from 'react-native-bootsplash';
import Icon from 'react-native-vector-icons/FontAwesome';
import Schedule from 'screens/Schedule/Root';
import Tasks from '@screens/Tasks';
import {sleep} from './utils/async';

export type AppTabParamList = {
  Home: undefined;
  Settings: {userID?: string};
};

const Tab = createBottomTabNavigator();

const App = () => {
  const init = async () => {
    await sleep(1000);
    // …do multiple async tasks
  };

  React.useEffect(() => {
    init().finally(() => {
      // RNBootSplash.hide({fade: true}); // fade animation
    });
  }, []);

  const {t} = useTranslation();
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="home"
        component={Schedule}
        options={{
          tabBarLabel: t('home'),
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'calendar' : 'calendar'}
              // type="material-community"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Tasks}
        options={{
          tabBarLabel: t('settings'),
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'tasks' : 'tasks'}
              // type="material-community"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
