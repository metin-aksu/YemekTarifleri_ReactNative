import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoriesScreen">
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{
            title: 'Yemek Kategorileri',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#fea500',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{
            title: 'Yemekler',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#fea500',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{
            title: 'Detaylar',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#fea500',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
