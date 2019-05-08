function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll('ul.ranked-list')
  for (const element in rankedLists) {
    console.log(element)
  }
}
