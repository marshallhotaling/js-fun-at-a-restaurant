function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length <= 2) {
    return deliveryOrders.push(order)
  } else {
    return deliveryOrders
  }

}
function refundOrder(item, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; ++i) {
    if (item === deliveryOrders[i].orderNumber) {
      return deliveryOrders.splice(i, 1)
    }

  }


}

function listItems(deliveryOrders) {
  var list = []

  for (var i = 0; i < deliveryOrders.length; ++i) {
    if (i === 0) {
      list = deliveryOrders[i].item
    }
    else {
      list = `${list}, ${deliveryOrders[i].item}`
    }
  }
  return list

}


function searchOrder(deliveryOrders, item) {
  var hasItem = false

  for (var i = 0; i < deliveryOrders.length; ++i) {
    if (deliveryOrders[i].item === item) {
      hasItem = true
    }
  }
  return hasItem
}








module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}