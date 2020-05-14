import React, {useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {MEALS} from '../data/dummyData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import { toggleFavorite } from '../store/action/meals';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = ({navigation, route}) => {
  const {mealId} = route.params;

  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  //get all meal using useSelector
  const availableMeals = useSelector(state => state.meals.meals);
  //get all favorite meal
  const currentFavorite = useSelector(state => state.meals.favoriteMeals);
  //check if the mealid is already in currentFavorite
  const isCurrentFavorite = currentFavorite.some(meal => meal.id === mealId);
  //get a particular meal
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();
  const saveMeal = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name={isCurrentFavorite ? 'ios-star' : 'ios-star-outline'}
          size={30}
          color="#fff"
          onPress={saveMeal}
        />
      ),
    });
  }, [navigation, isCurrentFavorite]);

  return (
    <View>
      <ScrollView>
        <View>
          <View>
            <Image
              style={styles.bgImage}
              source={{uri: selectedMeal.imageUrl}}
            />
            <View style={styles.detail}>
              <Text style={styles.text}>{selectedMeal.duration}</Text>
              <Text style={styles.text}>{selectedMeal.complexity}</Text>
              <Text style={styles.text}>{selectedMeal.affordability}</Text>
            </View>
          </View>
          <Text style={styles.headText}>Ingredient</Text>
          <View style={styles.subTextContainer}>
            {selectedMeal.ingredients.map(element => (
              <ListItem key={element} style={styles.subText}>
                {element}
              </ListItem>
            ))}
          </View>
          <Text style={styles.headText}>Steps</Text>
          <View style={styles.subTextContainer}>
            {selectedMeal.steps.map(step => (
              <ListItem key={step} style={styles.subText}>
                {step}
              </ListItem>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bgImage: {
    width: '100%',
    height: 200,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  headText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  listItem: {
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
  },
});

export default MealDetailScreen;
