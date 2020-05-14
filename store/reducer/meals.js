import {MEALS} from '../../data/dummyData';
import {TOGGLE_FAVORITE, FILTER_MEALS} from '../action/meals';

//Create initial state
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

//Create a reducer to update the store
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      //check if meal exist
      const existinFav = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existinFav >= 0) {
        const newFavoriteMeals = [...state.favoriteMeals];
        newFavoriteMeals.splice(existinFav, 1);
        return {...state, favoriteMeals: newFavoriteMeals};
      } else {
        //Add to favorite meals
        const favMeal = state.meals.find(meal => meal.id === action.mealId);
        return {...state, favoriteMeals: state.favoriteMeals.concat(favMeal)};
      }
      
      case FILTER_MEALS:
        const filterMealObject = action.filter;
        const updatedFilterMeal = state.meals.filter( meal => {
          if(filterMealObject.glutenFree && !meal.isGlutenFree) {
            return false
          }
          if(filterMealObject.lactoseFree && !meal.isLactoseFree) {
            return false
          }
          if(filterMealObject.isVegan && !meal.isVegan) {
            return false
          }
          if(filterMealObject.vegetarian && !meal.isVegetarian) {
            return false
          }
          return true
        });
        return {...state, filteredMeals:updatedFilterMeal }
        
    default:
      return state;
  }
};

export default mealsReducer;
