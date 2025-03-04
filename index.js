var recipes, obj;

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key]= value;
  return(obj);
}

function deleteFromObjectByKey(obj,key) {
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return(newObj);
}

function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj[key];
  return(obj);
}

var obj = { prop:1 };
var recipes = new Object();

updateObjectWithKeyAndValue(obj, prop2 , 2);

destructivelyUpdateObjectWithKeyAndValue(obj, prop2, 2);
