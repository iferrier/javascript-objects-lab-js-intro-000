var recipes;

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 };
  Object.assign({}, object, key, value);
  return(object);
}

var recipes = new Object();

updateObjectWithKeyAndValue(obj, 'prop2', '2');
