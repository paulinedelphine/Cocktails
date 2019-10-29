var apiResponse = {
    "drinks": [
    {
        "strDrink": "3-Mile Long Island Iced Tea",
        "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rrtssw1472668972.jpg",
        "idDrink": "15300"
      },
      {
        "strDrink": "69 Special",
        "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vqyxqx1472669095.jpg",
        "idDrink": "13940"
      },
      {
        "strDrink": "A1",
        "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2x8thr1504816928.jpg",
        "idDrink": "17222"
      },
      {
        "strDrink": "Abbey Cocktail",
        "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/quyyuw1472811568.jpg",
        "idDrink": "17834"
      },
      {
        "strDrink": "Abbey Martini",
        "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2mcozt1504817403.jpg",
        "idDrink": "17223"
      },
      {
        "strDrink": "Ace",
        "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/l3cd7f1504818306.jpg",
        "idDrink": "17225"
      },
      {
        "strDrink": "Adam & Eve",
        "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vfeumw1504819077.jpg",
        "idDrink": "17226"
      },
      {
        "strDrink": "Addison",
        "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yzva7x1504820300.jpg",
        "idDrink": "17228"
      },
      {
        "strDrink": "Alaska Cocktail",
        "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wsyryt1483387720.jpg",
        "idDrink": "11013"
      },
      {
        "strDrink": "Alexander",
        "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/urystu1478253039.jpg",
        "idDrink": "11014"
      }

    ]
};

console.log(apiResponse);

var cocktailList = document.querySelector ('#cocktail-list');
cocktailList.appendChild (testCocktailCard);


function createCocktailCard(name, imageUrl, id) {

    var card= document.createElement("div");
    card.className = "card";

    var h3= document.createElement("h3");
    h3.textContent = name;
    card.appendChild(h3)

    var image= document.createElement("img");
    image.src = imageUrl;
    card.appendChild(image)

    return card;
}

var testCocktailCard = createCocktailCard ("Stinger", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2ahv791504352433.jpg", 17193);

var cocktailList = document.querySelector ('#cocktail-list');
cocktailList.appendChild (testCocktailCard);


    

    

