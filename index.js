//grab all element required for dom manipulation
const searchButton = document.getElementById('search-btn');
const mealLists = document.getElementById('meal');
const mealDetails = document.querySelector('.meal-details-content');
const recipeCloseButton = document.getElementById('recipe-close-btn');
//event listener
searchButton.addEventListener('click', getMealLists);
mealLists.addEventListener('click', getRecipe)
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
            mealLists.classList.remove('notFound')
           
        } else{
            myData= "Sorry, there is no meal that matches your search!";
            mealLists.classList.add('notFound');
        }

        mealLists.innerHTML = html;
    });
}
    //get meal recipe
    function getRecipe(e){
        e.preventDefault()
        if(e.target.classList.contains('recipe-btn')){
            let mealItems = e.target.parentElement.parentElement;
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItems.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}
    