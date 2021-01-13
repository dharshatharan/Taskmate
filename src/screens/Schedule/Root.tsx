import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Schedule from './Schedule'
import AddTaskBottomSheet from '@components/AddTaskBottomSheet'
import LeftModal from '@components/Modals/LeftModal'
// import Styles from '../../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function Root({ navigation }: any) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Schedule}
                options={{
                    title: 'CPU Home', headerLeft: () => (
                        <TouchableOpacity
                            // style={Styles.headerButton}
                            onPress={() => navigation.navigate("Detail")}
                        >
                            <Text>Open Drawer</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="Detail"
                component={LeftModal}
                options={{ title: 'CPU Detail' }}
            />
        </Stack.Navigator>
    );
}