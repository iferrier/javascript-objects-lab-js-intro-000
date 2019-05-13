var recipes, obj;

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, key, value);
  return(object);
}

var recipes = new Object();

updateObjectWithKeyAndValue(obj, prop2, '2');
