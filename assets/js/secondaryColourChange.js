
// localStorage.setItem('colour', 'red');

// let x = localStorage.getItem('colour');

//  document.getElementById("bluebtn").onclick = function(){
//      localStorage.getItem("colour")
//  debugger;
//      if(localStorage.getItem("colour") === "red"){
        
//           let findRed = document.getElementsByClassName("red");
 
//           for (let el of findRed) {
//              $(el).removeClass("red"); $(el).addClass("blue");
//              console.log(el)
                    
//          }
//      }

//  }
debugger;
 localStorage.setItem('colour', 'red');

 document.getElementById("bluebtn").onclick = function(){
    let currentColour = "." + localStorage.getItem('colour');

    console.log(currentColour);

    let findClass = document.querySelectorAll(currentColour)

    console.log(findClass);

    for (let el of findClass) {
        
            let currentColour = localStorage.getItem('colour')
            
             $(el).removeClass(currentColour); $(el).addClass("blue");
             console.log(el)
         }





    // let findClass = document.getElementsByClassName(currentColour);

    // for (let el of findClass) {
    //     $(el).removeClass(currentColour); $(el).addClass("blue");
    //     console.log(el)
    // }

 }

 console.log(currentColour)


// document.getElementById("redbtn").onclick = function(){
//     localStorage.getItem("colour")
// debugger;
//     if(localStorage.getItem("colour") === "red"){
        
//          let findRed = document.getElementsByClassName("red");
 
//          for (let el of findRed) {
//             $(el).removeClass("red"); $(el).addClass("blue");
//              console.log(el)
                    
//         }
//     }

//     localStorage.setItem('colour', 'blue');

// }
// debugger;
// // var elems = document.querySelectorAll("red");
// var elems = document.querySelectorAll(".red");
// var elemCount = elems.length;

// // for (var i = 0; i <= elemCount-1; i++) {
//     // elemCount = function(){
//         $(elems).removeClass("red"); $(elems).addClass("blue");
//     // }
//     //  elems[i].className =  $(elems).removeClass("red"); $(elems).addClass("blue");
   
     
    
  

// }


// }

// $("document").ready(function(){
//     $(".hi").click(function(){
//         console.log("hello")
//     })
// })

// var elems = document.querySelectorAll("blue");
// var elemCount = elems.length;

// for (var i = 0; i < elemCount; i++) {
//   elems[i].className += "red";
// }



