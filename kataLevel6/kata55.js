/*
Pete likes to bake some cakes. He has some recipes and ingredients.
Unfortunately he is not good in maths. Can you help him to find out,
how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and
the available ingredients (also an object)
and returns the maximum number of cakes Pete can bake (integer).
Ingredients that are not present in the objects, can be considered as 0.

input: two arguments:
1. obj representing the required recipe
2. obj representing the available ingredients

output: integer: max # of recipes

for each required ingredient in obj1, take the value of obj2 and divide obj1[ing] / obj2[ing]
take the int of the result and put it in an array
if there is no ingredient return 0

sort the array and return the lowest number
*/

const cakes = (recipe, available) => {
  return Object.keys(recipe).map((ingredient) => {
    return parseInt((available[ingredient] / recipe[ingredient]), 10) || 0;
  }).sort((a, b) => a - b)[0];
};


// must return 2
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// must return 0
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
