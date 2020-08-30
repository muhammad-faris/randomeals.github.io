import "./caption-title.js";
import "./style.css";

const get_meal_btn = document.querySelector("#get_meal");
const meal_container = document.querySelector("#meal");

get_meal_btn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => 
            response.json())
        .then(response => {
            createMeal(response.meals[0])
        })
        .catch(e => {
            console.warn(e);
        });
});

const createMeal = meal => {
    const ingredients = [];

    //Get ingredients
    for(let i = 1; i <= 20; i++) {
        if(meal[`strIngredients${i}`]) {
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
        } else {
            break;
        }
    }

    const newInnerHTML = `
    <div class="row">
        <div class="columns five">
            <img src="${meal.strMealThumb}" class="meal-image" alt="Meal Image">
            ${
                meal.strCategory
                    ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
                    : ''
            }
            ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
            ${
                meal.strTags
                    ? `<p><strong>Tags:</strong> ${meal.strTags
                            .split(',')
                            .join(', ')}</p>`
                    : ''
            }
            <h4>Ingredients:</h4>
            <ul>
                ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        <div class="columns seven">
            <h2>${meal.strMeal}</h2>
            <p class="instruction">${meal.strInstructions}</p>
        </div>
    </div>
    ${
        meal.strYoutube
            ? `
    <div class="row">
        <h4>Video Recipe</h4>
        <div class="videoWrapper">
            <iframe width="420" height="315"
            src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
            </iframe>
        </div>
    </div>`
            : ''
    }
`;

    meal_container.innerHTML = newInnerHTML;
};