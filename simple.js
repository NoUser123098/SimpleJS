$(function(){
  $("#numGen").click(function(){
    var a = $("#gen1").val();
    var b = $("#gen2").val();
    numGen(a, b);
  });
});
function numGen(a, b){
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a)) + a;
}
