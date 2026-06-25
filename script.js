var display=document.getElementById('display')

function appendto(input){
    display.value=display.value+input
}
function clearing(){
    display.value=''
}

function calc(){
    var result=eval(display.value)
    display.value=result
}

function clrone(){
    display.value=display.value.slice(0,-1)
}