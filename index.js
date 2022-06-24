//grab all element required for dom manipulation
const searchButton = document.getElementById('search-btn');
const mealLists = document.getElementById('meal');
const mealDetails = document.querySelector('.meal-details-content');
const recipeCloseButton = document.getElementById('recipe-close-btn');
searchButton.addEventListener('click', getMealLists);