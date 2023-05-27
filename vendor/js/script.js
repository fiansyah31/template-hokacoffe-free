const navbar = document.querySelector("#navbar");

window.onscroll =  function() {
    if(this.pageYOffset > 0){
        navbar.classList.add("scrolled");
    }else {
        navbar.classList.remove("scrolled");
    }
}