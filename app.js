let song = document.querySelector("#teri");
let playbtn = document.querySelector("#playbtn");

let isplaying = false;
playbtn.addEventListener("click" , function(){
    if(isplaying == false){
        song.play();
        playbtn.src = "9744-spotify-pause.png";
        isplaying = true;
        
    }
    else{
        song.pause();
        playbtn.src = "player_icon3.png";
        isplaying = false;
    }
});

song.addEventListener("ended", function () {
    playBtn.src = "player_icon3.png";
    isPlaying = false;
});


