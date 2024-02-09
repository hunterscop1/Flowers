onload = () =>{
        document.body.classList.remove("container");
        var x = document.getElementById("musik");
        x.autoplay.loop = true;
        x.load();
}
