for(let i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" ,
       function(){
           var buttonInnerHTML = this.innerHTML;
           makeSound(buttonInnerHTML);
           buttonAnimation(buttonInnerHTML);
       }
    );
}

document.addEventListener("keydown", 
    function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    }
)

function makeSound(key){

    switch(key){
        case "w":
            var tomOne = new Audio("sounds/tom-1.mp3");
            tomOne.play();
            break;
        case "a":
            var tomTwo = new Audio("sounds/tom-2.mp3");
            tomTwo.play();
            break;
        case "s":
            var tomThree = new Audio("sounds/tom-3.mp3");
            tomThree.play();
            break;
        case "d":
            var tomFour = new Audio("sounds/tom-4.mp3");
            tomFour.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
    }

}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(
        function(){
            activeButton.classList.remove("pressed");
        }, 100
    );
}