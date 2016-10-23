
//checking is javascript is working
// console.log("hello everybody")

//calling on the entire html file
// var all = document.getElementById("all");
//console logging to make sure it is, what it is
// console.log(all)

//test cses
// var main = document.getElementById("main")
// console.log(main)

//calling the div file with everything in it
var master = document.getElementById("master")
//console logging to make sure it is
console.log(master)

//getting the x button
var btn = document.getElementById("x")
//console logging to make sure it is what it is
console.log(btn)

//when user clicks the x, the event listener enables the function
btn.addEventListener("click",function(){
	//console logging to see where i am in the function
	console.log("event listener is working")
	//calling the element from line 15 and then making it empty
	master.innerHTML = "";
	//console logging to make sure its working
	console.log("it worked")
})