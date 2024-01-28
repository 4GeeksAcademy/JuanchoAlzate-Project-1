var StatusMachine = "off";

function ControlMachine(){
    if (StatusMachine == "off") {
        StatusMachine = "on";
        console.log("Maquina Encendida");
    } else {
        StatusMachine == "off";
        console.log("Maquina Apagada");
    }
}