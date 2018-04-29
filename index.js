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
  var deepestGrandNode = document.querySelector('div#grand-node');
  var grandNodeChid = deepestGrandNode[0]
  for (let i = 0; i < deepestGrandNode.length; i++){
    grandNodeChid = grandNodeChid[i]
  }
  return grandNodeChid
} 

