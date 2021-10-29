import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {splash, kalkulator} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="splash" component={splash} options={{headerShown: false}} />
      <Stack.Screen name="kalkulator" component={kalkulator} options={{headerShown: false}} />
    </Stack.Navigator>
    )
}
export default Router