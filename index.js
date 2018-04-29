function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt((i + n)
  }
}

function deepestChild() {
  var deepestGrandNode = document.querySelector(grand-node);
  while (deepestGrandNode.child) {
    deepestGrandNode = deepestGrandNode.deepestChild
  }
  return deepestGrandNode
} 

