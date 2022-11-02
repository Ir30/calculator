function click_btn(val){
    document.getElementById("screen").value+=val
}

function clear_screen(){
    document.getElementById("screen").value=""
}
function eaqual_click(){
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value=result
}