// $ Pillars of DOM//
 /*
1. Selection of an Element
2. Changing HTMl
3. changing CSS
4. Event Listener
*/

//Selection of an Element
// var a = document.querySelector("h1");

// //Changing the HTML
// a.innerHTML = "The Context is Changed";

// //Changing the CSS
// a.style.color = "white";
// a.style.backgroundColor = "black";

// //event Listener
// a.addEventListener("click",function(){
//     a.innerHTML = "I am Changed Again"
//     a.style.backgroundColor ="red"
// })

// var bul = document.querySelector("#bulb");
// var a = document.querySelector("button");

// var flag = 0;

// a.addEventListener("click",function(){
//     if(flag == 0){
//         bul.style.backgroundColor = "yellow";
//         bul.style.boxShadow = "0 0 20px yellow";
//         a.innerHTML = "Switch Off";
//         flag = 1;
//     } else {
//         bul.style.backgroundColor = "whitesmoke";
//         bul.style.boxShadow = "none";
//         a.innerHTML = "Switch On";
//         flag = 0;
//     }
// });

// var h = document.querySelectorAll("h1");

// // print the innerHTML of all h1 elements
// h.forEach(function(elem){
//     console.log(elem.innerHTML);
// })

var s = document.querySelector("h5");
var btn1 = document.querySelector('#btn-1');
var btn2 =document.querySelector('#btn-2')

var flag = 0;

btn1.addEventListener("click",function(){
        s.innerHTML="Stranger";
        btn1.innerHTML ="Remove";
        s.style.color="red"
})

btn2.addEventListener("click",function(){
        s.innerHTML="Friend";
        btn1.innerHTML ="Remove";
        s.style.color="green";
})