function move(element) {
    element.classList.add("move");
  }
function back(element, input) {
    if(element.value === ''){
    input.classList.remove("move");
    }
  }
function passVal(p1, p2, label){
  if(p1.value != p2.value & p1.value != '' & p2.value != ''){
  label.classList.add('wrong')
  p2.classList.add('wrong')
  }
}
function removeWrong(input, label){
  label.classList.remove('wrong')
  input.classList.remove('wrong')
}