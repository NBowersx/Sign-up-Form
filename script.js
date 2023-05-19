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
  p2.classList.add('error')
  document.getElementById("mySubmit").disabled = true;
  }
}
function removeWrong(input, label){
  label.classList.remove('wrong')
  input.classList.remove('wrong')
  document.getElementById("mySubmit").disabled = false;
}
function numberFormat(e){
  //disable all non numbers to be entered
 var number= e.value.replace(/\D/g, '');
 //format number as (xxx)-xxx-xxxx
 var formatNum = '('+number.substring(0,3)+')'+number.substring(3,6)+'-'+number.substring(6,10)

 e.value= formatNum
}

function invalidField(event, message){
  event.preventDefault();
  message.classList.remove('error');
  void message.offsetWidth;
  message.classList.add('error')

}
function removeSpan(message){
  message.classList.remove('error')
}
function terms(x){
  x.showModal()
}
function closeTerm(x){
  x.close()
}
