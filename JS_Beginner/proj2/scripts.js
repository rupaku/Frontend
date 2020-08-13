var cyan = document.querySelector(".cyan")
var violet = document.querySelector(".violet")
var orange = document.querySelector(".orange")
var pink = document.querySelector(".pink")

var pink = document.querySelector(".center")
const getBGCOlor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor
}

console.log(getBGCOlor(pink))
