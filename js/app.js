//Scroll para Nav
window.addEventListener("scroll", function(){
  let nav = document.querySelector("nav");
  nav.classList.toggle("abajo", this.window.scrollY > 60)
});