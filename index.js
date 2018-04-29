function getFirstSelector(selector) {
  return document.querySelector(selector)[0]
}

function nestedTarget() {
  return document.getElementById(nested).querySelector(target);
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = (i + n).toString() 
  }
}

function deepestChild() {
  const deepestGrandNode = document.querySelector(grand node)
}