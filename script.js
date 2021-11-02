var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Lightswitch is off';
document.body.appendChild(btn);

// schijf hier tussen je code
var light = "off"
document.body.style.backgroundColor = "black"

function buttonClick(){
    if(light == "off"){
        console.log("The light is off")
    }
    else{
        console.log("The light is on")
    }
    light = (light == "off") ? "on" : "off"
    background = (light == "off") ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "yellow"
    text = (light == "off") ? btn.innerHTML = "Lightswitch is off" : btn.innerHTML = "Lightswitch is on"
}

btn.addEventListener("click", buttonClick);

// schijf hier tussen je code