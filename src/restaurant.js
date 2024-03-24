function createRestaurant(name) {
  var item = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }

  return item

}
function addMenuItem(pizzaRestaurant, menuItem) {

  var hasItem = false
  if (menuItem.type === "breakfast") {

    for (var m = 0; m < pizzaRestaurant.menus.breakfast.length; ++m) {
      if (pizzaRestaurant.menus.breakfast[m].name === menuItem.name) {
        return hasItem = true
      }
    }

    if (hasItem === false) {
      return pizzaRestaurant.menus.breakfast.push(menuItem)
    }



  } else if (menuItem.type === "lunch") {
    for (var m = 0; m < pizzaRestaurant.menus.lunch.length; ++m) {
      if (pizzaRestaurant.menus.lunch[m].name === menuItem.name) {
        return hasItem = true
      }
    }

    if (hasItem === false) {
      return pizzaRestaurant.menus.lunch.push(menuItem)
    }


  } else if (menuItem.type === "dinner") {
    for (var m = 0; m < pizzaRestaurant.menus.dinner.length; ++m) {
      if (pizzaRestaurant.menus.dinner[m].name === menuItem.name) {
        return hasItem = true
      }
    }

    if (hasItem === false) {
      return pizzaRestaurant.menus.dinner.push(menuItem)
    }

  }
}
function removeMenuItem(data, item, type) {
  if (type === "breakfast") {
    for (var m = 0; m < data.menus.breakfast.length; ++m) {
      if (data.menus.breakfast[m].name === item) {
        data.menus.breakfast.splice(m, 1)
        return "No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!"
      }
    }
    return "Sorry, we don't sell Funfetti Cake, try adding a new recipe!"
  } else if (type === "lunch") {
    for (var m = 0; m < data.menus.lunch.length; ++m) {
      if (data.menus.lunch[m].name === item) {
        data.menus.lunch.splice(m, 1)
      }
    }
    return "Sorry, we don't sell Mom's Spaghetti, try adding a new recipe!"
  } else if (type === "dinner") {
    for (var m = 0; m < data.menus.dinner.length; ++m) {
      if (data.menus.dinner[m].name === item) {
        data.menus.dinner.splice(m, 1)
        return "No one is eating our Veggie Pizza - it has been removed from the dinner menu!"
      }
    }
  }
  
}

function checkForFood (data,item){
  if (item.type === "breakfast") {
    for (var m = 0; m < data.menus.breakfast.length; ++m) {
      if (data.menus.breakfast[m].name === item.name) {
        return `Yes, we're serving ${item.name} today!`
      }
    }
    return `Sorry, we aren't serving ${item.name} today.`
  } else if (item.type === "lunch") {
    for (var m = 0; m < data.menus.lunch.length; ++m) {
      if (data.menus.lunch[m].name === item.name) {
        return `Yes, we're serving ${item.name} today!`
      }
    }
    return `Sorry, we aren't serving ${item.name} today.`
  } else if (item.type === "dinner") {
    for (var m = 0; m < data.menus.dinner.length; ++m) {
      if (data.menus.dinner[m].name === item.name) {
        return `Yes, we're serving ${item.name} today!`
      }
    }
    return `Sorry, we aren't serving ${item.name} today.`
  }


  }
 



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  checkForFood
}