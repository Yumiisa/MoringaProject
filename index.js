//grab all element required for dom manipulation
const searchButton = document.getElementById('search-btn');
const mealLists = document.getElementById('meal');
const mealDetails = document.querySelector('.meal-details-content');
const recipeCloseButton = document.getElementById('recipe-close-btn');
//event listener
searchButton.addEventListener('click', getMealLists);
function getMealLists(){
let searchInputTxt = document.getElementById('search-input').value.trim();
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        //declare variable to store my data
        let myData = "";
        if(data.meals){
            data.meals.forEach(meal => {
                myData += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });