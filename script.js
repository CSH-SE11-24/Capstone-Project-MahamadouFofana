// This is selecting the "ww" id which is an image
let baske = document.getElementById("ww");

// This allows me to go from index.html to offerings.html when I click the image with the id "ww".
baske.addEventListener("click", function(event){
  window.location.href = "offerings.html"
});

let baa = document.getElementById("haaaa");

  baa.addEventListener("mouseover", function(event) {
       baa.textContent = "Welcome to HiveClass!";
  });

let hero = document.getElementById("aaaaa");

hero.addEventListener("mouseover", function(event){
  hero.src = "logohive.png"
})