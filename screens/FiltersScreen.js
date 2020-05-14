import React, {useState, useLayoutEffect, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  { useDispatch} from 'react-redux';
import { filterMeals } from '../store/action/meals';


const FilterItem = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.value}
        thumbColor="blue"
        onValueChange={props.onCahangeHandler}
      />
    </View>
  );
};

const FiltersScreen = ({navigation, route}) => {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilter = useCallback(() => {
    const appliedFilter = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(filterMeals(appliedFilter));
    console.log(appliedFilter);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons name="ios-save" size={25} color="#fff" onPress={saveFilter} />
      ),
    });
  }, [saveFilter]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="ios-menu"
          size={25}
          color="#fff"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      ),
      // headerRight: () => (
      //   <Ionicons
      //     name="ios-save"
      //     size={25}
      //     color="#fff"
      //     onPress={()=> {

      //     }}
      //   />
      // )
    });
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filter / Restriction</Text>

      <FilterItem
        value={isGlutenFree}
        onCahangeHandler={value => setGlutenFree(value)}
        label=" Gluten-Free"
      />

      <FilterItem
        value={isLactoseFree}
        onCahangeHandler={value => setLactoseFree(value)}
        label="Lactose-Free"
      />

      <FilterItem
        value={isVegan}
        onCahangeHandler={value => setVegan(value)}
        label="Vegan"
      />

      <FilterItem
        value={isVegetarian}
        onCahangeHandler={value => setVegetarian(value)}
        label="Vegetarian"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    width: '80%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'center',
    margin: 20,
  },
});

export default FiltersScreen;
