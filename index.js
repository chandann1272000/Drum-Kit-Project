for(var i=0;i<document.querySelectorAll('.drum').length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    playSound(this.textContent);
    buttonAnimation(this.textContent);
})}

document.addEventListener('keydown',function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})



function playSound(key){
    var sound="";
    switch(key){
        case 'w':
            sound='crash';
            break;
        case 'a':
            sound='kick-bass';
            break;
        case 's':
            sound='snare';
            break;
        case 'd':
            sound='tom-1';
            break;
        case 'j':
            sound='tom-2';
            break;
        case 'k':
            sound="tom-3";
            break;
        case 'l':
            sound='tom-4';
            break;
    }

    var audio=new Audio('./sounds/'+sound+'.mp3');
    audio.play();
}


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}