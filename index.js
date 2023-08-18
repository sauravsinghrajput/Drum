var numb = document.querySelectorAll(".drum").length;
function sound(button){
    animation(button);
    if(button === "w"){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        }
        else if(button === "a"){
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        }
        else if(button === "s"){
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        }
        else if(button === "d"){
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        }
        else if(button === "j"){
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        }
        else if(button === "k"){
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        }
        else if(button === "l"){
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        }
}
for(var i = 0;i <numb;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    sound(this.innerHTML);
}

)}
document.addEventListener("keypress",function(event){
    sound(event.key);
})
function animation(key){
   var x =  document.querySelector("."+key);
   x.classList.add("pressed");
    setTimeout(function(){
        x.classList.remove("pressed")
    },100);
}
