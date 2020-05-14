import Category from '../model/category';
import Meal from '../model/meals'

export const CATEGORIES = [
    new Category('c1', 'Yoruba', '#f5428d'),
    new Category('c2', 'Yoruba', '#f5428d'),
    new Category('c3', 'Yoruba', '#f5428d'),
    new Category('c4', 'Yoruba', '#f5428d'),
    new Category('c5', 'Yoruba', '#f5428d'),
    new Category('c6', 'Yoruba', '#f5428d'),
    new Category('c7', 'Yoruba', '#f5428d'),
    new Category('c8', 'Yoruba', '#f5428d'),
    new Category('c9', 'Yoruba', '#f5428d'),
    new Category('c10', 'Yoruba', '#f5428d')
];

export const MEALS = [
    new Meal(
      'm1',
      ['c1', 'c2'],
      'Gbegiri Soup',
      'affordable',
      'simple',
      'https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/gbegiri-soup.jpg',
      20,
      [
        '150g Black Eyed or Brown Beans',
        '1 small smoked Mackerel/Titus',
        '1 tablespoon ground crayfish',
        '1 big stock cube',
        '1 cooking spoon palm oil',
        'Pepper and salt (to taste)'
      ],
      [
        'Soak the beans in some hot water; this makes it easier for the back of the beans to come off',
        'Wash the beans until it is completely clean.',
        'Put it in a pan and allow to boil for an hour and 30 minutes or until it is completely soft and mushy',
        'In another pot, boil your meat and add the necessary seasoning..',
        'Using a sieve, extract the liquified beans. Use a spoon as this is easier, and it will help remove all the water completely.',
        'Transfer the extraction into a clean pot and add the red oil, a little blended pepper, and dry pepper.',
        'Allow to boil for 3-5 minutes, then add the meat stock.',
        'Season to taste.',
        'Add the dry fish( ensure you soak the dry fish in some hot salted water before using it)  and the cray fish.',
        'Allow to boil on low heat for 10 minutes.'
      ],
      false,
      true,
      true,
      true
    ),
  
    new Meal(
      'm2',
      ['c2'],
      'Efo Riro',
      'affordable',
      'simple',
      'https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/efo-riro.jpg',
      10,
      [
        'Assorted meat and fish',
        '20 cl palm oil',
        '500g Efo Shoko',
        '5 tatashe peppers',
        '2 tablespoons ground crayfish',
        '2 red onions',
        '2 small stock cubes',
        '2 tablespoons locust beans (iru)',
        'Salt & Habanero / Scotch Bonnet peppers (to taste)'
      ],
      [
        'Start cooking the shaki first with as little water as possible  as it is the toughest meat in the bunch. ',
        'When the shaki starts to curl, add the dry fish and stockfish.',
        'When the shaki is almost done, add beef, stock cubes and some of the onions and cook till all the meat and fish are well done. Set these aside.',
        'In another pot, pour the palm oil and heat it up. Once hot, add the remaining onions.',
        'Fry the tatashe peppers till there\'s no more water in it. This should take about 15 minutes.',
        'Add the locust beans, crayfish, and stir very well.',
        'Add the cooked meat and fish, stir very well.',
        'Add the vgetables, stir very well, cover and once it heats up again, add salt to taste and take the pot off the stove.'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm3',
      ['c3'],
      'Pepper Stew(Obe Ata Din Din)',
      'pricey',
      'simple',
      'https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/pepper-stew.jpg',
      45,
      [
        '10 tatashe peppers',
        '3 cooking spoons sunflower oil (vegetable oil)',
        '1 tablespoon red palm oil',
        '2 medium onions',
        'Habanero Pepper (to taste)',
        '500g shaki (cow tripe)',
        '3 pieces dry fish (mangala)',
        '1 disc ogiri okpei (iru, dawa dawa, locust beans)',
        '1 handful crayfish',
        '1 tablespoon Nigerian curry powder',
        'Salt (to taste)'
      ],
      [
        'Boil the shaki with the diced onion till done.',
        'Pour the blended peppers in a pot and boil till all the water evaporates.',
        'Pour the vegetable oil into a clean dry pot and heat it up.',
        'Once very hot, pour the palm oil to give the bleached effect.',
        'Add the sliced onion and stir for about half a minute.',
        'Add the boiled pepper and fry (stirring from time to time) till there is no trace of water in the stew. You will also notice that the stew is streaked (see video below).',
        'Add the crayfish and ogiri okpei blend, dry fish, shaki, curry powder and salt to taste.',
        'Stir very well and it is done!'
      ],
      false,
      false,
      false,
      true
    ),
  
    new Meal(
      'm4',
      ['c4'],
      'Wiener Schnitzel',
      'luxurious',
      'challenging',
      'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
      60,
      [
        '8 Veal Cutlets',
        '4 Eggs',
        '200g Bread Crumbs',
        '100g Flour',
        '300ml Butter',
        '100g Vegetable Oil',
        'Salt',
        'Lemon Slices'
      ],
      [
        'Tenderize the veal to about 2–4mm, and salt on both sides.',
        'On a flat plate, stir the eggs briefly with a fork.',
        'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
        'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
        'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
        'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
        'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm5',
      ['c2', 'c5', 'c10'],
      'Salad with Smoked Salmon',
      'luxurious',
      'simple',
      'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
      15,
      [
        'Arugula',
        "Lamb's Lettuce",
        'Parsley',
        'Fennel',
        '200g Smoked Salmon',
        'Mustard',
        'Balsamic Vinegar',
        'Olive Oil',
        'Salt and Pepper'
      ],
      [
        'Wash and cut salad and herbs',
        'Dice the salmon',
        'Process mustard, vinegar and olive oil into a dessing',
        'Prepare the salad',
        'Add salmon cubes and dressing'
      ],
      true,
      false,
      true,
      true
    ),
  
    new Meal(
      'm6',
      ['c6', 'c10'],
      'Delicious Orange Mousse',
      'affordable',
      'hard',
      'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
      240,
      [
        '4 Sheets of Gelatine',
        '150ml Orange Juice',
        '80g Sugar',
        '300g Yoghurt',
        '200g Cream',
        'Orange Peel'
      ],
      [
        'Dissolve gelatine in pot',
        'Add orange juice and sugar',
        'Take pot off the stove',
        'Add 2 tablespoons of yoghurt',
        'Stir gelatin under remaining yoghurt',
        'Cool everything down in the refrigerator',
        'Whip the cream and lift it under die orange mass',
        'Cool down again for at least 4 hours',
        'Serve with orange peel'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm7',
      ['c7'],
      'Pancakes',
      'affordable',
      'simple',
      'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
      20,
      [
        '1 1/2 Cups all-purpose Flour',
        '3 1/2 Teaspoons Baking Powder',
        '1 Teaspoon Salt',
        '1 Tablespoon White Sugar',
        '1 1/4 cups Milk',
        '1 Egg',
        '3 Tablespoons Butter, melted'
      ],
      [
        'In a large bowl, sift together the flour, baking powder, salt and sugar.',
        'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
        'Heat a lightly oiled griddle or frying pan over medium high heat.',
        'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm8',
      ['c8'],
      'Creamy Indian Chicken Curry',
      'pricey',
      'challenging',
      'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
      35,
      [
        '4 Chicken Breasts',
        '1 Onion',
        '2 Cloves of Garlic',
        '1 Piece of Ginger',
        '4 Tablespoons Almonds',
        '1 Teaspoon Cayenne Pepper',
        '500ml Coconut Milk'
      ],
      [
        'Slice and fry the chicken breast',
        'Process onion, garlic and ginger into paste and sauté everything',
        'Add spices and stir fry',
        'Add chicken breast + 250ml of water and cook everything for 10 minutes',
        'Add coconut milk',
        'Serve with rice'
      ],
      true,
      false,
      false,
      true
    ),
  
    new Meal(
      'm9',
      ['c9'],
      'Chocolate Souffle',
      'affordable',
      'hard',
      'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
      45,
      [
        '1 Teaspoon melted Butter',
        '2 Tablespoons white Sugar',
        '2 Ounces 70% dark Chocolate, broken into pieces',
        '1 Tablespoon Butter',
        '1 Tablespoon all-purpose Flour',
        '4 1/3 tablespoons cold Milk',
        '1 Pinch Salt',
        '1 Pinch Cayenne Pepper',
        '1 Large Egg Yolk',
        '2 Large Egg Whites',
        '1 Pinch Cream of Tartar',
        '1 Tablespoon white Sugar'
      ],
      [
        'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
        'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
        'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
        'Place chocolate pieces in a metal mixing bowl.',
        'Place bowl over a pan of about 3 cups hot water over low heat.',
        'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
        'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
        'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
        'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
        'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
        'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
        'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
        'Transfer a little less than half of egg whites to chocolate.',
        'Mix until egg whites are thoroughly incorporated into the chocolate.',
        'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
        'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
        'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
      ],
      true,
      false,
      true,
      false
    ),
    new Meal(
      'm10',
      ['c2', 'c5', 'c10'],
      'Asparagus Salad with Cherry Tomatoes',
      'luxurious',
      'simple',
      'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
      30,
      [
        'White and Green Asparagus',
        '30g Pine Nuts',
        '300g Cherry Tomatoes',
        'Salad',
        'Salt, Pepper and Olive Oil'
      ],
      [
        'Wash, peel and cut the asparagus',
        'Cook in salted water',
        'Salt and pepper the asparagus',
        'Roast the pine nuts',
        'Halve the tomatoes',
        'Mix with asparagus, salad and dressing',
        'Serve with Baguette'
      ],
      true,
      true,
      true,
      true
    )
  ];