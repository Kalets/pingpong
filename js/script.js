/*

My Custom JS
============

*/

var userInput = parseInt(prompt("Enter a number: "));
var range = [];

for(i= 1;i<= userInput;i++){
range.push(i);
};

alert(range);

for(index=0;index<=range.length;index++){
    if(range[index]%15 === 0) {
     range.splice(index, 1, "pingpong");
 } else if(range[index]%5 === 0) {
     range.splice(index, 1, "pong");
 } else if(range[index]%3 === 0) {
     range.splice(index, 1, "ping");
 };
};
alert(range);




$(document).ready(function() {
   $("#flop").submit(function(event) {
       event.preventDefault();

       var userInput = parseInt($("#userinput").val());

       display(userInput);

       last.forEach(function(i){
           $("ul").append("<li>" + i + "</li>")
       });

   });
});