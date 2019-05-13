var recipes, obj;

function updateObjectWithKeyAndValue(obj, key, value) {
  var obj = { prop:1 };
  return Object.assign({}, obj, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key]= value;
  return(obj);
}

var obj = { prop:1 };
var recipes = new Object();

updateObjectWithKeyAndValue(obj, prop2 , 2);

destructivelyUpdateObjectWithKeyAndValue(obj, prop2, 2);
