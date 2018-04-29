function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById(nested).querySelector('target');
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = (i + n).toString() 
  }
}

function deepestChild() {
  var deepestGrandNode = document.querySelector(grand-node);
  while (deepestGrandNode.child) {
    deepestGrandNode = deepestGrandNode.deepestChild
  }
  return deepestGrandNode
} 

