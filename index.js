function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(i + n)
  }
}

function deepestChild(){
  return document.querySelector('div#grand-node div div div div')
}
