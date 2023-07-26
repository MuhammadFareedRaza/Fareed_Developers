var temp = "";
var a = "";
var b = "";
var c = 0;
source = 1
var save_ans = 0;
function confirmed() {
  console.log(a);
  console.log(b);
  source += 1
}

function num1() {
  temp="1";
  if (source == 1) {
    a = a + temp
  }
  else {
    b = b + temp
  }
}

function num2() {
  temp="2";
  if (source==1){
    a = a+temp
  }
  else{
    b = b+temp
  }
}

function num3(){
  temp="3";
  if (source==1){
   a = a+temp
}
  else{
    b = b+temp
  }
}
function num4(){
  temp="4";
  if (source==1){
   a = a+temp
}
  else{
    b = b+temp
  }
}
function num5(){
  temp="5";
  if (source==1){
   a = a+temp
}
  else{
    b = b+temp
  }
}
function num6(){
  temp="6";
  if (source==1){
   a = a+temp
}
  else{
    b = b+temp
  }
}
function num7(){
  temp="7";
  if (source==1){
   a = a+temp
}
  else{
    b = b+temp
  }
}
function num8(){
  temp="8";
  if (source==1){
   a = a+temp
}
  else{
    b = b+temp
  }
}
function num9(){
  temp="9";
  if (source==1){
   a = a+temp
}
  else{
    b = b+temp
  }
}
function num0(){
  temp="0";
  if (source==1){
   a = a+temp
}
  else{
    b = b+temp
  }
}
function add(){
  a_int = parseInt(a);
  b_int = parseInt(b);
  c = a_int+b_int;
  c = String(c)
  resultBar = document.getElementById("text-answers");
  resultBar.innerText += a + " + " + b + " = " + c + "\n";
  c = parseInt(c);
}
function substract(){
  a_int = parseInt(a);
  b_int = parseInt(b);
  c = a_int-b_int;
  c = String(c)
  resultBar = document.getElementById("text-answers");
  resultBar.innerHTML += a + " - " + b + " = " + c + "\n";
  c = parseInt(c);
}
function multiply(){
  a_int = parseInt(a);
  b_int = parseInt(b);
  c = a_int*b_int;
  c = String(c)
  resultBar = document.getElementById("text-answers");
  resultBar.innerHTML += a + " * " + b + " = " + c + "\n";
  c = parseInt(c);
}
function divide(){
  a_int = parseInt(a);
  b_int = parseInt(b);
  c = a_int/b_int
  c = String(c)
  resultBar = document.getElementById("text-answers");
  resultBar.innerHTML += a + " / " + b + " = " + c + "\n";
  c = parseInt(c);
}

function clear_1(){
  a="";
  b="";
  c="";
  source = 1;
  alert("Cleared")
}
function saveans(){
  save_ans = c;
  alert("Your answer is saved.")
}
function show_answer(){
  alert(save_ans)
}
function clear_all(){
  resultBar = document.getElementById("text-answers");
  resultBar.innerHTML = "";
}

