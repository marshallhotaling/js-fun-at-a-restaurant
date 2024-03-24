function nameMenuItem(name) {

 return `Delicious ${name}`

}

function createMenuItem (name, price, type) {
var menuItem = {
name: name,
price: price,
type : type
}
return menuItem
}

function addIngredients (name, ingredients) {
  if(ingredients.includes(name)) {
  return ingredients
} else {
  return ingredients.push(name)
}
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price * 0.9
}
function createRecipe (title, ingredients, menuItemType) {
  var menuItem = {
    title: title,
    ingredients: ingredients,
    type : menuItemType
    }
    return menuItem







}





module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
   createRecipe
}


