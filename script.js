let patoch =false;
const patocheMusique = new Audio('musique/Joyeux Anniversaire - Patrick Sébastien.mp3');
const drum = new Audio('musique/Bass Drum - Sound Effect.mp3');
const jouerBatterie = () =>{
    
    if(!patoch){
        patocheMusique.play()
    }else{
        drum.play()
    }
    patoch = true; 
}

document.getElementById('gateau').addEventListener('click',jouerBatterie);


