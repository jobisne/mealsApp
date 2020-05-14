import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CategoryScreen from '../screens/CategoryScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavortesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const Stack = createStackNavigator();

function MealsNavigatorContainer() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Categories" component={CategoryScreen} />
      <Stack.Screen
        name="CategoriesMeals"
        component={CategoryMealsScreen}
        options={({route}) => ({title: route.params.item})}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
}
const FilterNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}
    >

      <Stack.Screen  name="Filter" component={FiltersScreen}/>

    </Stack.Navigator>
  );
}
function FavoriteNavigatorContainer() {
  return (
    <Stack.Navigator
      initialRouteName="Favorite"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        gestureEnabled: true,
      }}>
      <Stack.Screen
        name="Favorite"
        component={FavoritesScreen}
        
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let IconComponent = Ionicons;
          let iconName;

          if (route.name === 'Meals') {
            iconName = focused ? 'ios-restaurant' : 'md-restaurant';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'ios-star' : 'ios-star-outline';
          }

          return <IconComponent name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Meals" component={MealsNavigatorContainer} />
      <Tab.Screen name="Favorite" component={FavoriteNavigatorContainer} />
    </Tab.Navigator>
  );
};

const MyDrawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <MyDrawer.Navigator>
      <MyDrawer.Screen  name='Meals' component={ TabNavigator }/>
      <MyDrawer.Screen name='Filters' component={FilterNavigator} />
    </MyDrawer.Navigator>
  );
}

export default function MealsNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
