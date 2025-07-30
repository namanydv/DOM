var elem = document.querySelectorAll('.elem');

elem.forEach(function(val) {
    val.addEventListener("mouseenter", function() {
        val.children[1].style.opacity = 1;  // assuming you want the second child
    });

    val.addEventListener("mouseleave", function() {
        val.children[1].style.opacity = 0;
    });

    val.addEventListener("mousemove", function(dets) {
        val.children[1].style.left = dets.x + "px";
    });
});




//  var elem = document.querySelectorAll('.elem');

//  elem.forEach(function(val){
//     val.addEventListener("mouseenter",function(val){
//         val.childNodes[3].style.opacity = 1;
//     })

//     val.addEventListener("mouseleave", function(val){
//         val.childNodes[3].style.opacity = 0;
//     })

//     val.addEventListener("mousemove",function(dets){
//         val.childNodes[3].style.left = dets.x+"px"
//     })
//  })



// var elem1 = document.querySelector('#elem1');
// var elemImg = document.querySelector('#elem1 img')

// elem1.addEventListener("mousemove",function(dets){
//     elemImg.style.left = dets.x+"px";
//     elemImg.style.top = dets.y+"px";
// })

// elem1.addEventListener("mouseenter",function(dets){
//     elemImg.style.opacity =1;
// })
// elem1.addEventListener("mouseleave",function(dets){
//     elemImg.style.opacity =0;
// })