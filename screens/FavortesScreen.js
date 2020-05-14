import React, { useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {MEALS} from '../data/dummyData';
import MealItem from '../components/MealItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';



const FavoritesScreen = ({navigation, route}) => {
  const selectedMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMeals = itemData => {
      return(<MealItem data={itemData} onSelectMeal={() => {
          navigation.navigate('MealDetail', {
            title: itemData.item.title,
            mealId: itemData.item.id
          })
      }} />
      )
  }
  useLayoutEffect(() => {
    navigation.setOptions({
        headerTitle: 'Your Favorites',
        headerLeft: () => (
            <Ionicons name='ios-menu' size={25}   onPress={() => {
               navigation.toggleDrawer();
            }}/>
        )
    })
}, [navigation]);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={selectedMeals}
        renderItem={renderMeals}
      />
     
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoritesScreen;
