import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummyData';

import CategoryGridTile from '../components/CategoryGridTile';

const CategoryScreen = props => {
  const {navigation} = props;
   //console.log(props);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Meal category',
    });
    // console.log(navigation);
  }, [navigation]);

  const renderCategory = itemData => {
    return (
      <CategoryGridTile onClick={() => {
        navigation.navigate('CategoriesMeals', {
          categoryId: itemData.item.id,
          item: itemData.item.title
        })
      }} data={itemData} />
      
    );
  };

  return (
    <View >
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item, index) => item.id}
        renderItem={renderCategory}
        horizontal={false}
        numColumns={2}
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

export default CategoryScreen;
