
// document.querySelector("wdrum").addEventListener("click",handleClick)
// document.querySelectorAll("button").addEventListener("click", function () {
//   alert("hh")
// });

// import {crash} from  './sounds/crash.mp3';

for (var i =0 ; i<document.querySelectorAll("button").length ; i++ )
{
    document.querySelectorAll("button")[i].addEventListener("click", function () 
    {                
       buttonInnerHtml = this.innerHTML;
            // (this.style.color = 'black');
       makeSound(buttonInnerHtml);
       buttonAnim(buttonInnerHtml);
    });

}

    // detects keypress

document.addEventListener("keypress" , (e) => {
  makeSound(e.key);     
    buttonAnim(e.key);
})


function makeSound(key) {
  
  switch(key)
  {

    case 'w' || 'W' :
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            // this.style.color = 'black';
            break;
    
    
    case 'a' || 'A' :
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            // this.style.color = 'yellow';
            break;

    
    case 'd' || 'D' :
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      // this.style.color = 'white';
      break;
                  
    case 's' || 'S' :
      var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            // this.style.color = 'yellow';
            break;
                  
    case 'j' || 'J' :
      var audio = new Audio('sounds/tom-3.mp3');
                  audio.play();
                  // this.style.color = 'cyan';
                  break;
                  
    case 'k' || 'K' :
      var audio = new Audio('sounds/tom-4.mp3');
                  audio.play();
                  // this.style.color = 'blue';
                        break;
                  
    case 'l' || 'L' :
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      // this.style.color = 'violet';
                  break;     
    
    default: alert('please press the buttons that are shownupp')
  }
}


function buttonAnim(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  } ,600 )
}


// document.addEventListener("keypress", (e) => {
//  var h= alert('hehe');
//   console.log(e.key);   
// })

// document.querySelector(".w").addEventListener("click", function () {
//   // alert("one amongst 7 are clicked ");
//   // alert("Yoo! 'W' was Clicked");
//   var textContent;
//           //  textContent  += `${e.code}`;
//           //  console.log.textContent;
//           //  textContent = `${e.key}`;
//           // if(textContent == 'w')
//           //  {
//             console.log(textContent);
//             var audio = new Audio('sounds/crash.mp3');
//             audio.play();
//             this.style.color = 'black';
//           // }
// });
//             document.querySelector(".w").addEventListener("keydown", function (e) {
//           // alert("one amongst 7 are clicked ");
//             // alert("Yoo! 'W' was Clicked");
//            var textContent;
//            textContent  += `${e.code}`;
//           //  console.log.textContent;
//            textContent = `${e.key}`;
//           if(textContent == 'w')
//            {
//             console.log(textContent);
//             var audio = new Audio('sounds/crash.mp3');
//             audio.play();
//             this.style.color = 'black';
//           }
//       });


  
//         document.querySelector(".a ").addEventListener("click", function () {
//             // alert("one amongst 7 are clicked ");
//             // alert("Yoo! 'A' was Clicked");
//             var audio = new Audio('sounds/kick-bass.mp3');
//             audio.play();
//             this.style.color = 'green';
//       });

//         document.querySelector(".s ").addEventListener("click", function () {
//             // alert("one amongst 7 are clicked ");
//             // alert("Yoo! 'S' was Clicked");
//             var audio = new Audio('sounds/tom-1.mp3');
//             audio.play();
//             this.style.color = 'black';
//             this.style.color = 'yellow';
//       });
  
//         document.querySelector(".d ").addEventListener("click", function () {
//             // alert("one amongst 7 are clicked ");
//             alert("Yoo! 'D' was Clicked");
            // var audio = new Audio('sounds/snare.mp3');
            // audio.play();
            // this.style.color = 'white';
//       });

//         document.querySelector(".j ").addEventListener("click", function () {
//             // alert("one amongst 7 are clicked ");
//             alert("Yoo! 'J' was Clicked");
//             var audio = new Audio('sounds/tom-3.mp3');
//             audio.play();
//             this.style.color = 'cyan';
//       });

//         document.querySelector(".k").addEventListener("click", function () {
//             // alert("one amongst 7 are clicked ");
//             alert("Yoo! 'K' was Clicked");
//             var audio = new Audio('sounds/tom-4.mp3');
//             audio.play();
//             this.style.color = 'blue';

//       });

//         document.querySelector(".l").addEventListener("click", function () {
//             // alert("one amongst 7 are clicked ");
//             alert("Yoo! 'L' was Clicked");
            // var audio = new Audio('sounds/tom-2.mp3');
            // audio.play();
            // this.style.color = 'violet';

//       });
  
    // alert("The Total BeatCounts were : ")


// function handleClick() {
//     alert("hhhh")
// }

// function handleClick2() {
//     alert("A's clicked")
// }
