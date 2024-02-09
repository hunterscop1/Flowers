onload = () =>{
        document.body.classList.remove("container");
};

function onAutoplay() {
var x = document.getElementById("musik")
x.autoplay.loop = true;
x.load();
}
