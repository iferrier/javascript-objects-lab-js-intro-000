var recipes;

function updateObjectWithKeyAndValue(object, key, value) {
  object.assign({}, object, key, value);
  return(object);
}

var recipes = new Object();
