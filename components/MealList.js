import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummyData';

import { useSelector } from 'react-redux';

import MealItem from './MealItem';



const MealList = props => {

  const categoryId = CATEGORIES.find(element => element.id === props.catId);
 
  const getMeals = useSelector(state => state.meals.filteredMeals)

  const selectedMeal = getMeals.filter(
    meal => meal.categoryIds.indexOf(props.catId) >= 0,
  );
    
  const renderMeal = itemData => {
    return (
      <MealItem
        data={itemData}
        onSelectMeal = {() => {
          props.navigation.navigate('MealDetail', {
            title: itemData.item.title,
            mealId: itemData.item.id
          })
        }}
      />
    );
  }

    return (
      <View style={styles.container}>
        <FlatList
          data={selectedMeal}
          keyExtractor={(item, index) => item.id}
          renderItem={renderMeal}
          style={{width: '100%'}}
        />
       
    </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default MealList