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
  console.log('jeb!')
  document.getElementById("mySubmit").disabled = true;
  }
}
function removeWrong(input, label){
  label.classList.remove('wrong')
  input.classList.remove('wrong')
  document.getElementById("mySubmit").disabled = false;
}
function numberFormat(e){
 var number= e.value.replace(/\D/g, '');
 console.log('fg')
 console.log(e.value)
 e.value= number
 console.log(e.value)
 console.log(number)
}