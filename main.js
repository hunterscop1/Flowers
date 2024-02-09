onload = () =>{
        document.body.classList.remove("container");
}

window.addEventListener("DOMContentLoaded", function() {
var x = document.getElementById("musik");
document.body.addEventListener("mousemove", function() {
    x.play()
})
})
