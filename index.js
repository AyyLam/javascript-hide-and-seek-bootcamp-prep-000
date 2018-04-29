function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
  }
}

function deepestChild() {
  var deepestGrandNode = document.querySelector('#grand-node');
  var grandNodeChild = deepestGrandNode.children[0]
  for (let i = 0; grandNodeChild.children === undefined; i++){
    grandNodeChild = grandNodeChild[i]
  }
  return grandNodeChild
} 

