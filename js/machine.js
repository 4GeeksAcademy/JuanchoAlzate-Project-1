var StatusMachine = "off";
var machine = document.getElementById("blender");
var SoundMachine = document.getElementById("blender-sound");
var ButtomMachine = document.getElementById("blender-buttom-sound");

function ControlMachine(){
    if (StatusMachine == "off") {
        StatusMachine = "on";
        AudioMachine();
        machine.classList.add("active");
        console.log("Maquina Encendida");
    } else {
        StatusMachine = "off";
        AudioMachine();
        machine.classList.remove("active")
        console.log("Maquina Apagada");
    }
}

function AudioMachine(){
    if (SoundMachine.paused) {
        ButtomMachine.play();
        SoundMachine.play();
    } else {
        ButtomMachine.play();
        SoundMachine.pause();
        SoundMachine.currentType = 0;
    }
}