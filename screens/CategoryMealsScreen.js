import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
  const {navigation, route} = props;
  const {categoryId} = route.params;

  
  return (
    <MealList
        navigation={navigation}
        catId={categoryId}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});

export default CategoryMealsScreen;
