$(function(){
  $("#numGen").click(function(){
    var a = prompt("Enter 1st Number.");
    var b = prompt("Enter 2nd Number.");
    numGen(a, b);
  });
});
function numGen(a, b){
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a)) + a;
}
